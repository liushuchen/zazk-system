<template>
  <div style="  background: #ffffff;padding-top: 10px">
    <div v-for="(item, key) in dataList" :key="key">
      <div class="name"
           v-if="item.name !='' || item.name!= undefined">{{ item.name }}
      </div>
      <div class="image">
        <div v-for="(i, k) in item.imageList"
             :key="k" style="width: 150px;margin: 0 20px;">
          <el-image fit="cover" style="width: 100%; height: 150px;border-radius: 5px;"
                    :src="i.url">
          </el-image>
          <div class="nickName">{{ i.nickName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonnelCom',
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
  .nickName {
    text-align: center;
    margin: 10px 0 20px;
    color: #001528;
  }
  .name {
    background-color: #f3f4f6;
    font: 15px/1.6 '微软雅黑 宋体';
    margin: 0 20px 10px 20px;
    font-weight: 600;
  }
  .image {
    display: flex;
    align-items: center;
  }
</style>
