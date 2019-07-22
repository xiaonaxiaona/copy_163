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
      <div class="centerLeft">
        <ul class="left">
          <li v-for="(item,index) in navLeft" :key="index" :class="currentIndex===index?'current':' '" @click="currentIndex = index">{{item}}</li>
        </ul>
      </div>
      <div class="centerRight">
        <div class="rightTop">
          <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png?imageView&thumbnail=0x196">
        </div>
        <div class="rightList">
          <li class="listItem" v-for="(item,index) in 8" :key="index">
            <img src="http://yanxuan.nosdn.127.net/56486ce98e6ba7ae59a617759e739b09.png?imageView&quality=85&thumbnail=144x144">
            <div class="itemName">员工精选好货</div>
          </li>         
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        currentIndex:0,
        navLeft:["推荐专区","夏凉专区","爆品专区","新品专区","居家生活","服饰鞋包","美食酒水","个护清洁"]
      }
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
  height 1334px
  .categoryHeader
    width 100%
    height 88px
    background #fff
    display flex
    justify-content space-around
    align-items center
    padding 16px 30px 
    box-sizing border-box
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
    .centerLeft
      width 162px
      height 1120px
      //background red
      padding 40px 0px
      box-sizing border-box
      position absolute
      left 0
      top 0px
      .left
        width 100%
        height 100%
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
      height 1148px
      //background blue
      margin-left 162px
      padding 30px 30px 21px 30px
      box-sizing border-box
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
