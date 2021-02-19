<template>
  <div class="left-box">
    <div v-for="(item, key) in dataList"
         :key="key"
         :class="position == item.position ? 'line' : ''"
         @click="checkLeft(item.position)">{{ item.name }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LeftListCom',
    props: {
      dataList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data() {
      return {
        position: 1
      }
    },
    watch: {
      $route() {
        this.position = this.$route.params.position
      }
    },
    methods: {
      checkLeft(index) {
        let position = index
        this.$store.dispatch('website/changeMenuIndex', '/about/' + position)
        this.$router.push({ name: 'About', params: { position: position } })
      }
    }
  }
</script>

<style scoped>
  .left-box {
    margin-right: 20px;
    min-width: 25%;
  }
  .left-box > div {
    width: 260px;
    margin: 0px 0 13px;
    height: 50px;
    font-size: 18px;
    cursor: pointer;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 6px solid #fff;
    transition: all 0.3s;
  }
  .line {
    border-left: 6px solid #095baf !important;
    color: #095baf !important;
  }
</style>
