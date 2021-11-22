<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav />
            <div class="banner">
                <h1>芒果UI</h1>
                <h2>一个框架</h2>
                <p class="actions">
                    <a>GitHub</a>
                    <router-link to="/Doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <svg class="icon">
                <use xlink:href="#icon-vue" />
            </svg>
            <svg class="icon">
                <use xlink:href="#icon-ts" />
            </svg>
            <svg class="icon">
                <use xlink:href="#icon-light" />
            </svg>
        </div>
    </div>
</template>

<script lang='ts'>
import Topnav from "../components/Topnav.vue"

export default {
    components: {
        Topnav
    }
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;
.topnavAndBanner {
    background: linear-gradient(
        145deg,
        rgba(227, 255, 253, 1) 0%,
        rgba(183, 233, 230, 1) 100%
    );
}
.features{
    > svg{
      width:64px;
      height: 64px;
    }
}
.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .actions {
        padding: 8px 0;
        a {
            margin: 0 8px;
            background: $green;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;
            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>