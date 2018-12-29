<template lang="pug">
  section
    h1 title
    p hello world
    button(@click="onClick") button
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import Card from "~/components/Card.vue";
import * as firebase from "firebase";

@Component({
  components: {
    Card
  }
})
export default class extends Vue {
  @State people;
  private database: any;

  asyncData({ store }) {
    console.log(store);
    store.dispatch("initialize");
  }

  created() {
    console.log(process.env.firebaseProjectId);
    firebase.initializeApp({
      projectId: process.env.firebaseProjectId
      // projectId: "warabimochi-160ab"
    });
    this.database = firebase.firestore();
  }

  onClick() {
    this.database.collection("users").add({
      name: "harano",
      email: "env"
    });
  }
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>