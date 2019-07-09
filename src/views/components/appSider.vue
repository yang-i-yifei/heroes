<template>
  <div>
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <router-link to="/hero" tag="li" class="active">
        <a>英雄管理</a>
        </router-link>
        <router-link to="/weapon" tag="li">
        <a>武器管理</a>
        </router-link>
        <router-link to="/equip" tag="li">
        <a>装备管理</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
