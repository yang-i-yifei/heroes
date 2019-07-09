<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <app-sidebar></app-sidebar>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 1. 导入组件
import AppHeader from './views/components/appHeader';
import AppSidebar from './views/components/appSider'
export default {
  name: "app",
  // 2. 注册局部组件
  components: {
    AppHeader,AppSidebar
  }
};
</script>

<style>
</style>
