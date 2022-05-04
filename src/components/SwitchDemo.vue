<template>
    <div class="switch">
        <h1>Switch 组件示例</h1>
        <h2> <span>#</span> 基础用法</h2>
        <p>使用 <span>v-model</span> 绑定一个 <span>Boolean</span> 类型的变量到 <span>Switch</span> 组件</p>
        <Demo :component="Switch1Demo"/>
        <h2> <span>#</span> 支持disabled属性</h2>
        <p>在 <span>switch</span> 组件中添加 <span>disabled</span> 属性， 达到<span>禁止Switch</span> 组件</p>
        <Demo :component="Switch2Demo"/>
        <h2>Attributes</h2>
        <div class="att1">
            <span>参数</span>
            <span>说明</span>
            <span>类型</span>
            <span>可选值</span>
            <span>默认值</span>
        </div>
        <div class="att2">
            <span>value</span>
            <span>是否选中</span>
            <span>boolean</span>
            <span>false/true</span>
            <span>true</span>
        </div>
    </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from "./Demo.vue"

export default {
    components: {Demo},
    setup() {
        return {Switch1Demo,Switch2Demo}
    }
}
</script>

<style lang="scss" scoped>
.switch{
    font-size:14px;
    font-family:  Microsoft YaHei;
  h1{
     font-size: 24px;
 }
 h2{
     font-size: 18px;
     padding: 20px 0;
     >span{
      color:#fa3f6c;
     }
 }
 p{
     >span{
        color:#fa3f6c;
     }
 }
 .att1{
     border-bottom:1px solid #dcdfe6;
     width:80%;
     padding:16px 20px;
   >span{
       display: inline-block;
       font-size: 14px;
       color:#9e93b3;
       width:20%;
   }
  
 }

  .att2{
     border-bottom:1px solid #dcdfe6;
     width:80%;
     padding:16px 20px;
   >span{
       display: inline-block;
       font-size: 14px;
       color:#6d6969;
       width:20%;
   }
 }


} 
</style>

