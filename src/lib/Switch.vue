<template>
    <button class="mango-switch" @click="toggle" :class="{'mango-checked':value}">
        <span></span>
        <p v-if="value" class="mango-switch-on">on</p>
        <p v-if="!value" class="mango-switch-off">off</p>
    </button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
    props:{
        value:Boolean
    },
    setup(props,context){
        const toggle=()=>{
           context.emit('update:value',!props.value) //this.$emit(旧版)
        }
        return {toggle}
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.mango-switch {
  height: $h; width: $h * 2; border: none; background: #bfbfbf; border-radius: 11px; position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius:9px; transition: all 250ms;
  }
  > .mango-switch-on{
    color:white;
    display: inline-block;
    position: absolute;
    left:6px;
    top:3px;
    font-size: 14px;
  }
  > .mango-switch-off{
    color:white;
    display: inline-block;
    position: absolute;
    left:22px;
    top:3px;
    font-size: 14px;
  }
  &.mango-checked { background: #3e8138;
    > span { left: calc(100% - #{$h2} - 2px); }
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.mango-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
}
</style>
