<template>
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

</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'

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
  
</style>
