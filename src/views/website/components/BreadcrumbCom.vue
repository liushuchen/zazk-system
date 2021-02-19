<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: item.url }"
                        :key="key"
                        v-for="(item,key) in dataList">
      {{key ==0?'当前位置:'+item.name:item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'BreadcrumbCom',
    props: {
      dataList: {
        type: Array,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.el-breadcrumb{
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
