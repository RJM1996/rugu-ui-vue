import { createApp, h } from 'vue';
import { ModalComponent } from './modal';

type ModalProps = {
  text?: string;
  onOk: () => void,
  onCancel: () => void
}

function createModal(params: ModalProps) {
  const dom = document.createElement('div');
  const body = document.querySelector('body') as HTMLBodyElement;
  body.appendChild(dom);
  const app = createApp({
    render() {
      return h(ModalComponent, {
        visible: true,
        text: params.text,
        onOnOk: params.onOk,
        onOnCancel: params.onCancel,
      });
    }
  });
  app.mount(dom);

  return {
    close: () => {
      app.unmount();
      dom.remove();
    }
  };
}

const Modal: { confirm: typeof createModal } = {
  confirm: createModal
};

export default Modal;

export const ModalComp = ModalComponent;
