<demo>
支持 disabled
</demo>
<template>
<Button size="small" disabled>禁用按钮</Button>
<Button disabled>禁用按钮</Button>
<Button size="big" disabled>禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>