<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
    <confirm-dialog-component
      v-for="dialog in activeDialogs"
      :key="dialog.id"
      :dialog="dialog.instance"
      :title="dialog.title"
      :message="dialog.message"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ConfirmDialog } from './dialog/ConfirmDialog';
import ConfirmDialogComponent from './dialog/ConfirmDialogComponent.vue';

interface ActiveDialog {
  id: number;
  instance: ConfirmUserDeleteDialog;
  title: string;
  message: string;
}

const dialogCounter = ref(0);
const activeDialogs = ref<ActiveDialog[]>([]);

const openDialog = async () => {
  const dialog = new ConfirmDialog();
  const dialogId = ++dialogCounter.value;
  
  activeDialogs.value.push({
    id: dialogId,
    instance: dialog,
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete this user?'
  });

  try {
    const result = await dialog.open();
    console.log('Dialog result:', result);
  } finally {
    activeDialogs.value = activeDialogs.value.filter(d => d.id !== dialogId);
  }
};
</script>
