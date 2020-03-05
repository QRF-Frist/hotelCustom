<template>
    <div id="topNav">
        <div class="content">
           <div class="tN_content_leftBox">
               <el-menu 
                  :default-active="activeIndex" 
                  class="el-menu-demo" 
                  mode="horizontal" 
                  @select="handleSelect"
                  active-text-color="rgba(76,109,232,.8)"
              >
                 <el-submenu index="1">
                   <template slot="title">
                      <i class="iconfont icon-yudingguanli"></i>
                      预定
                   </template>
                   <el-menu-item index="1-1" @click="byCkickToTargetPage('bookManage')">预定管理</el-menu-item>
                   <el-menu-item index="1-2" 
                     @click="byCkickToTargetPage('sortRoomSearch')">
                   排房查询</el-menu-item>
                   <el-menu-item index="1-3" 
                   @click="byCkickToTargetPage('futureRoomStatus')">
                   远期房态</el-menu-item>
                 </el-submenu>
                 <el-submenu index="2">
                   <template slot="title">
                      <i class="iconfont icon-ruzhu"></i>
                      入住
                   </template>
                   <el-menu-item index="2-1"  @click="byCkickToTargetPage('directCheckIn')">直接入住</el-menu-item>
                   <el-menu-item index="2-2"  @click="byCkickToTargetPage('teamCheckIn')">团队入住</el-menu-item>
                   <el-menu-item index="2-3"  @click="byCkickToTargetPage('stopTheCarManage')">停车场管理</el-menu-item>
                 </el-submenu>
                 <el-submenu index="3">
                   <template slot="title">
                      <i class="iconfont icon-ruzhu"></i>
                      订单
                   </template>
                   <el-menu-item index="3-1" @click="byCkickToTargetPage('orderSearch')">订单查询</el-menu-item>
                   <el-menu-item index="3-2" @click="byCkickToTargetPage('businessLog')">营业日志</el-menu-item>
                 </el-submenu>
                 <el-submenu index="4">
                   <template slot="title">
                      <i class="iconfont icon-caiwu"></i>
                      账务
                   </template>
                   <el-menu-item index="4-1" @click="byCkickToTargetPage('customAccountSearch')">客帐查询</el-menu-item>
                   <el-menu-item index="4-2" @click="byCkickToTargetPage('inRoomCustomBalance')">在住客人余额</el-menu-item>
                   <el-menu-item index="4-3" @click="byCkickToTargetPage('historyCustomAccount')">非在住客账务</el-menu-item>
                 </el-submenu>
                 <el-submenu index="5">
                   <template slot="title">
                      <i class="iconfont icon-caiwu"></i>
                      客人
                   </template>
                   <el-menu-item index="5-1" @click="byCkickToTargetPage('checkInCustomList')">在住客人列表 </el-menu-item>
                   <el-menu-item index="5-2" @click="byCkickToTargetPage('customFileSearch')">客人档案查询</el-menu-item>
                   <el-menu-item index="5-3" @click="byCkickToTargetPage('customGoodManage')">客人物品管理</el-menu-item>
                 </el-submenu>
                 <el-submenu index="6">
                   <template slot="title">
                      <i class="iconfont icon-fangjian"></i>
                      房间
                   </template>
                   <el-menu-item index="6-1" @click="byCkickToTargetPage('roomManage')">房间管理</el-menu-item>
                   <el-menu-item index="6-2" @click="byCkickToTargetPage('roomStatusLog')">房态日志</el-menu-item>
                   <el-menu-item index="6-3" @click="byCkickToTargetPage('roomClearSearch')">房扫查询</el-menu-item>
                 </el-submenu>
               </el-menu>
           </div>
           <div class="tN_content_rightBox">
              <el-dropdown>
                <span class="el-dropdown-link">
                  我的账户<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>个人信息</el-dropdown-item>
                  <el-dropdown-item>退出系统</el-dropdown-item>
                  <el-dropdown-item>切换用户</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"topNav",
        data(){
            return {
              activeIndex: '1',
            }
        },
        methods:{
          handleSelect(key, keyPath) {
            
          },
          byCkickToTargetPage(UrlName){
            console.log(UrlName);
            this.$router.push({name:UrlName});
          }
        }
    }
</script>

<style scoped>
#topNav {
    width: 100%;
    height: 60px;
    z-index: 999;
    position:relative;
    min-width: 1240px;
    background-color: #fff;
}
.content {
    width: 80%;
    margin-left: 160px;
}
.tN_content_leftBox {
    float: left;
    height: 100%;
}
.tN_content_rightBox {
    top: 18px;
    right: 8%;
    width: 100px;
    cursor: pointer;
    position: absolute;
 }

</style>
<style>
#topNav .el-menu-item,
#topNav .el-submenu__title {
  margin-right: 8px;
  padding-left: 50px;
  padding-right: 20px;
}
#topNav .el-menu-item .iconfont,
#topNav .el-submenu .iconfont {
    left: 5px;
    bottom: -2px;
    display: block;
    position: absolute;
    font-size: 30px;
}
#topNav .el-submenu.is-opened i,
#topNav .el-submenu.is-active i,
#topNav .el-submenu.is-opened .el-submenu__title,
#topNav .el-submenu.is-active .el-submenu__title {
  color: rgba(76,109,232,.8);
}
#topNav .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
  border-color: rgba(76,109,232,.8);
}
#topNav .el-menu.el-menu--horizontal {
  border-bottom: 0px;
}

.el-menu--popup {
  padding: 5px 20px!important;
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
  min-width: auto!important;
}
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: rgba(76,109,232,.2)!important;
  color: rgba(76,109,232,.8)!important;
}
 /* 媒体查询，响应式配置  开始 */
@media screen and(max-width: 1200px)
{
  .tN_content_rightBox {
    display: none!important;
    font-size: 20px;
  }
}
/* 媒体查询，响应式配置  结束 */
</style>