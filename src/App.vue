<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>
  <div id="app-dialog-root" class="dialog-root" v-if="activeDialogs.length">
    <div class="wrapper">
      <component
        v-for="(dialog, index) in activeDialogs"
        :key="index"
        :is="dialog.getComponent()"
        :dialog="dialog"
        :title="dialog.getTitle()"
        :message="dialog.getMessage()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ConfirmDialog } from "./dialog/ConfirmDialog";
import { dialogManager } from './dialog/DialogManager';

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

const activeDialogs = computed(() => dialogManager.getDialogs().value);

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const result = await dialog.open();
  console.log(result);
};
</script>
