<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";

export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  }
  > main {
    flex-grow: 1;
    padding: 50px 10px 50px 260px;
    background: white;
  }
}
aside {
  background: white;
  width: 280px;

  position: fixed;
  top: 0;
  left: 0;
  padding-top: 90px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 8px 40px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 10px 50px;
        text-decoration: none;
        color: #121421;
        transition: border-right 250ms;
        position: relative;
      }
      .router-link-active {
        background: #efffcb;
      }
      .router-link-active::after{
          content: "";
          position: absolute;
          right: 0;
          top: 0px;
          animation:identifier 500ms;
          animation-fill-mode : forwards;
      }

      @keyframes identifier {
        from {
            height: 0px;
            border: 2px solid #73a75b;
          
        }
        to {
            height: 40px;
            border: 2px solid #73a75b;
          
        }
      }
    }
  }
}
main {
  overflow: auto;
}
</style>