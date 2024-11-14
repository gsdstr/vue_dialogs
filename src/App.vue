<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>
  <component :is="dialogComponent" />
</template>

<script setup lang="ts">
import { ConfirmDialog } from "./dialog/ConfirmDialog";
import {dialogManager} from "./dialog/DialogManager";

const dialogComponent = dialogManager.getComponent()

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const result = await dialog.open();
  console.log(result);
};
</script>
