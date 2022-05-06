<template>
    <div class="tab">
       <h1>Tabs 示例</h1>
       <h2> <span>#</span> 基础用法</h2>
       <p>1、使用 <span>v-model</span> 绑定一个 <span>Boolean</span> 类型的变量到 <span>Tabs</span> 组件</p>
       <p>2、通过给 <span>Tabs</span>组件添加一个 <span>Tab</span>带有<span>title</span>属性的组件作为子标签</p>
       <Demo :component="Tabs1Demo" />
       <Attr :columns="columns" :data="data"></Attr>
    </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import Attr from "../Attr.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";


export default {
    components: {Demo,Attr},
    setup() {
       const data = ref([
          {
           params: "Tab",
           desc: "Tab标签",
           type: "component",
           select: "Tab",
           default: "--",
          },
        ]);
        return { Tabs1Demo,columns,data}
    }
}
</script>

<style lang="scss" scoped>
.tab{
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
