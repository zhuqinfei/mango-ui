<template>
  <div class="switch">
    <h1>Switch 组件示例</h1>
    <h2><span>#</span> 基础用法</h2>
    <p>
      使用 <span>v-model</span> 绑定一个 <span>Boolean</span> 类型的变量到
      <span>Switch</span> 组件
    </p>
    <Demo :component="Switch1Demo" />
    <h2><span>#</span> 支持disabled属性</h2>
    <p>
      在 <span>switch</span> 组件中添加 <span>disabled</span> 属性， 达到<span
        >禁止Switch</span
      >
      组件
    </p>
    <Demo :component="Switch2Demo" />
    <Attr :columns="columns" :data="data"></Attr>
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "../Demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";

export default {
  components: { Demo, Attr },
  setup() {
    const data = ref([
      {
        params: "value",
        desc: "是否选中",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
    ]);
    return { Switch1Demo, Switch2Demo, columns,data};
  },
};
</script>

<style lang="scss" scoped>
.switch {
  font-size: 14px;
  font-family: Microsoft YaHei;
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 18px;
    padding: 20px 0;
    > span {
      color: #fa3f6c;
    }
  }
  p {
    > span {
      color: #fa3f6c;
    }
  }
}
</style>

