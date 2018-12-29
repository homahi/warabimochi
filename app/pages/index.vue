<template lang="pug">
  .container
    .hero 
      h1.title わらびもち
    section.section 
      b-field(label="Name")
        b-input(v-model="seminorName")
      b-field
        button.button.is-primary(@click="onClick") 登録
    p(v-for="seminor of seminors")  {{seminor.name}}

</template>

<script lang="ts">
import { Component, Vue, State } from "nuxt-property-decorator";
import * as firebase from "firebase";
import { db } from "../plugins/firebase";

@Component
export default class extends Vue {
  seminorName = "";
  @State("seminors") seminors;

  asyncData({ store }) {
    store.dispatch("initalize", db.collection("seminors"));
  }

  onClick() {
    db.collection("seminors").add({
      name: this.seminorName
    });
  }
}
</script>