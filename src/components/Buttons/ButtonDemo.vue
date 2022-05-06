<template>
  <div class="bt">
    <h1>Button示例</h1>
    <h2><span>#</span> 基础用法</h2>
    <p>
      使用<span>theme</span>属性改变<span>Button</span>组件的颜色，分别定义了<span
        >Button</span
      >
      组件的等级区别
    </p>
    <Demo :component="Button1Demo" />
    <h2><span>#</span> 支持size</h2>
    <p>使用<span>size</span>属性改变<span>Button</span>组件的大小</p>
    <Demo :component="Button2Demo" />
    <h2><span>#</span> 支持disabled</h2>
    <p>
      使用<span>disabled</span>属性改变<span>Button</span>组件的状态，定义<span>禁止点击Button</span>组件
    </p>
    <Demo :component="Button3Demo" />
    <h2><span>#</span> 支持loading</h2>
    <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载中</p>
    <Demo :component="Button4Demo" />
    <Attr :columns="columns" :data="data"/>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";

export default {
  components: { Demo,Attr },
  setup() {
    const data = ref([
      {
        params: "theme",
        desc: "按钮颜色",
        type: "string",
        select: "primary/success/warning/danger/info",
        default: "default",
      },
      {
        params: "size",
        desc: "尺寸大小",
        type: "string",
        select: "small/normal/large",
        default: "normal",
      },
      {
        params: "disabled",
        desc: "是否禁用",
        type: "boolean",
        select: "false/true",
        default: "false",
      },
      {
        params: "loading",
        desc: "是否加载",
        type: "boolean",
        select: "false/true",
        default: "false",
      },
    ]);

    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      columns,
      data
    };
  },
};
</script>

<style lang="scss" scoped>
.bt {
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

