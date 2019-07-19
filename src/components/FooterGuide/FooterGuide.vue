<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="footer_item" @click="goto('/home')" :class="{on:$route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>       
      </span>
      <span class="name">首页</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/category')" :class="{on:$route.path==='/category'}">
      <span class="item_icon">
        <i class="iconfont icon-leimupinleifenleileibie"></i>       
      </span>
      <span class="name">分类</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/see')" :class="{on:$route.path==='/see'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>       
      </span>
      <span class="name">识物</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/shopcart')" :class="{on:$route.path==='/shopcart'}">
      <span class="item_icon">
        <i class="iconfont icon-qicheqianlian-1"></i>       
      </span>
      <span class="name">购物车</span>
    </a>
    <a href="javascript:;" class="footer_item" @click="goto('/profile')" :class="{on:$route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-ren-"></i>       
      </span>
      <span class="name">个人</span>
    </a>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //@import '../../common/stylus/mixins.styl'
  .footer_guide  //footer
    //top-border-1px(#d9d9d9)
    position fixed
    z-index 1
    left 0
    bottom 0
    //background-color yellow
    background-color #fff
    width 100%
    height 98px
    display flex
    justify-content space-around
    align-items center
    .footer_item
      display flex
      flex-direction column
      text-align center
      margin 5px
      color #7f7f7f
      &.on
        color #f40 
      span
        font-size 24px        
        margin-top 4px
        margin-bottom 3px      
        .iconfont
          font-size 40px 

 
</style>
