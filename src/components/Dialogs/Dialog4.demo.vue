<demo>
支持 buttonDia
</demo>
<template>
<div>
  <Button theme="primary" @click="toggle">打开对话框有button处理按钮</Button>
  <Dialog v-model:visible="visible" :buttonDia="true" :ok="f1" :cancel="f2">
    <p>这是内容</p>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: {Dialog,Button},
  setup() {
    const visible = ref(false)
    const toggle = () => {visible.value = !visible.value}
    const f1 = () => {return false}
    const f2 = () => {}
    return {visible,toggle,f1,f2}
  }
}
</script>