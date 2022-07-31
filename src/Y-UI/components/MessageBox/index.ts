import { options } from './../../../baseData/selector';
import MessageBoxComponent from './MessageBox.vue';
import { createApp, watch } from 'vue';

export const fields = ['confirm', 'prompt']

const MessageBox: any = (options) => {
    const MessageBoxApp = createApp(MessageBoxComponent, options);

    return new Promise((resolve, reject) => {
        showMessageBox(MessageBoxApp, { resolve, reject });
    })
}

fields.forEach(field => {
    MessageBox[field] = options => {
        options.field = field;
        return MessageBox(options)
    }
})

const showMessageBox = (app, { resolve, reject }) => {
    const oFragment = document.createDocumentFragment();
    const vm = app.mount(oFragment);
    document.body.appendChild(oFragment);
    vm.setVisible(true);
    watch(vm.state, (state) => {
        if (!state.visible) {
            switch (state.btnType) {
                case 'cancel':
                    reject();
                    break;
                case 'confirm':
                    resolve(state.promptValue);
                    break;
                default:
                    break
            }

        }
    })
}



export default MessageBox