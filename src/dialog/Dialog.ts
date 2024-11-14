import {defineComponent} from "vue";
import {dialogManager} from "./DialogManager";

export const DialogComponent = defineComponent({
  setup() {
  },
  render() {
    return '';
  }
});

export abstract class Dialog {
  protected component: any = DialogComponent;
  protected abstract title: string;
  protected header: string = 'Dialog';

  private resolve?: (value: boolean) => void;
  private reject?: (reason?: any) => void;

  private context = dialogManager

  render() {
    return this.component
  }

  public open(): Promise<boolean> {
    if (!this.context) throw new Error('No context')
    return new Promise<boolean>((resolve, reject) => {
      this.context.push(this)
      //this.dialogWrapper.addDialog(this)
      this.resolve = resolve;
      this.reject = reject;
    }).finally(() => {
      //this.dialogWrapper.removeDialog(this)
      this.context.close(this)
    });
  }

  public complete(res: boolean){
    this.resolve && this.resolve(res);
  }

  public cancel(){
    this.reject && this.reject(false);
  }
}
