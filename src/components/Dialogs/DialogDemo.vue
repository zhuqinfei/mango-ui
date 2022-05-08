<template>
    <div class="dialog">
      <h1>Dialog示例</h1>
      <h2> <span>#</span> 基础用法</h2>
      <p>使用<span>v-model</span>绑定一个<span>Boolean</span>类型的变量到<span>Dialog</span>组件</p>
      <Demo :component="Dialog1Demo" />
      <h2> <span>#</span>支持closeOnClickOverlay</h2>
      <p>在<span>Dialog</span>组件中添加<span>closeOnClickOverlay</span>属性，判断是否通过点击遮罩层关闭<span>Dialog</span>组件</p>
      <Demo :component="Dialog2Demo" />
      <h2> <span>#</span> 支持title</h2>
      <p>在<span>Dialog</span>组件中添加<span>title</span>属性，判断是否显示标题</p>
      <Demo :component="Dialog3Demo" />
      <h2> <span>#</span>支持buttonDia</h2>
      <p>在<span>Dialog</span>组件中添加<span>buttonDia</span>属性，判断是否显示<span>Dialog</span>组件的处理按钮</p>
      <Demo :component="Dialog4Demo" />
      <h2> <span>#</span>支持一键开启dialog</h2>
      <p>引入<span>openDialog</span>模块，直接创建<span>Dialog</span>组件</p>
      <Demo :component="Dialog5Demo" />
      <Attr :columns="columns" :data="data"></Attr>
    </div>   
</template>
<script lang="ts">
import Demo from '../Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Dialog3Demo from './Dialog3.demo.vue';
import Dialog4Demo from './Dialog4.demo.vue';
import Dialog5Demo from './Dialog5.demo.vue';
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";

export default {
    components: {Demo,Attr},
    setup() {
      const data = ref([
        {
         params: "visible",
         desc: "是否打开对话框",
         type: "boolean",
         select: "false / true",
         default: "false",
        },
        {
         params: "closeOnClickOverlay",
         desc: "是否点击遮罩层关闭对话框",
         type: "boolean",
         select: "false / true",
         default: "false",
        },
        {
         params: "title",
         desc: "是否展示标题",
         type: "string",
         select: "自定义",
         default: "自定义标签",
        },
        {
         params: "buttonDia",
         desc: "是否展示处理按钮",
         type: "boolean",
         select: "false/true",
         default: "false",
        },
        {
         params: "ok",
         desc: "确认触发函数",
         type: "function",
         select: "()=>{}",
         default: "--",
        },
        {
         params: "cancel",
         desc: "取消触发函数",
         type: "function",
         select: "()=>{}",
         default: "--",
        },    
      ]);
       
      return {  Dialog1Demo,Dialog2Demo,Dialog3Demo,Dialog4Demo,Dialog5Demo,columns,data}
    }
}
</script>

<style lang="scss" scoped>
.dialog{
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
} 
</style>