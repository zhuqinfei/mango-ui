<demo>
支持 size
</demo>
<template>
<div>
  <div>
    <Button  theme="primary" size="small">超小按钮</Button>
    <Button  theme="primary" size="normal">正常按钮</Button>
    <Button  theme="primary" size="big">超大按钮</Button>  
  </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>