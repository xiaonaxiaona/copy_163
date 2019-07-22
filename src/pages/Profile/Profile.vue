<template>
  <div class="profileContainer">
    <div class="topHeader">
      <div class="header">       
        <span class="header_icon" @click="$router.replace('/home')">
          <i class="iconfont icon-shouye"></i>
        </span>
        <div class="seeTitle">
          <!-- <span :class="{current:isCurrent}" @click="isCurrent = !isCurrent">发现</span>
          <span :class="{current:!isCurrent}" @click="isCurrent = !isCurrent">甄选家</span> -->
          <img src="http:////yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png">
        </div>
        <div class="headerRight">
          <span class="header_icon" @click="$router.push('/search')">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_icon" @click="$router.replace('/shopcart')">
            <i class="iconfont icon-qicheqianlian-1"></i>
          </span>
        </div>
      </div>      
    </div>
    <div class="center">
      <div class="centerImg">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="loginType">
        <div class="phone">手机号码登录</div>
        <div class="email">邮箱账号登录</div>
        <div class="fast">手机号快速注册 ></div>
      </div>
      <div class="bottom">
        <div>
          微信
        </div>
        <div>
          QQ
        </div>
        <div>
          微博
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.profileContainer
  width 100%
  min-height 3000px
  background #eee
  .topHeader
    bottom-border-1px(#000)
    width 100%
    height 100px
    //background red
    background #fff
    line-height 100px
    text-align center
    .header
      padding 0 10px
      width 100%
      height 100px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      .header_icon
        .iconfont
          font-size 55px
      .seeTitle
        margin-left 50px
        img 
          vertical-align middle 
          width 115px
          height 65px       
      .headerRight
        width 150px
        height 100px
        display flex
        justify-content space-between
  .center
    width 100%
    height 740px
    //background yellow 
    .centerImg
      width 100%
      height 244px
      padding 80px 0px
      //background red
      position relative
      img 
        width 268px
        height 90px
        position absolute
        left 0
        right 0
        bottom 0 
        top 0
        margin auto
    .loginType
      width 100%
      height 292px
      //background #f40
      margin 10px 0px 102px
      padding 0px 40px
      box-sizing border-box
      div
        width 670px
        height 100px
        margin 0px 0px 35px
        text-align center
        line-height 100px
        color #ffffff
        font-size 30px
        &.phone
          background #b4282d
          border 1px solid #b4282d
        &.email
          border 1px solid #b4282d
          color #b4282d
        &.fast
          color #333
    .bottom
      width 100%
      height 100px
      padding 0px 40px
      box-sizing border-box
      //background #ff4400
      margin-top 300px
      color #7f7f7f
      display flex
      align-items center
      justify-content center
      div
        width 140px
        border-right 1px solid #7f7f7f
        text-align center
        font-size 28px
        &:last-child 
          border-right none 




      

 
</style>
