import { Component } from 'vue';
import { dialogManager } from './DialogManager';

export abstract class Dialog<T = boolean> {
  protected abstract component: Component;
  protected abstract title: string;
  protected message: string = '';
  private resolvePromise?: (value: T) => void;

  public open(): Promise<T> {
    dialogManager.add(this);
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
    dialogManager.remove(this);
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

