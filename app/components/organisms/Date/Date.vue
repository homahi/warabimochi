<template lang="pug">
    section
        .modal-card
          header.modal-card-head
            p.modal-card-title 予定日
          section.modal-card-body
            b-field(lable="予定日を入力してください")
              b-datepicker(icon="calendar-today" v-model="internalDate")
            b-field
              button.button.is-primary(@click="submit") 登録
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import moment from "moment";

@Component
export default class extends Vue {
  @Prop({ default: new Date() }) date: Date;
  internalDate: Date = this.date;

  submit() {
    this.$emit("submit", this.internalDate);
  }
}
</script>