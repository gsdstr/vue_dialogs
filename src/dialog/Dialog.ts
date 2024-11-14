import { Component } from 'vue';
import { ref } from 'vue';

// Create a reactive array to store dialog instances
const dialogInstances = ref<Dialog[]>([]);

export abstract class Dialog<T = boolean> {
  protected abstract component: Component;
  protected abstract title: string;
  protected message: string = '';
  private resolvePromise?: (value: T) => void;

  public static getInstances(): Dialog[] {
    return dialogInstances.value;
  }

  public open(): Promise<T> {
    dialogInstances.value.push(this);
    return new Promise<T>((resolve) => {
      this.resolvePromise = resolve;
    });
  }

  public confirm(): void {
    if (this.resolvePromise) {
      this.resolvePromise(true as T);
      this.close();
    }
  }

  public cancel(): void {
    if (this.resolvePromise) {
      this.resolvePromise(false as T);
      this.close();
    }
  }

  private close(): void {
    const index = dialogInstances.value.indexOf(this);
    if (index > -1) {
      dialogInstances.value.splice(index, 1);
    }
  }

  public getComponent(): Component {
    return this.component;
  }

  public getTitle(): string {
    return this.title;
  }

  public getMessage(): string {
    return this.message;
  }
}

