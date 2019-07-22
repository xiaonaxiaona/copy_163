<template>
  <div class="findContainer">
    <div class="headerNavUl" ref="topWrapper">
      <ul class="headerNavList" ref="list">
        <li v-for="(item,index) in navList" :key="index" :class="currentIndex===index?'current':' '" @click="currentIndex = index">{{item}}</li>       
      </ul>     
    </div>
    <div class="seeContentBig">
      <div class="seeItemBig"> 
        <div class="title">
          <img src="https://yanxuan.nosdn.127.net/a714aeeb574585d3e23d35f1ee2db8b8.png?imageView&quality=65&thumbnail=56y56" alt="">
          <span>选妹</span>
        </div>
        <div class="desc">夏凉用品购置指南，凉席、空调被、凉感四件套每满100立减20</div>
        <img class="img1" src="https://yanxuan.nosdn.127.net/ae09169ca36f7adc57458c5a371ab6df.jpg?imageView&quality=65&thumbnail=690y376" alt="">
        <div class="seed">
          <span>4662人看过</span>
        </div>
      </div>     
    </div>
    <div class="seeContentSmall">
      <div class="seeItemSmall">
        <div class="smallLeft">
          <div class="title">
            <img src="https://yanxuan.nosdn.127.net/8720248cc1f62d279f004b8a5124f811.jpg?imageView&quality=65&thumbnail=56y56">
            <span>网易味央：小周</span>
          </div>
          <div class="desc">一次吃遍8种坚果，零食之王要这样吃才对</div>
          <div class="desc2">鲜粹每日坚果</div>
          <div class="seed">
            <span>8206人看过</span>
          </div>
        </div>
        <div class="smallRight">
          <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

  export default {
    data(){
      return{
        //isCurrent: true,
        currentIndex: 0,
        navList:["推荐","好货内部价","回购榜","晒单","开发者日记","达人","HOME"]
      }
    },
    mounted(){
      new BScroll(this.$refs.topWrapper,{
        scrollX :true,
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.findContainer
  .headerNavUl 
    width 750px
    height 50px
    padding 0px 0px 10px
    display flex
    background #fff
    .headerNavList
      height 50px
      display flex
      li
        width 150px
        height 50px
        line-height 50px
        text-align center        
        margin 0 10px
        padding 0px 4px
        font-size 30px
        &.current
          border-bottom 4px solid #b4282d
          color #b4282d
  .seeContentBig
    width 100%
    height 600px
    background #fff
    .seeItemBig
      width 100%
      height 600px
      padding 18px 26px
      margin 20px 0px 
      //background red
      box-sizing border-box
      .title
        height 40px
        margin-bottom 24px
        img 
          width 50px
          height 50px
          border-radius 50%
          margin-right 10px
          vertical-align middle
        span 
          font-size 28px
          vertical-align middle
      .desc
        font-size 34px
        line-height 50px       
      .seed
        margin-top 4px
  .seeContentSmall
    //width 100%
    height 308px
    background #fff
    .seeItemSmall
      //width 100%
      height 272px
      padding 18px 26px
      margin 20px 0px
      //background #f40
      //box-sizing border-box
      .smallLeft
        width 400px
        height 272px
        //background green
        float left
        .title
          height 40px
          margin-bottom 24px
          img 
            width 50px
            height 50px
            border-radius 50%
            margin-right 10px
            vertical-align middle
          span 
            font-size 28px
            color #333
            vertical-align middle
        .desc
          font-size 34px
          line-height 50px 
        .desc2
          width 200px
          height 24px
          padding 4px 0px 0px
          color #7f7f7f
          font-size 30px
          margin-top 10px
        .seed
          margin-top 40px
      .smallRight
        width 272px
        height 272px
        //background yellow
        float right






      
  



 
</style>
