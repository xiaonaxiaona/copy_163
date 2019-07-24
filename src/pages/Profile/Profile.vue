<template>
  <section>
    <div>
      O(∩_∩)O~~欢迎走入<span>徐大美女</span>的翻版网易
    </div>
    <!-- <button @click="toLogout">退出登录</button> -->
    <button @click="$router.replace('/login')">退出登录</button>
  </section>
</template>
<script>
  //import {mapState} from 'vuex'
  export default {
    // computed: {
    //   ...mapState({
    //     userInfo: state => state.login.userInfo
    //   }),
    // },
    // methods: {
    //   toLogout () {
    //     this.$store.dispatch('logout',() => {
    //       this.$router.replace('/login')
    //     })
    //   }
    // }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  section
    text-align center
    div
      height 100%
      overflow hidden
      padding-top 400px
      text-align center
      font-size 30px
      margin-bottom 50px
      span
        font-weight bold
        color salmon
        font-size 40px
    button
      font-size 30px
      color #fff
      background-color salmon
      border none
      height 100px
      width 300px
</style>

