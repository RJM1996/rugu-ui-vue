<template>
  <Box class="example">
    <h1>Modal 组件</h1>
    <div class="btn-list">
      <Button type="success" @click="openModal">open modal (函数调用)</Button>
      <Button type="success" @click="visible = true">open modal (组件声明)</Button>
    </div>
    <ModalComp :visible="visible" @onCancel="visible = false" @onOk="visible = false">123</ModalComp>
  </Box>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Box from '../src/box';
import Button from '../src/button';
import Modal, { ModalComp } from '../src/modal';

const visible = ref(false)

const openModal = () => {
  const modal = Modal.confirm({
    text: '这是一个弹窗',
    onOk() {
      modal.close()
    },
    onCancel() {
      modal.close()
    }
  });
};
</script>
