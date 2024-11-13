<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>

  <!--@if "any dialogs are opened" -->
  <div id="app-dialog-root" class="dialog-root">
    <!--@for each dialog:-->
    <div class="wrapper">
      <!-- dialog component goes here -->
    </div>
    <!--@end for each dialog-->
  </div>
  <!--@end if "any dialogs are opened" -->
</template>

<script setup lang="ts">
import { ConfirmDialog } from "./dialog/ConfirmDialog";

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const result = await dialog.open();
  console.log(result);
};
</script>
