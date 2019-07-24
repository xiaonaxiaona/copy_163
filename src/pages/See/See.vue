<template>
  <div class="seeContainer">
    <div class="topHeader">
      <div class="header">       
        <span class="header_icon" @click="$router.replace('/home')">
          <i class="iconfont icon-shouye"></i>
        </span>
        <div class="seeTitle">
          <!-- <span :class="{current:isCurrent}" @click="isCurrent = !isCurrent">发现</span>
          <span :class="{current:!isCurrent}" @click="isCurrent = !isCurrent">甄选家</span> -->
          <span :class="$route.path.indexOf('/find')!=-1? 'current' : ''" @click="$router.push('/see/find')">发现</span>
          <span :class="$route.path.indexOf('/select')!=-1? 'current' : ''" @click="$router.push('/see/select')">甄选家</span>
        </div>
        <div class="headerRight">
          <span class="header_icon" @click="$router.push('/search')">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span class="header_icon">
            <i class="iconfont icon-qicheqianlian-1"></i>
          </span>
        </div>
      </div>      
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
.seeContainer
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
    position fixed
    left 0
    top 0
    .header
      padding 0 10px
      width 100%
      height 100px
      box-sizing border-box
      display flex
      justify-content space-between
      .header_icon
        .iconfont
          font-size 55px
      .seeTitle
        width 300px
        height 100px
        margin-left 50px
        span 
          font-size 32px
          color #7f7f7f
          &.current
            color #b4282d
            font-size 50px
            font-weight 700
          &:first-child           
            margin-right 30px
      .headerRight
        width 150px
        height 100px
        display flex
        justify-content space-between
      
</style>
