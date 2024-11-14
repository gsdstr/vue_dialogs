<template>
  <div>
    <button @click="openDialog">Open Dialog</button>
  </div>
  <!--@if "any dialogs are opened" -->
  <div id="app-dialog-root" class="dialog-root" v-if="activeDialogs.length">
    <!--@for each dialog:-->
    <div class="wrapper">
      <!-- dialog component goes here -->
      <component
          v-for="dialog in activeDialogs"
          :key="dialog.id"
          :is="dialog.instance.getComponent()"
          :dialog="dialog.instance"
          :title="dialog.instance.getTitle()"
          :message="dialog.instance.getMessage()"
      />
    </div>
    <!--@end for each dialog-->
  </div>
  <!--@end if "any dialogs are opened" -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { Dialog } from "./dialog/Dialog";
import { ConfirmDialog } from "./dialog/ConfirmDialog";

class ConfirmUserDeleteDialog extends ConfirmDialog {
  protected title = "Подтвердите удаление пользователя";
}

interface ActiveDialog {
  id: number;
  instance: Dialog;
}

const dialogCounter = ref(0);
const activeDialogs = ref<ActiveDialog[]>([]);

// Watch for changes in Dialog.instances
watch(
  () => Dialog.getInstances(),
  (instances) => {
    activeDialogs.value = instances.map(instance => ({
      id: ++dialogCounter.value,
      instance
    }));
  },
  { deep: true }
);

const openDialog = async () => {
  const dialog = new ConfirmUserDeleteDialog();
  const result = await dialog.open();
  console.log(result);
};
</script>
