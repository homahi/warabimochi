<template lang="pug">
  .container
    .hero 
      h1.title わらびもち
    section.section 
      b-field(label="Name")
        b-input(v-model="seminorName")
      b-field
        button.button.is-primary(@click="onClick") 登録
    b-table(:data="seminors" paginated detailed)
      template(slot-scope="props")
        b-table-column(field="name" label="名前" sortable) {{props.row.name}}
        b-table-column(field="date" label="予定日" sortable) {{props.row.date ? moment(props.row.date).format('YYYY/MM/DD') : ''}}
        b-table-column(width="40")
          button.button.is-primary(@click="promptDate(props.row)") 予定登録
    b-modal(:active.sync="isDatePromptActive" has-modal-card @close="reset")
      //- Date(@submit="updateDate" :date="selectedSeminor ? moment(selectedSeminor.date).toDate() : null")
      Date(@submit="updateDate" :date="selectedSeminor ? selectedSeminor.date : null")
    p {{selectedSeminor ? selectedSeminor.id : ''}}

</template>

<script lang="ts">
import { Component, Vue, State, Getter } from "nuxt-property-decorator";
import * as firebase from "firebase";
import { db } from "../plugins/firebase";
import Date from "../components/organisms/Date/Date";
import moment from "moment";

const seminorsFB = db.collection("seminors");

@Component({
  components: {
    Date
  }
})
export default class extends Vue {
  seminorName = "";
  isDatePromptActive = false;
  selectedSeminor: any = null;
  moment = moment;
  firestore = firebase.firestore;
  @Getter("seminors") seminors;

  async asyncData({ store }) {
    store.dispatch("initalize", seminorsFB);
  }

  created() {
    console.log(this.seminors);
  }

  onClick() {
    db.collection("seminors").add({
      name: this.seminorName
    });
    this.seminorName = "";
  }

  promptDate(seminor) {
    this.isDatePromptActive = true;
    this.selectedSeminor = seminor;
  }
  updateDate(date) {
    this.isDatePromptActive = false;
    if (this.selectedSeminor) {
      seminorsFB.doc(this.selectedSeminor!.id!).update({
        date: firebase.firestore.Timestamp.fromDate(date)
      });
    }
    this.selectedSeminor = null;
  }

  reset() {
    this.selectedSeminor = null;
  }
}
</script>
<style scoped>
>>> .modal .animation-content .modal-card {
  overflow: visible !important;
}

>>> .modal-card-body {
  overflow: visible !important;
}
</style>