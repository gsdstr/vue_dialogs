export abstract class Dialog<T = boolean> {
  private resolvePromise?: (value: T) => void;
  private rejectPromise?: (reason?: any) => void;
  protected isOpen: boolean = false;

  public open(): Promise<T> {
    this.isOpen = true;
    return new Promise<T>((resolve, reject) => {
      this.resolvePromise = resolve;
      this.rejectPromise = reject;
    });
  }

  protected close(result: T): void {
    if (this.resolvePromise) {
      this.resolvePromise(result);
      this.cleanup();
    }
  }

  protected cancel(): void {
    if (this.rejectPromise) {
      this.rejectPromise();
      this.cleanup();
    }
  }

  private cleanup(): void {
    this.isOpen = false;
    this.resolvePromise = undefined;
    this.rejectPromise = undefined;
  }

  public get isVisible(): boolean {
    return this.isOpen;
  }
}
