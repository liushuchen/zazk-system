<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/research?position=1' }">调查研究</el-breadcrumb-item>
      <el-breadcrumb-item v-if="position == 1">顾问委员会</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 2">学术专家委员会</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 3">咨询专家委员会</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 4">研究员</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 5">助理研究员</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 6">研究报告</el-breadcrumb-item>
      <el-breadcrumb-item v-else-if="position == 7">智库观点</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'Research',
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
