<template>
  <div class="findContainer">
    <div class="headerNavUl" ref="topWrapper">
      <ul class="headerNavList">
        <li v-for="(item,index) in seeNav" :key="index" :class="currentIndex===index?'current':' '" @click="currentIndex = index">{{item.tabName}}</li>       
      </ul>     
    </div>

    <div class="ggg" ref="dataList" v-if="seeData">
      <div class="list"  v-for="(items,index) in seeData" :key="index">
        <div class="seeContentBig" v-for="(item,index) in items.topics" :key="index">
          <div class="seeItemBig" v-if="item.style === 1"> 
            <div class="title">
              <img :src="item.avatar">
              <span>{{item.nickname}}</span>
            </div>
            <div class="desc">{{item.title}}</div>
            <img class="img1" :src="item.picUrl">
            <div class="seed">
              <span>{{item.readCount}}人看过</span>
            </div>
          </div>     
        </div>
        <div class="seeContentSmall" v-for="(item) in items.topics" :key="item.topicId">
          <div class="seeItemSmall" v-if="item.style === 2">
            <div class="smallLeft">
              <div class="title">
                <img :src="item.avatar">
                <span>{{item.nickname}}</span>
              </div>
              <div class="desc">{{item.title}}</div>
              <div class="desc2">{{item.subTitle}}</div>
              <div class="seed">
                <span>{{item.readCount}}人看过</span>
              </div>
            </div>
            <div class="smallRight">
              <img :src="item.picUrl">
            </div>
          </div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import { log } from 'util';
  export default {
    data(){
      return{
        //isCurrent: true,
        currentIndex: 0,
        //navList:["推荐","好货内部价","回购榜","晒单","开发者日记","达人","HOME"]
        //Data: []
        CHeight : 1184 ,  //屏高-（头部高+导航的高）
        page:1
      }
    },
    async mounted(){
      //1. 分发 导航
      await this.$store.dispatch('getSeeNav')

      new BScroll(this.$refs.topWrapper,{
        scrollX :true,
        click:true
      })

      //2. 分发 导航下面的 具体数据
      this.$store.dispatch('getSeeData')

      //3.滚动监听
       window.addEventListener('scroll', this.handleScroll)

       //4. 分发 find滑到最后的监听
       //this.$store.dispatch('getSeeNewData')
    },
    methods:{
      //4. scrollTop的值
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        console.log(scrollTop)
        // 如果
        if(this.CHeight >= this.$refs.dataList.offsetHeight - scrollTop){
          //4. 分发 find滑到最后的监听
          console.log(this.page)
          this.$store.dispatch('getSeeNewData',this.page)
          this.page = this.page ++
        }

      }

    },
    computed:{
      ...mapState({
        seeNav: state =>state.see.seeNav,
        seeData: state =>state.see.seeData,
      }),
      // new(){
      //   return this.seeData
      // }    
    },
    beforeDestroy(){
      window.removeEventListener('scroll', this.handleScroll) 
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
    position fixed
    left 0
    top 100px
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
  .ggg
    padding-bottom 100px
    margin-bottom -100px
    margin-top 150px
    .list 
      // &:nth-child(1)     
      //   padding-top 2000px
      width 100%
      height 100%
      

      .seeContentBig
        width 100%
        //height 600px
        background #fff

        .seeItemBig
          width 100%
          //height 600px
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
          .img1
            width 690px
            height 376px   
          .seed
            margin-top 4px
      .seeContentSmall
        //width 100%
        //height 308px
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
              //width 200px
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
            img 
              width 272px
              height 272px

</style>
