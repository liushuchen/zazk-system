<template>
  <div class="footer">
    <div>
      <p>
        联系我们
      </p>
      <p>
        邮箱：ZAI@zazk.org.cn
      </p>
      <p>
        电话：010-84625775
      </p>
      <p>
        地址：北京市朝阳区三丰北里9号悠唐国际A座12层
      </p>
    </div>
    <img src="./../../../assets/img/ercode.png" alt>
  </div>
</template>

<script>
  export default {
    name: 'FooterCom'
  }
</script>

<style scoped>
  img{
    width: 150px;
    height: 150px;
  }
  .footer {
    font: 16px/1.5 '中软雅黑 宋体';
    color: #ffffff;
    padding:40px 200px 0px 200px;
    display: flex;
    justify-content: space-around;
  }
</style>
