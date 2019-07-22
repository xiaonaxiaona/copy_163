<template>
  <div class="HomeContainer">
    <div class="topHeader">
      <div class="header">
        <h1 class="logo">
          <a href="javascript:;">
            <img src="http:////yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          </a>
        </h1>
        <div class="searchContent" @click="goto('/search')">
          <span class="icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
          <span>搜索商品, 共21742款好物</span>
        </div>
        <div class="isButton">登录</div>
      </div>
      <div class="headerNavUl" ref="topWrapper">
        <ul class="headerNavList" ref="list" v-if="!isShowMore">
          <li v-for="(item,index) in navList" :key="index" :class="currentIndex===index?'current':' '" @click="get(index)">{{item}}</li>
        </ul>

        <div class="toggle" @click="handleArrow">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png"
            :class="fade?'downArrow':'upArrow'">
        </div>
      </div>
      <div class="more" v-if="isShowMore">       
        <div class="moreTitle">全部频道</div>        
      </div>

    </div>

    <!-- 点击显示更多 -->
    <div class="moreUl" v-if="isShowMore">
      <li v-for="(item,index) in navList" :key="index" :class="currentIndex===index?'current':' '" @click="currentIndex=index">{{item}}</li>
    </div>
    <!-- 点击更多的蒙板 -->
    <div class="mask" v-if="isShowMore" @click="isShowMore = !isShowMore"></div>
    <!-- 轮播图 -->
    <div class="swiper-tab">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/7c1ce80acc7625c23246cc99e9cd8f4a.png?imageView&quality=75&thumbnail=750x0" alt="">
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/820d46ff89b81f8344aaabd5b054dc83.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3cf97a99f8017e3bb0d22fdff2c283b0.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/e1838f8442e7bfef014070ff902a698f.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/3b6044678c7d6ec12a1733657aa294ae.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          <div class="swiper-slide">
            <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">            
          </div>
          
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 中间小条 mock数据-->
    <div class="content_line" v-if="homeData.policyDescList">
      <div class="line" v-for="(item,index) in homeData.policyDescList" :key="index">
        <div class="uicon">
          <img :src="item.icon">
        </div>
        <div class="name">{{item.desc}}</div>
      </div>
      
    </div>
    <!-- 分类 -->
    <div class="category">
      <ul v-if="homeData.kingKongModule">
        <li class="category_item" v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl">
          <div class="txt">{{item.text}}</div>
        </li>
      </ul>
    </div>
    <!-- 图片链接 -->
    <div class="imgLinker">
      <a href="javascript:;">
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif">
      </a>
    </div>
    <!-- m-sceneLightShoppingGuideModule -->
    <div class="m-sceneLightShoppingGuideModule">
      <ul v-if="homeData.sceneLightShoppingGuideModule">
        <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule" :key="index">
          <div class="title">{{item.styleItem.title}}</div>
          <div class="desc">{{item.styleItem.desc}}</div>
          <div class="img_pic" v-if="item.styleItem">
            <img :src="item.styleItem.picUrlList[0]">
            <img :src="item.styleItem.picUrlList[1]">
          </div>
        </li>
         
      </ul>
    </div>
    <!-- Personal -->
    <div class="personal">
      <div class="line"></div>
      <div class="personal_title">
        <span>私人订制</span>
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'

