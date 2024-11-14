<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>

  <dialogs-manager/>
</template>

<script setup lang="ts">
import {ConfirmDialog} from "./dialog/ConfirmDialog";
import DialogsManager from "./dialog/DialogsManager.vue";

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const result = await dialog.open();
  console.log(result);
};
</script>
