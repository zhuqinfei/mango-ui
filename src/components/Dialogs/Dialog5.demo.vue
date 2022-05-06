<demo>
一键打开 Dialog
</demo>
<template>
<div>
  <Button theme="primary" @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue'
import {openDialog} from '../../lib/openDialog'
export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: "我的标签",
        buttonDia:true,
        content: '这是内容',
        ok() {console.log('ok')},
        cancel() {console.log('cancel')}
      })
    }
    return {
      showDialog
    }
  }
}
</script>