import {Component, markRaw, Ref, ref} from 'vue'
import DialogsWrapper from "./DialogsWrapper.vue";

export interface DialogInstance {

}

export class DialogManager {
  stack: Ref<DialogInstance[]>

  constructor() {
    this.stack = ref<DialogInstance[]>([])
  }

  push(dialog: DialogInstance): void {
    if (!this.stack.value.find(d => d === dialog)) {
      this.stack.value = [...this.stack.value, markRaw(dialog)]
    }
  }

  close(dialog: DialogInstance): void {
    this.stack.value = this.stack.value.filter(d => d !== dialog)
  }

  getComponent(): Component {
    return DialogsWrapper
  }
}

export const dialogManager = new DialogManager()
