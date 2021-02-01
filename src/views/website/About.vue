<template>
  <el-container style="height: 500px; border: 1px solid #eee;margin-right:200px;margin-top: 50px;margin-left: 200px" >
    <el-aside width="200px" >
      <el-menu :default-active="position+''">
        <el-menu-item index="1" route="/about?position=1">
          <span slot="title">管理团队{{position}}</span>
        </el-menu-item>
        <el-menu-item index="2" route="/about?position=2">
          <span slot="title">智库简介</span>
        </el-menu-item>
        <el-menu-item index="3" route="/about?position=3">
          <span slot="title">组织机构</span>
        </el-menu-item>
        <el-menu-item index="4" route="/about?position=4">
          <span slot="title">联系信息</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/about?position=1' }">您当前位置：关于我们</el-breadcrumb-item>
            <el-breadcrumb-item v-if="position == 1">管理团队</el-breadcrumb-item>
            <el-breadcrumb-item v-else-if="position == 2">智库简介</el-breadcrumb-item>
            <el-breadcrumb-item v-else-if="position == 3">组织机构</el-breadcrumb-item>
            <el-breadcrumb-item v-else>联系信息</el-breadcrumb-item>
          </el-breadcrumb>
      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'About',
    watch: {
      $route() {
        this.position = this.$route.query.position
      }
    },
    data() {
      return {
        position: 1
      }
    }
  }
</script>

<style scoped>

</style>
