import ajax from './ajax'

//mock数据
export const reqHomeData = ()=>ajax('/homedata')
export const reqCategoryData = ()=>ajax('/category')
export const reqCategoryListData = ()=>ajax('/categorylist')

//网易数据
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')//搜索的初始化显示数据
export const reqSeeSearch = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837',{keywordPrefix})// 搜索内容
export const reqSeeNav = () => ajax('/api/topic/v1/find/getTabs.json')//see的find导航数据
export const reqSeeData = () => ajax('/api/topic/v1/find/recManual.json')//see的find数据

//see中的find滑到底，再去发的请求
export const reqSeeNewData = (page) => ajax(`/api/topic/v1/find/recAuto.json?page=${page}&size=5`)



//服务器
export const reqCode = (phone) => ajax( '/local/sendcode', {phone})//获取手机验证码
export const reqLoginPhone = (phone,code) => ajax( '/local/login_sms', {phone,code}, 'POST')//手机登陆
export const reqLoginEmail = (email,pwd) => ajax( '/local/login_email', {email,pwd}, 'POST')// 邮箱登陆
export const reqUserInfo = () => ajax( '/local/userinfo')// 请求用户
export const reqLogout = () => ajax( '/local/logout')// 退出登录

