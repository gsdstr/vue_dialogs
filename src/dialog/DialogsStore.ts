import {markRaw, reactive} from "vue";
import {Dialog} from "./Dialog";

export type UseDialogWrapperReturn = {
  dialogsStore: Dialog[]
  addDialog: (dialog: Dialog) => void,
  removeDialog: (dialog: Dialog) => void,
  removeAll: () => void
}

const DialogsStore: Dialog[] = reactive([])

export const useDialogWrapper = function (): UseDialogWrapperReturn {

  const addDialog = function (dialog: Dialog) {
    DialogsStore.push(markRaw(dialog))
  }

  //we use markRaw so we can compare directly.
  const removeDialog = function (dialog: Dialog){
    const index = DialogsStore.findIndex(d => d == dialog)
    DialogsStore.splice( index, 1)
  }

  const removeAll = function () {
    DialogsStore.splice(0)
  }

  return {
    dialogsStore: DialogsStore,
    addDialog,
    removeDialog,
    removeAll
  }
}
