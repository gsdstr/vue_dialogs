<script setup lang="ts">

import {computed} from "vue";
import {dialogManager} from "./DialogManager";

const dialogs = computed(() =>
  dialogManager.stack.value.map(dialog => ({
    component: dialog.render(),
    instance: dialog
  }))
)

</script>

<template>
  <!--@if "any dialogs are opened" -->
  <div v-if="dialogs.length" id="app-dialog-root" class="dialog-root">
    <!--@for each dialog:-->
    <div v-for="(dialog, key) in dialogs" class="wrapper">
      <!-- dialog component goes here -->
      <component
        :is="dialog.component"
        :key="key"
        :dialog="dialog.instance"
      />
    </div>
    <!--@end for each dialog-->
  </div>
  <!--@end if "any dialogs are opened" -->
</template>

<style scoped lang="sass">

</style>
