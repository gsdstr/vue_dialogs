<template>
  <div v-if="isVisible" class="dialog-overlay">
    <div class="dialog-content">
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="dialog-actions">
        <button @click="onCancel">Cancel</button>
        <button @click="onConfirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Dialog } from './Dialog';

interface Props {
  dialog: Dialog<boolean>;
  title: string;
  message: string;
}

const props = defineProps<Props>();

const isVisible = computed(() => props.dialog.isVisible);

const onConfirm = () => {
  (props.dialog as any).close(true);
};

const onCancel = () => {
  (props.dialog as any).close(false);
};
</script>

<style lang="sass">
.dialog
  display: flex
  flex-direction: column
  width: clamp(300px, 80%, 600px)
  border: 1px solid var(--border-color)
  background: white
  & > *
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0.5rem
      &:not(:last-child)
          border-bottom: 1px solid var(--border-color)
          border-radius: 0
  & > header
      font-weight: bold
      border-bottom: 1px solid var(--border-color)
  & > main
      padding: 1rem 0.5rem
</style>
