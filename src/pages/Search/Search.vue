<template>
  <div class="searchContainer">
    <div class="searchHeader">
      <div class="searchContent">
        <span class="icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <input type="text" placeholder="搜索商品, 共21742款好物">      
      </div>
      <div class="isButton" @click="$router.back()">取消</div>
    </div>
    <!-- 热门搜索 -->
    <div class="searchContainer">
      <div class="searchtitle">热门搜索</div>
      <div class="search_list">
        <li v-for="(item,index) in navList" :key="index">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        navList:["夏凉被82折起","9.9元超值专区","基础T恤30元起","拖鞋","冬枣","凉席","毛巾"]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    height 1334px
    background #eee
    .searchHeader
      width 100%
      height 88px
      //background yellow
      background #fff
      display flex
      justify-content space-around
      align-items center
      padding 16px 30px 
      box-sizing border-box
      .searchContent
        width 442px
        height 56px
        text-align center
        line-height 56px
        background #ededed
        border-radius 5px
        .icon
          width 28px
          height 28px
          margin-right 10px
          .iconfont
            font-size 28px
        span 
          font-size 26px
          color #666
        input 
          background #eee
          outline none
      .isButton
        width 74px
        height 40px
        border 1px solid #b4282d
        border-radius 5px
        text-align center
        line-height 40px
        color #b4282d
        margin-left 16px
    .searchContainer
      width 100%
      height 404px
      background #ffffff
      margin 0 0 20px
      padding 0 30px 30px
      .searchtitle
        width 690px
        height 90px
        color #999999
        font-size 28px
        line-height 90px
      .search_list
        width 720px
        height 316px
        margin 0px -30px -32px 0px
        li
          border 3px solid #eee
          border-radius 1px
          color #333
          margin 0 32px 32px 0
          padding 0 15px
          height 47px
          float left 
          line-height 47px

        

    

</style>
