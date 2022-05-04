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
    <Demo :component="Button4Demo" />
    <h2><span>#</span> 支持loading</h2>
    <p>使用<span>loading</span>属性表示<span>Button</span>组件正在加载中</p>
    <Demo :component="Button5Demo" />
    <div class="att1">
      <span>参数</span>
      <span>说明</span>
      <span>类型</span>
      <span>可选值</span>
      <span>默认值</span>
    </div>
    <div class="att2">
      <span>theme</span>
      <span>按钮颜色</span>
      <span>string</span>
      <span>primary/success/warning/danger/info</span>
      <span>default</span>
    </div>
       <div class="att3">
      <span>size</span>
      <span>尺寸大小</span>
      <span>string</span>
      <span>small/normal/large</span>
      <span>normal</span>
    </div>
     <div class="att4">
      <span>disabled</span>
      <span>是否禁用</span>
      <span>boolean</span>
      <span>false/true</span>
      <span>true</span>
    </div>
     <div class="att5">
      <span>loading</span>
      <span>是否加载</span>
      <span>boolean</span>
      <span>false/true</span>
      <span>true</span>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";

export default {
  components: { Demo },
  setup() {
    return {
      Button1Demo,
      Button2Demo,
      Button4Demo,
      Button5Demo,
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
  .att1 {
    border-bottom: 1px solid #dcdfe6;
    width: 80%;
    padding: 16px 20px;
    > span {
      display: inline-block;
      font-size: 14px;
      color: #9e93b3;
    }
    > span:nth-child(1) {
      margin:0 30px 0 0;
    }
    > span:nth-child(2) {
      margin:0 44px;
    }
    > span:nth-child(3) {
      margin:0 44px;
    }
    > span:nth-child(4) {
      margin:0 26px;
    }
    > span:nth-child(5) {
      margin:0 0px 0 248px;
    }
  }

  .att2 {
    border-bottom: 1px solid #dcdfe6;
    width: 80%;
    padding: 16px 20px;
    > span {
      display: inline-block;
      font-size: 14px;
      color: #6d6969;
      margin:0 30px;
    }
   > span:nth-child(1) {
      margin:0 30px 0 0;
    }
    > span:nth-child(4) {
      margin:0 30px;
    }
    
  }

  .att3 {
    border-bottom: 1px solid #dcdfe6;
    width: 80%;
    padding: 16px 20px;
    > span {
      display: inline-block;
      font-size: 14px;
      color:#6d6969;
      margin:0 30px;
    }
   > span:nth-child(1) {
      margin:0 30px 0 0;
    }
    > span:nth-child(2) {
      margin:0 0 0 48px;
    }
     > span:nth-child(3) {
      margin:0 0 0 60px;
    }
     > span:nth-child(4) {
      margin:0 0 0 60px;
    }
    > span:nth-child(5) {
      margin:0 0 0 188px;
    }  
  }

   .att4 {
    border-bottom: 1px solid #dcdfe6;
    width: 80%;
    padding: 16px 20px;
    > span {
      display: inline-block;
      font-size: 14px;
      color: #6d6969;
      margin:0 30px;
    }
   > span:nth-child(1) {
      margin:0 30px 0 0;
    }
    > span:nth-child(2) {
      margin:0 0 0 16px;
    }
     > span:nth-child(3) {
      margin:0 0 0 60px;
    }
     > span:nth-child(4) {
      margin:0 0 0 44px;
    }
    > span:nth-child(5) {
      margin:0 0 0 252px;
    }  
  }

  .att5 {
    border-bottom: 1px solid #dcdfe6;
    width: 80%;
    padding: 16px 20px;
    > span {
      display: inline-block;
      font-size: 14px;
      color: #6d6969;
      margin:0 30px;
    }
   > span:nth-child(1) {
      margin:0 30px 0 0;
    }
    > span:nth-child(2) {
      margin:0 0 0 22px;
    }
     > span:nth-child(3) {
      margin:0 0 0 60px;
    }
     > span:nth-child(4) {
      margin:0 0 0 44px;
    }
    > span:nth-child(5) {
      margin:0 0 0 252px;
    }  
  }
}
</style>

