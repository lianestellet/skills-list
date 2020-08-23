<template>
  <el-header class="app-header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">DEV SKILLS BOOK</el-menu-item>
      <el-menu-item index="3">
        <a href="https://github.com/pablostellet/skill-hunters" target="_blank">Repository Link</a>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {}
</script>

<style>
</style>