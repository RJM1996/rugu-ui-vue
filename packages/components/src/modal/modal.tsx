import { defineComponent } from 'vue';
import { prefixName } from '../theme/index';
import Button from '../button';

export const ModalComponent = defineComponent({
  props: {
    text: String,
    visible: Boolean
  },
  emits: ['onOk', 'onCancel'],
  setup(props, context) {
    const { emit, slots } = context;
    const onOk = () => {
      emit('onOk');
    };
    const onCancel = () => emit('onCancel');

    return () => {
      return (
        <div
          class={{
            [`${prefixName}-dialog-mask`]: true,
            [`${prefixName}-dialog-hidden`]: !props.visible
          }}
        >
          <div class={`${prefixName}-dialog`}>
            <div class={`${prefixName}-dialog-close-icon`} onClick={onCancel}>
              X
            </div>
            <div class={`${prefixName}-dialog-text`}>
              {props.text || slots?.default?.()}
            </div>
            <div class={`${prefixName}-dialog-footer`}>
              <Button type="default" variant="outlined" onClick={onCancel}>
                取消
              </Button>
              <Button type="primary" onClick={onOk}>
                确定
              </Button>
            </div>
          </div>
        </div>
      );
    };
  }
});
