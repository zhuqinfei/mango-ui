<demo>
基础用法
</demo>
<template>
<div>
  <Button theme="primary" @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="x" >
    <p>这是内容</p>
  </Dialog>
</div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  components: {Dialog,Button},
  setup() {
    const x = ref(false)
    const toggle = () => {x.value = !x.value}
    return {x,toggle}
  }
}
</script>