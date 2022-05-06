<demo>
支持 closeOnClickOverlay
</demo>
<template>
<div>
  <Button theme="warning" @click="toggle">禁止遮罩层关闭对话框</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false">
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
    return {visible,toggle}
  }
}
</script>