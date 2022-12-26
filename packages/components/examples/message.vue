<template>
  <Box class="example">
    <h1>Message 组件</h1>
    <div class="btn-list">
      <Button type="success" @click="openMessage('success')">success message</Button>
      <Button type="primary" @click="openMessage('info')">info message</Button>
      <Button type="warning" @click="openMessage('warn')">warn message</Button>
      <Button type="danger" @click="openMessage('error')">error message</Button>
    </div>
  </Box>
</template>

<script setup lang="ts">
import Box from '../src/box';
import Button from '../src/button';
import Message from '../src/message';

const openMessage = (type: string) => {
  Message.open({
    text: `这是一个 ${type} 类型的消息提醒组件，3秒后自动关闭`,
    type,
    duration: 3000
  });
};
</script>

