<template>
  <button class="mango-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="mango-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from 'vue';
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  setup(props) {
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`mango-theme-${theme}`]: theme,
        [`mango-size-${size}`]: size,
        [`mango-level-${level}`]: level,
      };
    })
    return { classes }
  }
}
</script>
<style lang="scss">
$h: 32px;
$border-color: #222831;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.mango-button {
  box-sizing: border-box;
  height: $h;
  padding: 18px 20px;
  font-size: 14px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.mango-theme-primary {
    border:1px solid #40babf;
    background: #40babf;
    box-shadow: none;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color:#40babf;
    }
  }
 &.mango-theme-success {
    border:1px solid #28a745;
    background: #28a745;
    box-shadow: none;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color:#28a745;
    }
  }
  &.mango-theme-warning {
    border:1px solid #ffc107;
    background: #ffc107;
    box-shadow: none;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color:#ffc107;
    }
  }
  &.mango-theme-danger {
    border:1px solid #ff4f57;
    background: #ff4f57;
    box-shadow: none;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color:#ff4f57;
    }
  }
  &.mango-theme-info {
    border:1px solid #52616b;
    background: #52616b;
    box-shadow: none;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color:#52616b;
    }
  }
  &.mango-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.mango-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.mango-theme-button {
    &[disabled] {
      cursor: not-allowed;
      border:1px solid #dddddd;
      background: #dddddd;
      color: #ffffff;
    }
  }
  > .mango-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: mango-spin 1s infinite linear;
  }
}
@keyframes mango-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>