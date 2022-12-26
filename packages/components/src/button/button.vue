<template>
  <button
    :class="{
      [baseClassName]: true,
      [btnClassName]: true,
      [disabledClassName]: props.disabled
    }"
  >
    <slot v-if="$slots.default"></slot>
  </button>
</template>

<script setup lang="ts">
import { prefixName } from '../theme/index';

type ButtonProps = {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
};
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  variant: 'contained',
  disabled: false
});

const baseClassName = `${prefixName}-button`;
const btnClassName = `${baseClassName}-${props.type}-${props.variant}`;
const disabledClassName = `${baseClassName}-disabled`;
</script>
