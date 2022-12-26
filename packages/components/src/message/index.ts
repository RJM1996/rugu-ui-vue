import { createApp, h } from 'vue';
import MessageComponent from './message.vue';
import type { MessageParams } from './types';

const Message = {
  // 封装open函数
  open(params: MessageParams) {
    const dom = document.createElement('div');
    const body = document.querySelector('body') as HTMLBodyElement;
    let duration: number | undefined = params.duration;
    if (duration === undefined) {
      duration = 3000;
    }
    body.appendChild(dom);
    const msg = h(MessageComponent, {
      text: params.text,
      type: params.type
    });
    const app = createApp({
      render() {
        return msg;
      }
    });
    // 挂载和渲染Message组件
    app.mount(dom);

    // 后续等待返回 close 函数
    // 封装内部关闭函数
    const internalClose = () => {
      msg.component?.exposed?.['closeMessage']?.();
      app.unmount();
      dom.remove();
    };
    let timer: number | null = null;
    if (duration > 0) {
      timer = setTimeout(() => {
        internalClose();
      }, duration);
    }
    // 最后返回可控制Message关闭的close函数
    return {
      close: () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        internalClose();
      }
    };
  }
};

export default Message;
