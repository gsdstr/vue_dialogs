<script setup lang="ts">
import {watch} from "vue";
import {useDialogWrapper} from "./DialogsStore";

const { dialogsStore } = useDialogWrapper();
watch(dialogsStore, (newVal) => {
  console.log(newVal);
})

</script>

<template>
  <!--@if "any dialogs are opened" -->
  <div v-if="dialogsStore.length" id="app-dialog-root" class="dialog-root">
    <!--@for each dialog:-->
    <div v-for="(dialog, key) in dialogsStore" class="wrapper">
      <!-- dialog component goes here -->
      <component
        :is="dialog.component"
        :key="key"
        :dialog="dialog"
      />
    </div>
    <!--@end for each dialog-->
  </div>
  <!--@end if "any dialogs are opened" -->
</template>

<style scoped lang="sass">

</style>
