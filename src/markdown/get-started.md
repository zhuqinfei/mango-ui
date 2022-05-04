# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs,Tab, Switch, Dialog,openDialog} from "mango-ui-fei"
```

就可以使用我提供的组件了。

## <span style="color:#fa3f6c;font-weight:bold;font-size:30px">#</span>Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs,Tab, Switch, Dialog,openDialog} from "mango-ui-fei"
export default {
  components: {Button}
}
</script>
```