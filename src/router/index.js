import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 导入组件
  import loginRegisterPage from '../components/login_register.vue';
  import indexPage from '../components/indexPage.vue';
  // 预定页面组件  开始
  import bookPage from '../pages/bookPage/bookPage.vue';
  import bookManage from '../pages/bookPage/components/bookManage.vue';
  import sortRoomSearch from '../pages/bookPage/components/sortRoomSearch.vue';
  import futureRoomStatus from '../pages/bookPage/components/futureRoomStatus.vue';
  // 预定页面组件  结束
  // 入住页面组件  开始
  import checkInRoomPage from '../pages/checkInRoomPage/checkInRoomPage.vue';
  import directCheckIn from '../pages/checkInRoomPage/components/directCheckIn.vue';
  import stopTheCarManage from '../pages/checkInRoomPage/components/stopTheCarManage.vue';
  import teamCheckIn from '../pages/checkInRoomPage/components/teamCheckIn.vue';
  // 入住页面组件  结束
  // 订单页面组件  开始
  import orderPage from '../pages/orderPage/orderPage.vue';
  import businessLog from '../pages/orderPage/components/businesLog.vue';
  import orderSearch from '../pages/orderPage/components/orderSearch.vue';
  // 订单页面组件  结束
  // 帐务页面组件  开始
  import accountsPage from '../pages/accountsPage/accountsPage.vue';
  import customAccountSearch from '../pages/accountsPage/components/customAccountSearch.vue';
  import inRoomCustomBalance from '../pages/accountsPage/components/inRoomCustomBalance.vue';
  import historyCustomAccount from '../pages/accountsPage/components/historyCustomAccount.vue';
  // 帐务页面组件  结束
  // 客人页面  开始
  import customPage from '../pages/customPage/customPage.vue';
  import checkInCustomList from '../pages/customPage/components/checkInCUstomList.vue';
  import customFileSearch from '../pages/customPage/components/customFileSearch.vue';
  import customGoodManage from '../pages/customPage/components/customGoodManage.vue';
  // 客人页面  结束
  
  // 房间页面  开始
  import roomsPage from '../pages/rooms/roomsPage.vue';
  import roomManage from '../pages/rooms/components/roomManage.vue';
  import roomStatusLog from '../pages/rooms/components/roomStatusLog.vue';
  import roomClearSearch from '../pages/rooms/components/roomClearSearch.vue';
  // 房间页面  结束

const routes = [
  {
    path: "/",
    name: "loginRegister",
    component: loginRegisterPage,
    meta:{
      requiredAth:false, // 是否需要处于登录状态
    }
  },
  {
    path:"/index",
    name:"index",
    component:indexPage,
    meta:{
      requiredAth:true, // 是否需要处于登录状态
    }
  },
  {
    path: "/bookPage",
    name: "bookPage",
    component: bookPage,
    meta:{
      requiredAth:true,
    },
    children:[
      {
        path:"/",
        redirect:"/bookManage"
      },
      {
        path:"/bookManage",
        name:"bookManage",
        component: bookManage,
        meta:{
          requiredAth:true,
        },
      },
      {
        path:"/sortRoomSearch",
        name:"sortRoomSearch",
        component: sortRoomSearch,
        meta:{
          requiredAth:true,
        },
      },
      {
        path:"/futureRoomStatus",
        name:"futureRoomStatus",
        component: futureRoomStatus,
        meta:{
          requiredAth:true,
        },
      }
    ]
  },
  {
    path: '/checkInRoomPage',
    name: 'checkInRoomPage',
    component: checkInRoomPage,
    meta:{
      requiredAth:true,
    },
    children:[
      {
        path:"/",
        redirect:"/directCheckIn"
      },
      {
        path: '/directCheckIn',
        name: 'directCheckIn',
        component: directCheckIn,
        meta:{
          requiredAth:true,
        }
      },
      {
        path: '/stopTheCarManage',
        name: 'stopTheCarManage',
        component: stopTheCarManage,
        meta:{
          requiredAth:true,
        }
      },
      {
        path: '/teamCheckIn',
        name: 'teamCheckIn',
        component: teamCheckIn,
        meta:{
          requiredAth:true,
        }
      }
    ]
  },
  {
    path: '/orderPage',
    name: 'orderPage',
    component: orderPage,
    meta:{
      requiredAth:true,
    },
    children: [
       {
          path:"/",
          redirect:"/orderSearch"
       },
       {
          path: '/businessLog',
          name: 'businessLog',
          component: businessLog,
          meta:{
            requiredAth:true,
          }
       },
       {
          path: '/orderSearch',
          name: 'orderSearch',
          component: orderSearch,
          meta:{
            requiredAth:true,
          }
       }
    ]
  },
  {
    path: '/accountsPage',
    name: 'accountsPage',
    component: accountsPage,
    meta:{
      requiredAth:true,
    },
    children: [
       {
          path:"/",
          redirect:"/customAccountSearch"
       },
       {
          path: '/customAccountSearch',
          name: 'customAccountSearch',
          component: customAccountSearch,
          meta:{
            requiredAth:true,
          }
       },
       {
          path: '/inRoomCustomBalance',
          name: 'inRoomCustomBalance',
          component: inRoomCustomBalance,
          meta:{
            requiredAth:true,
          }
       },
       {
          path: '/historyCustomAccount',
          name: 'historyCustomAccount',
          component: historyCustomAccount,
          meta:{
            requiredAth:true,
          }
       }
    ]
  },
  {
    path: '/customPage',
    name: 'customPage',
    component: customPage,
    meta:{
      requiredAth: true,
    },
    children: [
       {
          path: '/',
          redirect: '/checkInCustomList',
       },
       {
          path: '/checkInCustomList',
          name: 'checkInCustomList',
          component: checkInCustomList,
          meta: {
             requiredAth: true,
          }
       },
       {
          path: '/customFileSearch',
          name: 'customFileSearch',
          component: customFileSearch,
          meta: {
             requiredAth: true,
          }
       },
       {
          path: '/customGoodManage',
          name: 'customGoodManage',
          component: customGoodManage,
          meta: {
             requiredAth: true,
          }
       }
    ]
  },
  {
    path: '/roomsPage',
    name: 'roomsPage',
    component: roomsPage,
    meta:{
      requiredAth: true,
    },
    children: [
       {
          path: '/',
          redirect: '/roomManage',
       },
       {
          path: '/roomManage',
          name: 'roomManage',
          component: roomManage,
          meta: {
             requiredAth: true,
          }
       },
       {
          path: '/roomStatusLog',
          name: 'roomStatusLog',
          component: roomStatusLog,
          meta: {
             requiredAth: true,
          }
       },
       {
          path: '/roomClearSearch',
          name: 'roomClearSearch',
          component: roomClearSearch,
          meta: {
             requiredAth: true,
          }
       }
    ]
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
