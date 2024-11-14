<template>
  <div class="dialog">
    <header>
      <span>{{ dialog.header }}</span>
    </header>
    <main>
      <span>{{ dialog.title }} <!--ConfirmDialog.title:--></span>
    </main>
    <footer>
      <!--on click resolve -> false-->
      <button @click="onCancel">Отмена</button>

      <!--on click resolve -> true-->
      <button @click="onConfirm">Подтвердить</button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { Dialog } from './Dialog';

interface Props {
  dialog: Dialog;
}

const props = defineProps<Props>();

const onConfirm = () => {
  props.dialog.complete(true);
};

const onCancel = () => {
  props.dialog.complete(false);
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
