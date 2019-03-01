<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
   <!--   <keep-alive>
        <router-view :key="key"/>
      </keep-alive>--><!--不缓存页面-->
      <router-view :key="key"/>
    </transition>
  </section>
</template>
<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>

<style scoped>
  .app-main {
    position: absolute;
    min-height: calc(100vh - 60px);
    top: 100px;
  }
</style>

