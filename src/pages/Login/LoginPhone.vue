<template>
  <div id="loginPhoneWrap">
    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="input_phone">
        <input type="text" placeholder="请输入手机号" v-model="phone" @blur="testPhoneAndCode"/>
        <div class="clear" @click="handelClear" v-if="phone">x</div>
      </label>
      <label class="input_code">
        <input type="text" placeholder="请输入手机验证码" v-model="code" @blur="testPhoneAndCode"/>
        <div class="get_phone_code" @click="getCode">获取验证码</div>
      </label>
      <div class="login_help">
        <span class="err" v-show="errPhone || errCode">{{errPhone+'&nbsp;&nbsp;'+errCode}}</span>
        <span class="left">遇到问题? </span>
        <span class="right">使用密码验证登录</span>
      </div>
      <div class="phone_login active">
        <span @click="login">登录</span>
      </div>
      <div class="email_login" @click="$router.replace('/login/0')">
        <span>其他登录方式</span>
      </div>
      <div class="email_register">快速注册&nbsp;&gt;</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
   import {reqCode,reqLoginPhone} from '../../api'

   export default {
    data () {
      return {
        phone: '',
        code: '',
        errPhone: '',
        errCode: ''
      }
    },
    methods: {
      // 前台验证手机号
      testPhoneAndCode () {
        if (!/^1[34578]\d{9}$/.test(this.phone.trim()) && this.phone) {
          this.errPhone = '手机号格式错误'
        } else {
          this.errPhone = ''
        }
        if (!/^\d{6}$/.test(this.code.trim()) && this.code) {
          this.errCode = '验证码格式错误'
        }else {
          this.errCode = ''
        }
      },
      //点击叉
      handelClear () {
        this.phone = ''
        this.testPhone()
      },
      //点击获取验证码
      getCode () {
        reqCode(this.phone)
      },
      // 登陆
      async login () {
        const {phone,code} = this
        const result = await reqLoginPhone (phone,code)
        if (result.code === 0) {
          this.$router.replace('/profile')
        } else {
          alert('手机号或验证码错误')
        }
      }
    },
   
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #loginPhoneWrap
    width 100%
    height 100%
    padding 110px 0 0
    background-color white
    box-sizing border-box
    position relative
    box-sizing border-box
    &.is_personal
      background-color #f2f5f4
    .top_login
      width 679px
      height 752px
      color #000000
      margin 0 auto
      .top_img
        width 100%
        height 133px
        display flex
        justify-content center
        align-items center
        margin-bottom 130px
        img
          width 192px
          height 64px
      .input_phone
        position relative
        margin-top 30px
        input
          font-size 27px
        .clear
          width 30px
          height 30px
          line-height 30px
          background-color #ccc
          position absolute
          right 10px
          top 30px
          border-radius 50%
          text-align center
          color #fff
    .input_phone,
    .input_code
      display block
      width 675px
      height 90px
      margin 30px auto
      input
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 27px
        line-height 45px
    .input_code
      position relative
      .get_phone_code
        position absolute
        right 0
        bottom 15px
        width 173px
        height 56px
        line-height 56px
        text-align center
        font-size 28px
        border 1px solid #333
        border-radius  10px
    .login_help
      span
        color #bdbdbd
        font-size 27px
      .right
        float right
      .err
        color #b4282d
        display block
        margin-bottom 30px
    .phone_login,.email_login
      width 679px
      height 98px
      color #b4282d
      margin 32px 0 0
      text-align center
      line-height 98px
      font-size 28px
      border 1px solid #b4282d
      &.active
        background-color #b4282d
        color white
    .email_register
      text-align center
      font-size 28px
      color #000000
      margin-top 20px

</style>
