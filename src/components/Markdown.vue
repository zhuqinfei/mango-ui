<template>
<article class="markdown-body" id="markdown" v-html="content">
</article>
</template>

<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
#markdown{
  h1,h4{
     border-bottom: 1px solid #c4db93;
  }
  h4{
     background: #efffcb;
     padding:10px 10px 0px 20px;
     font-family: KaiTi;
     border-left: 3px solid #73a75b;
  }

  h2{
     border-bottom:0px;
  }
  a{
    color:#77ae00;
  }
  pre code{
    color:#fa3f6c
  }


}
</style>
