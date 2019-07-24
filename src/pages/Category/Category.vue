<template>
  <div class="categoryContainer">
    <div class="categoryHeader">
      <div class="categoryContent" @click="goto('/search')">
        <span class="icon">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜索商品, 共21742款好物</span>
      </div>
    </div>
    <div class="categoryCenter">
      <div class="centerLeft" v-if="categoryData.categoryL1List">
        <ul class="left">
          <li v-for="(category,index) in categoryData.categoryL1List" :key="category.id" 
          :class="currentIndex===index?'current':' '" @click="currentIndex = index">{{category.name}}</li>
        </ul>
      </div>
      <div class="centerRight" v-if="categoryData.categoryL1List">
        <div class="right">
          <div class="rightTop">
            <img :src="categoryData.categoryL1List[currentIndex].wapBannerUrl">
          </div>
          <div class="rightList">
            <li class="listItem" v-for="(item) in categoryData.categoryL1List[currentIndex].subCateList" :key="item.id">
              <img :src="item.wapBannerUrl">
              <div class="itemName">{{item.name}}</div>
            </li>         
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currentIndex:0,
        //navLeft:["推荐专区","夏凉专区","爆品专区","新品专区","居家生活","服饰鞋包","美食酒水","个护清洁"]
      }
    },
    computed:{
      ...mapState({
        categoryData: state => state.category.categoryData
      })
    },
    async mounted(){
      //分发
      await this.$store.dispatch('getCategoryData')

      //滑动
      new BScroll('.centerLeft',{
        scrollY:true,
        click:true
      })

    },
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.categoryContainer
  width 100%
  height 100%
  padding-bottom 200px
  margin-bottom -200px
  .categoryHeader
    width 100%
    height 88px
    background #fff
    display flex
    justify-content space-around
    align-items center
    padding 16px 30px 
    box-sizing border-box
    position fixed
    left 0px
    top 0px
    z-index 2
    .categoryContent
      width 690px
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
  .categoryCenter
    width 750px
    height 1148px
    //background yellow
    position relative
    top 18px
    .centerLeft
      width 162px
      height 1000px
      //background red
      //padding 0px 0px
      box-sizing border-box
      position absolute
      left 0px
      top 54px
      .left
        width 100%
        // height 100%
        li
          width 162px
          height 50px
          margin-top 46px
          font-size 28px
          text-align center
          line-height 50px
          box-sizing border-box
          &.current
            border-left 4px solid #f00
            color #f00
            box-sizing border-box
          &:first-child
            margin-top 0px
    .centerRight
      width 588px
      height 500px
      //background blue
      margin 46px 0px 0px 162px
      padding 30px 30px 21px 30px
      box-sizing border-box
      .right
        width 100%
        //padding 30px 30px 21px 30px
        //box-sizing border-box
        .rightTop
          width 528px
          height 192px
          margin-bottom 32px
          img 
            width 528px
            height 192px
        .rightList
          width 528px
          height 648px
          //background red
          .listItem
            width 144px
            height 216px
            margin-right 34px
            float left
            &:nth-child(3n)
              margin-right 10px
            img 
              width 144px
              height 144px
              background #fff
            .itemName
              width 144px
              height 72px
              color #333333
              font-size 24px


            
          
    
</style>
