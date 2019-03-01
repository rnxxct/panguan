<template>
  <div class="app-wrapper">
    <div class="main-container">
      <navbar/>
      <div class="line"></div>
      <app-main class="main-container"/>
    </div>
  </div>
</template>
<script>
  import { Navbar, AppMain } from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  export default {
    name: 'Layout',
    components: {
      Navbar,
      AppMain
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-wrapper{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  .main-container{
    margin:0 auto;
    width: 100%;
  }
  .line{
    height:30px;
  }

</style>
