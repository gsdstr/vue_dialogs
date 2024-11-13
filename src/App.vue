<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>
  <!--@if "any dialogs are opened" -->
  <div id="app-dialog-root" class="dialog-root" v-if="activeDialogs.length">
    <!--@for each dialog:-->
    <div class="wrapper">
      <!-- dialog component goes here -->
      <confirm-dialog-component
        v-for="dialog in activeDialogs"
        :key="dialog.id"
        :dialog="dialog.instance"
        :title="dialog.title"
        :message="dialog.message"
      />
    </div>
    <!--@end for each dialog-->
  </div>
  <!--@end if "any dialogs are opened" -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Dialog } from './dialog/Dialog';
import { ConfirmDialog } from './dialog/ConfirmDialog';
import ConfirmDialogComponent from './dialog/ConfirmDialogComponent.vue';

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

interface ActiveDialog {
  id: number;
  instance: Dialog;
  title: string;
  message: string;
}

const dialogCounter = ref(0);
const activeDialogs = ref<ActiveDialog[]>([]);

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const dialogId = ++dialogCounter.value;
  
  activeDialogs.value.push({
    id: dialogId,
    instance: dialog,
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this user?'
  });

  try {
    const result = await dialog.open();
    console.log('Dialog result:', result, dialogId);
  } finally {
    activeDialogs.value = activeDialogs.value.filter((d: ActiveDialog) => d.id !== dialogId);
  }
};
</script>
