<template lang="pug">
  .container
    .hero 
      h1.title わらびもち
    section.section 
      b-field(label="Name")
        b-input(v-model="seminorName")
      b-field
        button.button.is-primary(@click="onClick") 登録

</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import * as firebase from "firebase";

@Component
export default class extends Vue {
  private database: any;
  seminorName = "";

  asyncData({ store }) {}

  onClick() {
    alert(this.seminorName);
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