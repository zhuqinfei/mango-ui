<template>
  <template v-if="visible">
    <teleport to="body">
      <div class="mango-dialog-overlay" @click="closeOnClickOverlay"></div>
      <div class="mango-dialog-wrapper">
        <div class="mango-dialog">
          <span @click="close" class="mango-dialog-close"></span>
          <header v-if="showTitle">
            <h1>{{ title }}</h1>
          </header>
          <main>
            <slot />
            <slot name="content" />
          </main>
          <footer v-if="buttonDia">
            <Button   @click="cancel">取消</Button>
            <Button  theme="primary" @click="ok">确认</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
import Button from "./Button.vue";
export default {
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    buttonDia: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const closeOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };

    const showTitle = computed(() => {
      if (props.title == "") {
        return false;
      } else {
        return true;
      }
    });

    const ok = () => {
      if (props.ok && props.ok() !== false) {
        //判断语句可缩写成props.ok?.()!==false
        close();
      }
      const result = props.ok();
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };
    return { close, closeOnClickOverlay, ok, cancel,showTitle };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.mango-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 18em;
  max-width: 90%;
  position:relative;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    >h1{
        font-size: 1em;
    }
  }
  > main {
    padding: 36px 16px 12px 18px;
    min-height: 8em;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
    >Button:hover{
      border:1px solid #ffc107;
      background: #ffc107;
      color:#ffffff
    }
  }
  &-close {
    position: absolute;
    top: 12px;
    right: 12px;
    display: inline-block;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 50%;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 50%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &:hover {
      background: #f57272;
      &::before,
      &::after {
        background: #ffffff;
      }
    }
  }
}
</style>
