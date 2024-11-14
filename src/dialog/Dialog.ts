import {useDialogWrapper} from "./DialogsStore";

//add protection against misuse
//can't use generic, because ConfirmDialog must stay unchanged
export abstract class Dialog {
  protected abstract component: any;
  protected abstract title: string;
  protected header: string = 'Dialog';

  private dialogWrapper = useDialogWrapper();
  private resolve?: (value: boolean) => void;
  private reject?: (reason?: any) => void;

  public open(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.dialogWrapper.addDialog(this)
      this.resolve = resolve;
      this.reject = reject;
    }).finally(() => {
      this.dialogWrapper.removeDialog(this)
    });
  }

  public complete(res: boolean){
    this.resolve && this.resolve(res);
  }

  public cancel(){
    this.reject && this.reject(false);
  }

}
