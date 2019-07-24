const Home = ()=>import('../pages/Home/Home.vue')
const Category = ()=>import('../pages/Category/Category.vue')
const See = ()=>import('../pages/See/See.vue')
const ShopCart = ()=>import('../pages/ShopCart/ShopCart.vue')
const Profile = ()=>import('../pages/Profile/Profile.vue')
const Login = ()=>import('../pages/Login/Login.vue')
const LoginPhone = ()=>import('../pages/Login/LoginPhone.vue')
const LoginEmail = ()=>import('../pages/Login/LoginEmail.vue')

const Search =()=>import ('../pages/Search/Search.vue')
const Find =()=>import ('../pages/See/Find.vue')
import Select from '../pages/See/Select.vue'


export default[
  {
    path:"/home",
    component:Home,
    meta:{
      isShowFooter: true
    }
  },
  {
    path:"/category",
    component:Category,
    meta:{
      isShowFooter: true
    }
  },
  {
    path: "/see",
    component: See,
    meta:{
      isShowFooter: true
    },
    children:[
      {
        path: "/see/find",
        component: Find,
        meta:{
          isShowFooter: true
        }
      },
      {
        path: "/see/select",
        component: Select,
        meta:{
          isShowFooter: true
        }
      },
      {
        path:"",
        redirect: "/see/find"
      }
    ]
  },
  {
    path:"/shopcart",
    component:ShopCart,
    meta:{
      isShowFooter: true
    }
  },
  {
    path:"/login/:id",  // params形式传参
    name:'Login',
    component:Login
    // children:[
    //   { 
    //     path:"/login/:id",  // params形式传参
    //     name:'LoginPhone',
    //     component: LoginPhone
    //   },
    //   { 
    //     path:"/login/:id",  // params形式传参
    //     name:'LoginEmail',
    //     component: LoginEmail
    //   }
    // ]
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/search",
    component:Search
  }
  
]