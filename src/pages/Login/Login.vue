<template>
  <div class="loginContainer">
    <LoginHeader />
    <div class="center" v-if="$route.params.id*1 ===0">
      <div class="centerImg">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
      </div>
      <div class="loginType">
        <!-- <div class="phone" @click="changeIsLoginPhone">手机号码登录</div>
        <div class="email" @click="changeIsLoginMail">邮箱账号登录</div> -->
        <div class="phone" @click="toLoginByPhone">手机号码登录</div>
        <div class="email" @click="toLoginByEmail">邮箱账号登录</div>
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
    <!-- <LoginPhone v-show="isShowPhone" :changeIsLoginPhone="changeIsLoginPhone"/>
    <LoginEmail v-show="isShowEmail" :changeIsLoginMail="changeIsLoginMail"/> -->
    <LoginPhone v-if="$route.params.id*1 ===1"/>
    <LoginEmail v-if="$route.params.id*1 ===2"/>
    <router-view></router-view>
    
  </div>
</template>

<script type="text/ecmascript-6">
import LoginPhone from './LoginPhone.vue'
import LoginEmail from './LoginEmail.vue'
  export default {
    data(){
      return{
        isShowPhone:false,
        isShowEmail:false
      }
    },

    methods:{
      toLoginByPhone(){
        this.$router.push({
          name:'Login',
          params:{
            id: 1
          }
        })
      },
      toLoginByEmail(){
        this.$router.push({
          name:'Login',
          params:{
            id:2
          }
        })
      },

      // 控制组件的显示隐藏时，用的这个
      // changeIsLoginPhone () {
      //   this.isShowPhone = !this.isShowPhone
      // },
      // changeIsLoginMail () {
      //   this.isShowEmail = !this.isShowEmail
      // }
    },

    components:{
      LoginPhone,
      LoginEmail
    }

   
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.loginContainer
  width 100%
  height 1334px
  background #eee
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