import { mapState } from 'vuex'

  export default {
    data(){
      return{
        fade: true,  //箭头向下
        isShowMore: false,
        currentIndex:0,
        navList:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"]
      }
    },
    
    computed:{
      ...mapState({
        homeData: state => state.home.homeData
      })
    },

    mounted(){
      this.$store.dispatch('getHomeDate')

      //console.log(this.homeData)
      //1. 滑动
      this.navScroll = new BScroll(this.$refs.topWrapper, {
          // ...... 详见配置项
          click: true, // 标识分发点击事件
          scrollX: true
      })

      //2. 轮播图
      var mySwiper = new Swiper ('.swiper-container', {
        //loop: true, // 循环模式选项
        autoplay:true, //设置自动循环播放       
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },               
      })
      
      //3. 分发事件dispatch

    },

    methods:{
      goto(path){
        this.$router.push(path)
      },
      // 点击导航，往前跑
      get(index){
        this.currentIndex = index
        const list = this.$refs.list
        list.style.left = -[ (index-1) * 156 + 122 ] + "px"
      },
      // 小箭头转的
      handleArrow(){
        this.isShowMore = !this.isShowMore
        this.fade = !this.fade
      }
    },

    updated () {
      if (this.navScroll) {
        this.navScroll.refresh()
      }else {
        this.navScroll = new BScroll('.homeNav', {
          scrollX: true,
          click: true
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.HomeContainer
  width 100%
  height 100%
  color #333
  .topHeader
    width 100%
    height 148px
    position fixed
    top 0
    left 0
    z-index 9   
    .header
      width 100%
      height 88px
      background yellow
      background #fff
      display flex
      justify-content space-around
      align-items center
      padding 16px 30px 
      box-sizing border-box
      .logo
        width 138px
        height 40px
        margin-right 20px
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
      .isButton
        width 74px
        height 40px
        border 1px solid #b4282d
        border-radius 5px
        text-align center
        line-height 40px
        color #b4282d
        margin-left 16px
    .headerNavUl 
      width  400px
      height 60px
      //background yellow
      background #ffffff
      padding 0px 30px
      box-sizing border-box
      display flex
      .headerNavList
        background #ffffff
        //width 1360px
        height 100%
        display flex
        white-space nowrap
        li       
          height 60px
          //width 200px
          padding 0px 22px
          box-sizing border-box
          font-size 28px
          text-align center
          line-height 60px
          &.current
            border-bottom 4px solid #b4282d
      .toggle
        width 100px
        height 60px
        //background #ff4400
        background #fff
        position absolute
        right 0
        bottom 0
        img 
          width 30px
          height 30px         
          position absolute
          left 0
          right 0 
          bottom 0
          top 0
          margin auto
          z-index 10
          //transition all 0.5s 
          &.downArrow
            transform rotate(0deg)
            transition all 0.6s 
          &.upArrow
            transform rotate(180deg)
            transition all 0.6s 

    .more
      font-size 27px
      width 650px
      height 60px
      line-height 60px
      padding 0px 28px
      background #fff
      position fixed
      left 0px
      top 88px
      z-index 9
  .moreUl
    width 750px
    height 312px
    background #fff
    //background red
    position fixed
    left 0
    top 148px
    z-index 9
    li
      float left
      width 150px
      height 56px
      color #333
      font-size 25px
      background #fafafa
      margin 15px 0px 40px 30px
      text-align center
      line-height 56px
      box-sizing border-box
      &.current
        border 1px solid #b4282d
        color #b4282d
  .mask
    width 100%
    height 100%
    background-color rgba(0,0,0,0.4)
    position fixed
    top 0
    left 0
    z-index 2
  .swiper-tab
    width 100%
    height 370px
    padding-top 148px
    .swiper-container
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        overflow hidden       
        img
          width 100%
          height 100%
  .content_line
    display flex
    align-items center
    justify-content space-around
    width 100%
    height 72px
    padding 0 30px
    box-sizing border-box
    //background yellow
    .line
      display flex
      text-align center
      color #333
      line-height 34px
      .uicon
        width 32px
        height 32px
        img 
          width 32px
          height 32px
      .name
        margin-left 8px
  .category
    width 100%
    height 373px
    //background yellow 
    padding-bottom 32px
    box-sizing border-box
    ul
      width 100%
      height 341px
      //background red
      .category_item
        width 110px
        height 156px
        margin 10px 19px 9px
        //background #fff
        float left
        img
          width 110px
          height 110px
        .txt
          width 110px
          height 36px
          margin-top 10px
          font-size 24px
          text-align center
          line-height 36px
  .imgLinker
    width 100%
    height 127px
    a
      img 
        width 100%
        height 127px
  .m-sceneLightShoppingGuideModule
    width 750px
    height 576px
    background red
    position relative
    background #fff
    margin 0px 0px 20px
    padding 10px 30px 30px 26px
    box-sizing border-box
    ul
      width 750px    
      box-sizing border-box
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      padding 10px 30px 30px 26px
      box-sizing border-box
      margin-top 20px      
      //background yellow      
      li
        width 342px
        height 264px       
        margin 4px 0px 0px 4px
        padding 20px 0px 0px 20px
        box-sizing border-box
        float left
        background #f5f5f5
        .title
          width 323px
          height 48px
          font-size 32px
          color #333
          padding-left 10px
          box-sizing border-box
        .desc
          width 323px
          height 36px
          font-size 24px
          color #7f7f7f
          padding-left 10px
          box-sizing border-box
        .img_pic
          img
            width 150px
            height 150px
            margin-right 4px
  .personal
    width 100%
    height 490px
    .line
      width 100%
      height 20px
      background #eee
    .personal_title
      width 100%
      height 100px
      padding 0px 30px
      box-sizing border-box
      background yellow
      line-height 100px
      span
        font-size 32px
        color #333
    





      
            





          

        


      
          




          






        

          
  


</style>
