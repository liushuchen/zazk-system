<template>
  <div class="document-box">
    <ul>
      <li v-for="(item,key) in dataList" :key="key">
        <div class="re_box">
          <a target="_blank" :href="item.url" class="titleblack">
            {{item.title}}
          </a>
          <span class="date1">{{item.time}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'MediaCoverage',
    data() {
      return {
        dataList: [
          {
            title: '首届中国矿业法治暨矿业仲裁高峰论坛',
            url: 'http://zazk.httdmall.com/content/c_001.html',
            time: '2020-10-25'
          }, {
            title: '“矿业权评估与矿企改革研讨会”在京召开',
            url: 'http://zazk.httdmall.com/content/c_002.html',
            time: '2020-10-25'
          }, {
            title: '暨自然资源法治研究中心成立大会议程',
            url: 'http://zazk.httdmall.com/content/c_003.html',
            time: '2020-10-25'
          }, {
            title: '企研联手会商矿业权收益评估问题',
            url: 'http://zazk.httdmall.com/content/c_004.html',
            time: '2020-10-25'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  .titleblack {
    display: block;
    color: #333333 !important;
    width: 600px;
    font-size: 15px;
    float: left;
  }

  .date1 {
    color: #7b7b7b;
    font-size: 14px;
    float: right;
  }

  .re_box {
    line-height: 50px;
  }

  .document-box {
    background: #ffffff;
    padding: 10px 20px;
    min-height: 600px;
  }
</style>
