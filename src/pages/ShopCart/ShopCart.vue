<template>
  <div class="shopCartContainer">
    <div class="shopCartHeader">
      <span class="left">购物车</span>
      <span class="right">领券</span>
    </div>
    <div class="shopCartNav">
     <li v-for="(item,index) in navList" :key="index">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>{{item}}</span>
     </li>
    </div>
    <div class="shopCartCenter">
      <div class="cartImg">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png">
      </div>
      <div class="cartAdd">
        <div class="add">去添加点什么吧</div>
        <div class="isBtn">登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        navList:["30天无忧退货","48小时快速退款","满88元免邮费"]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCartContainer
  width 100%
  min-height 10000px
  background #f4f4f4
  .shopCartHeader
    background #fff
    width 100%
    height 88px
    padding 0px 30px
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    .left
      color #333333
      font-size 36px
    .right
      color #B4282D
      font-size 30px
      margin-right 10px
  .shopCartNav
    width 690px
    height 70px
    padding 0px 30px 
    background #eee
    display flex
    justify-content space-between
    align-items center
    img 
      margin-right 8px
      vertical-align middle
    span 
      vertical-align middle
  .shopCartCenter
    height 1176px
    width 100%
    //background yellow
    position relative
    .cartImg
      width 100%
      height 248px
      //background red
      text-align center
      position absolute
      left 50%
      top 40%
      transform translate(-50%,-50%)
      img 
        height 248px
        width 248px
    .cartAdd
      width 100%
      height 169px
      //background yellow 
      position absolute
      left 50%
      top 60%
      transform translate(-50%,-50%)
      margin -26px 0px 0px
      text-align center
      .add
        color #999999
        font-size 28px
        margin 0px 0px 50px
      .isBtn
        width 480px
        height 92px
        color #ffffff
        background #b4282d
        margin 0px 135px
        font-size 32px
        text-align center
        line-height 92px

      
    




</style>
