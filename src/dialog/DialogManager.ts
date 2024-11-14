import { ref } from 'vue';
import { Dialog } from './Dialog';

export class DialogManager {
  private dialogs = ref<Dialog[]>([]);

  public add(dialog: Dialog): void {
    this.dialogs.value.push(dialog);
  }

  public remove(dialog: Dialog): void {
    const index = this.dialogs.value.indexOf(dialog);
    if (index > -1) {
      this.dialogs.value.splice(index, 1);
    }
  }

  public getDialogs() {
    return this.dialogs;
  }
}

// Create a single instance to be used across the application
export const dialogManager = new DialogManager(); 