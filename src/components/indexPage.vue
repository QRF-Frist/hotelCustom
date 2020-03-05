<template>
   <div id="indexPage">
        <div class="topNav scrollBar">
            <topNav></topNav>
        </div>
        <div class="leftNav">
            <leftNav></leftNav>
        </div>
        <!-- 这里放的是每个主页面下的子页面  开始 -->
        <div class="mainContent">
            <div class="roomBox">
                <div class="topBox clearfix scrollBar">
                    <div class="checkBox customSource">
                        <div class="mC_cB_Class">
                            <el-checkbox :indeterminate="customSourceIsIndeterminate" v-model="checkCustomAll" @change="handleCustomCheckAllChange">客户来源</el-checkbox>
                        </div>
                        <div class="mC_cB_checked">
                            <el-checkbox-group v-model="checkedSource" @change="toHandleRoomEventManage">
                                <el-checkbox v-for="source in customSource" :label="source" :key="source">{{source}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="checkBox moveIntoMethod">
                        <div class="mC_cB_Class">
                            <el-checkbox :indeterminate="moveIntoMethodIsIndeterminate" v-model="checkAllMoveIntoMethod" @change="handleMoveIntoMethodCheckAllChange">入住方式</el-checkbox>
                        </div>
                        <div class="mC_cB_checked">
                            <el-checkbox-group v-model="checkedMoveIntoMethod" @change="toHandleRoomEventManage">
                                <el-checkbox v-for="source in moveIntoMethod" :label="source" :key="source">{{source}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="checkBox moveIntoStation">
                        <div class="mC_cB_Class">
                            <el-checkbox :indeterminate="moveIntoStationIsIndeterminate" v-model="checkAllMoveIntoStation" @change="handleMoveIntoStationCheckAllChange">入住方式</el-checkbox>
                        </div>
                        <div class="mC_cB_checked">
                            <el-checkbox-group v-model="checkedMoveIntoStation" @change="toHandleRoomEventManage">
                                <el-checkbox v-for="source in moveIntoStation" :label="source" :key="source">{{source}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                </div>
                <div class="allRooms">
                    <div class="aRContent scrollBar" style="width: 100%;height:100%;overflow-y:auto;">
                        <!-- 第五层 开始 -->
                        <div class="theLeveFive roomLevel">
                            <div class="rL_title"> 
                                <span>5</span> <!-- 楼层标号 -->
                            </div>
                            <!-- 房间盒子应该根据所请求到的数据，循环渲染出来 -->
                            <!-- 房间盒子 开始 -->
                            <div class="rL_content clearfix">
                                <div class="room" @click="showHomeDetailInfo(501)">
                                    <span class="room_title">501 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">502 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">503 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">504 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">505 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">506 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">507 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">508 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                            </div>
                            <!-- 房间盒子 结束 -->
                        </div>
                        <!-- 第五层 结束 -->

                        <!-- 第六层 开始 -->
                        <div class="theLeveFive roomLevel">
                            <div class="rL_title"> 
                                <span>6</span> <!-- 楼层标号 -->
                            </div>
                            <!-- 房间盒子应该根据所请求到的数据，循环渲染出来 -->
                            <!-- 房间盒子 开始 -->
                            <div class="rL_content clearfix">
                                <div class="room" @click="showHomeDetailInfo(501)">
                                    <span class="room_title">601 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">602 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">603 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">604 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">605 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">606 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">607 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                                <div class="room">
                                    <span class="room_title">608 单人房</span>
                                    <i class="iconfont icon-room"></i>
                                </div>
                            </div>
                            <!-- 房间盒子 结束 -->
                        </div>
                        <!-- 第六层 结束 -->

                    </div>
                </div>
            </div>
            <div class="searchBox scrollBar">
                <div class="sB_homeTitle">
                    营业实况&房间检索
                </div>
                <div class="sB_homeSearch">
                    <p>房间检索</p>
                    <div class="inputDiv">
                        <el-input
                          placeholder="请输入内容"
                          v-model="homeSearchInput"
                          clearable>
                          <el-button slot="append" icon="el-icon-search" @click="homeSearchClickEvent"></el-button>
                        </el-input>
                    </div>
                </div>
                <div class="sB_homeStatus">
                    <div class="sB_hS_title">
                        房间状态
                    </div>
                    <div class="sB_hS_chckeds scrollBar">
                        <el-checkbox-group v-model="homeStatusCheckList" @change="toHandleRoomEventManage">
                          <el-checkbox label="空净"></el-checkbox>
                          <el-checkbox label="空脏"></el-checkbox>
                          <el-checkbox label="住人净"></el-checkbox>
                          <el-checkbox label="住人脏"></el-checkbox>
                          <el-checkbox label="预定"></el-checkbox>
                          <el-checkbox label="预离"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="sB_homeType">
                    <div class="sB_hS_title">
                        房间类型
                    </div>
                    <div class="sB_hS_chckeds scrollBar">
                        <el-checkbox-group v-model="homeTypeCheckList" @change="toHandleRoomEventManage">
                          <el-checkbox label="双人房"></el-checkbox>
                          <el-checkbox label="单人房"></el-checkbox>
                          <el-checkbox label="大床房"></el-checkbox>
                          <el-checkbox label="情侣房"></el-checkbox>
                          <el-checkbox label="总统房"></el-checkbox>
                          <el-checkbox label="特价房"></el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <div class="sB_homeLevel">
                    <div class="sB_hS_title">
                        楼层 ( 总房数/空房数 )
                    </div>
                    <div class="sB_hS_chckeds scrollBar">
                        <el-radio v-model="homeLevelRadio" label="5" border size="mini" @change="toHandleRoomEventManage">5 ( 28/26 )</el-radio><br>
                        <el-radio v-model="homeLevelRadio" label="6" border size="mini" @change="toHandleRoomEventManage">6 ( 17/13 )</el-radio><br>
                        <el-radio v-model="homeLevelRadio" label="7" border size="mini" @change="toHandleRoomEventManage">7 ( 20/15 )</el-radio><br>
                        <el-radio v-model="homeLevelRadio" label="8" border size="mini" @change="toHandleRoomEventManage">8 ( 22/11 )</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 这里放的是每个主页面下的子页面  结束 -->

        <!-- 房间详细信息弹出框  开始 -->
        <el-dialog
          title="房间详细信息"
          :visible.sync="homeDetailVisible"
          width="700px"
          :before-close="homeDetailInfoClick">
          <div class="homeDetailInfoBox">
               <div class="tab">
                   <el-tabs v-model="homeInfoActiveName" @tab-click="handleClick">
                     <el-tab-pane label="在住信息" name="inRoomInfo">在住信息</el-tab-pane>
                     <el-tab-pane label="远期房态" name="futureRoomInfo">远期房态</el-tab-pane>
                     <el-tab-pane label="订单日志" name="orderLog">订单日志</el-tab-pane>
                     <el-tab-pane label="房价明细" name="roomPriceInfo">房价明细</el-tab-pane>
                   </el-tabs>
               </div>
               <div class="infoBox">
                   <div class="inRoomInfo" v-show="homeInfoActiveName == 'inRoomInfo' ">
                       <div class="iRI_customInfo clearfix">
                           <div class="iRI_cI_leftBox">
                                <div class="iRI_cI_lB_avatar">
                                  <el-avatar 
                                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
                                  </el-avatar>
                                </div>
                                <div class="iRI_cI_lB_info">
                                    <p><i class="iconfont icon-ruzhurenmingzi"> 姓 名:</i><span class="name"></span></p>
                                    <p><i class="iconfont icon-ruzhurenmingzi"> 客 源:</i><span class="source"></span></p>
                                    <p><i class="iconfont icon-ruzhurenmingzi"> 入住标准:</i><span class="method"></span></p>
                                </div>
                           </div>
                           <div class="iRI_cI_rightBox">
                               
                           </div>
                       </div>
                       <div class="iRI_operator">
                           <span style="display:inline-block;position:relative;margin-left:35px;">
                               <el-button size="mini">
                                  <i class="iconfont icon-jiesuan"></i>
                                  结 算
                               </el-button>
                           </span>
                           <span style="display: inline-block;position:relative;margin-left:35px;">
                               <el-button size="mini">
                                  <i class="iconfont icon-tuifangfuwu"></i>
                                  退 房
                               </el-button>
                           </span>
                           <span style="display: inline-block;position:relative;margin-left:35px;">
                               <el-button size="mini">
                                  <i class="iconfont icon-huanfang"></i>
                                  换 房
                               </el-button>
                           </span>
                           <span style="display: inline-block;position:relative;margin-left:35px;">
                               <el-button size="mini">
                                  <i class="iconfont icon-czIcon-dirtyRoom"></i>
                                  脏 房
                               </el-button>
                           </span>
                           <span style="display: inline-block;position:relative;margin-left:35px;">
                               <el-button size="mini">
                                  <i class="iconfont icon-xuzhu"></i>
                                  续 住
                               </el-button>
                           </span>
                       </div>
                   </div>
                   <div class="futureRoomInfo scrollBar" v-show="homeInfoActiveName == 'futureRoomInfo' ">
                       <el-calendar v-model="futureCalendarValue">
                        <template
                          slot="dateCell"
                          slot-scope="{date, data}">
                          <p :class="data.isSelected ? 'is-selected' : ''" style="position:relative;">
                            {{  data.day.split('-')[1]+'-'+ data.day.split('-')[2] }}
                            <i class="iconfont icon-xuanzhong" v-if="data.isSelected"></i>
                          </p>
                        </template>
                       </el-calendar>
                   </div>
                   <div class="orderLog scrollBar" v-show="homeInfoActiveName == 'orderLog' ">
                       <el-timeline>
                         <el-timeline-item v-for="(item,index) in orderLogInfoArray" 
                            :timestamp="item.timestamp" 
                            placement="top" 
                            :icon="item.icon"
                            :key="index"
                         >
                           <el-card>
                             <h4>{{item.operator}}</h4>
                             <p>{{item.detailInfo}}</p>
                           </el-card>
                         </el-timeline-item>
                       </el-timeline>
                   </div>
                   <div class="roomPriceInfo" v-show="homeInfoActiveName == 'roomPriceInfo' ">
                       <h1>房价明细</h1>
                   </div>
               </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="homeDetailVisible = false">取 消</el-button>
            <el-button type="primary" @click="homeDetailVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 房间详细信息弹出框  结束 -->
   </div>
</template>

<script>
import topNav from "./topNav.vue";
import leftNav from "./leftNav.vue";
    export default {
        name:"indexPage",
        data(){
            return {
                customSource : ['散客', '团队', '预定'], // 
                checkedSource: [],
                customSourceIsIndeterminate: true,
                checkCustomAll:1,
                moveIntoMethod : ['美团', '艺龙', '携程','闪住','其他'],
                checkedMoveIntoMethod: [],
                moveIntoMethodIsIndeterminate: true,
                checkAllMoveIntoMethod:1,
                moveIntoStation : ['全天房', '特价房', '钟点房'],
                checkedMoveIntoStation: [],
                moveIntoStationIsIndeterminate: true,
                checkAllMoveIntoStation:1,
                homeSearchInput:'', // 房间检索输入框的值
                homeStatusCheckList:[], // 房间状态复选框数组
                homeTypeCheckList:[], // 房间类型复选框数组,
                homeLevelRadio:'', // 所选择的楼层数，默认:第五层
                homeDetailVisible: false, // 房间具体信息弹出框是否显示标志
                homeInfoActiveName: 'inRoomInfo', // 房间详细信息 Tab 项
                futureCalendarValue: new Date(), // 日历组件的当前日期
                orderLogInfoArray:[ // 房间详细信息之订单日志所需的渲染数据，
                                    // 后期根据 Ajax 请求回来的数据进行渲染
                    {
                        "timestamp":"2018/4/12",
                        "icon":"el-icon-date",
                        "operator":"提交订单",
                        "detailInfo":"王小虎 提交于 2018/4/12 20:46"
                    },
                    {
                        "timestamp":"2018/4/22",
                        "icon":"el-icon-date",
                        "operator":"来店入住",
                        "detailInfo":"王小虎 提交于 2018/4/22 10:46"
                    }
                ],

            }
        },
        mounted(){
          this.toHandleRoomEventManage();
        },
        components:{
            topNav,
            leftNav
        },
        methods:{
            handleCustomCheckAllChange(val) {
               this.checkedSource = val ? this.customSource : [];
               this.customSourceIsIndeterminate = false;
               this.toHandleRoomEventManage();
            },
            handleMoveIntoMethodCheckAllChange(val) {
               this.checkedMoveIntoMethod = val ? this.moveIntoMethod : [];
               this.moveIntoMethodIsIndeterminate = false;
               this.toHandleRoomEventManage();
            },
            handleMoveIntoStationCheckAllChange(val) {
               this.checkedMoveIntoStation = val ? this.moveIntoStation : [];
               this.moveIntoStationIsIndeterminate = false;
               this.toHandleRoomEventManage();
            },
            homeSearchClickEvent(){ // 房间检索的点击事件
                let that = this;
                if (that.homeSearchInput==''){
                    return;
                }
                // 将所有搜索的条件置为 空
                this.checkedSource = [];
                this.checkedMoveIntoMethod = [];
                this.checkedMoveIntoStation = [];
                this.homeStatusCheckList = [];
                this.homeTypeCheckList = [];
                this.homeLevelRadio = '';
                // 根据输入的条件搜索房间
                this.toHandleRoomEventManage({roomNum:that.homeSearchInput});
            },
            homeDetailInfoClick(done) { // 房间具体信息弹出框的 "关闭" 事件
              this.$confirm('确认关闭？')
                .then(_ => {
                  done();
                })
                .catch(_ => {});
            },
            showHomeDetailInfo(roomIndex){ // 展示房间具体信息 的 点击事件
                let that = this;
                console.log(roomIndex);
                // 根据所传入的 roomIndex 到数据库中检索数据
                // Ajax 代码...
                that.homeDetailVisible = true;
            },
            handleClick(tab, event) { // 
              console.log(tab);
            },
            //  Ajax 获取数据的方法 开始
            
              // 处理 房务管理页面 数据初始化及后续查询的事务 开始
            toHandleRoomEventManage(searchObj = {} ){

              let that = this;

               console.log(searchObj.roomNum);
               let searchField = {};

               
               if (this.checkedSource.length > 0){
                 searchField['checkedSource'] = [...this.checkedSource];
               }

               if (this.checkedMoveIntoMethod.length > 0){
                 searchField['checkedMoveIntoMethod'] = [...this.checkedMoveIntoMethod];
               }

               if (this.checkedMoveIntoStation.length > 0){
                 searchField['checkedMoveIntoStation'] = [...this.checkedMoveIntoStation];
               }

               if (this.homeStatusCheckList.length > 0){
                 searchField['homeStatusCheckList'] = [...this.homeStatusCheckList];
               }

               if (this.homeTypeCheckList.length > 0){
                 searchField['homeTypeCheckList'] = [...this.homeTypeCheckList];
               }

               if (this.homeLevelRadio != '') {
                 searchField['homeLevel'] = this.homeLevelRadio;
               }

               if (searchObj.roomNum) {
                 searchField["roomNum"] = searchObj.roomNum;
               }

               console.log(searchField);

               that.$axios({
                  method: 'GET',
                  url: '/custom/getAllRoomInfo',
                  data:{
                    searchObj: searchField
                  }
               })
            },
              // 处理 房务管理页面 数据初始化及后续查询的事务 结束
            
              // 处理 房间具体信息弹出框 开始
            toGetCustomInfo(searchField){ // 根据 相应的字段 获取客户的详细信息
            
            },
            byRoomNumGetRoomFutureInfo(orderId){ // 根据 订单ID 获取房间的远期信息
              
            },
            toGetRoomInfo(searchField){ // 根据 相应的字段 获取房间的详细信息

            }
              // 处理房间具体信息弹出框 开始
 
            //  Ajax 获取数据的方法 结束
        }
    }
</script>

<style scoped>
#indexPage {
    width: 100%;
    height: 100%;
    min-width: 1240px;
}
.topNav {
    height: 60px;
    z-index: 999;
    overflow-y: auto;
    position: relative;
}
.leftNav {
    top: -60px;
    width: 145px;
    height: 100%;
    z-index: 999;
    position: relative;
}
.mainContent {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    min-width: 1240px;
    padding-top: 68px;
    padding-left: 155px;
    background-color: #f2f2f2;
}
.roomBox {
    top: 0px;
    left: 0px;
    width: 78%;
    height: 100%;
    border: 1px solid rgba(76,109,232,.2);
    position: relative;
    min-width: 815px;
    overflow-y: auto;
    background-color: #fff;
}
.roomBox .topBox {
    width: 100%;
    height: 60px;
    z-index: 999;
    overflow-y: auto;
    position: absolute;
    border-bottom: 1px solid rgba(76,109,232,.2);
}
.mainContent .topBox .checkBox {
    float: left;
    width: 30%;
    height: 100%;
    padding-left: 15px;
}
.mainContent .topBox .checkBox:nth-child(2){
    width: 40%;
}
.roomBox .allRooms {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: auto;
    padding-top: 60px;
}
.allRooms .roomLevel {
    width: 100%;
    height: auto;
    padding: 8px 0px;
}
.allRooms .roomLevel .rL_title {
    
}
.allRooms .roomLevel .rL_title span {
    display: inline-block;
    width: 45px;
    height: 25px;
    background-color: rgba(76,106,232,.8);
    line-height: 25px;
    text-align: center;
    color: #fff;
    font-weight: 700;
}
.allRooms .roomLevel .rL_content {

}
.allRooms .rL_content .room {
    color: #fff;
    float: left;
    width: 140px;
    cursor: pointer;
    height: 120px;
    margin: 5px 22px;
    text-align: center;
    box-shadow: 4px 4px 10px 0px rgba(100,100,100,.6);
    margin-right: 0px;
    border-radius: 8px;
    background-color: rgba(76,109,232,.8);
}
.allRooms .rL_content .room_title {
    display: inline-block;
    margin-top: 5px;
}
.allRooms .rL_content .iconfont {
    display: block;
    font-size: 55px;
}
.searchBox {
    top: -100%;
    right: -78%;
    width: 21.8%;
    min-width: 244px;
    height: 100%;
    border: 1px solid rgba(76,109,232,.8);
    position: relative;
    overflow-y: auto;
}
.searchBox>div {
    width: 100%;
    height: 100px;
}
.searchBox .sB_homeLevel {
    height: auto;
}
.searchBox .sB_homeTitle {
    color: #fff;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: rgba(76,109,232,.8);
}
.searchBox .sB_homeSearch {
    
}
.searchBox .sB_homeSearch p {
    color: #999;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 8px;
}
.searchBox .sB_homeSearch .iD_searchIcon {
    width: 30px;
    height: 30px;
    display: block;
    background-color: rgba(76,109,232,.8);
}
.searchBox .sB_hS_title {
    color: #999;
    width: 88%;
    margin: 0px auto;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(76,109,232,.8);
}
.searchBox .sB_hS_chckeds{
    width: 88%;
    height: 60px;
    margin: 0px auto;
    overflow-y: auto;
}
.searchBox .sB_homeLevel .sB_hS_chckeds{
    height: auto;
    margin-top: 8px;
}
.homeDetailInfoBox {
    width: 100%;
    height: 300px;
}
.homeDetailInfoBox .infoBox {
    width: 100%;
    height: 275px;
    position: relative;
}
.homeDetailInfoBox .infoBox>div {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
}
.homeDetailInfoBox .inRoomInfo {
  
}
.homeDetailInfoBox .inRoomInfo .iRI_customInfo {
    top: -5px;
    width: 100%;
    height: 230px;
    position: relative;
    border-bottom: 1px solid rgba(76,109,232,.4);
}
.homeDetailInfoBox .iRI_customInfo .iRI_cI_leftBox {
    width: 160px;
    height: 100%;
    border-right: 1px solid rgba(76,109,232,.4);
}
.homeDetailInfoBox .iRI_customInfo .iRI_cI_rightBox {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    padding-left: 160px;
}
.homeDetailInfoBox .iRI_cI_leftBox .iRI_cI_lB_info {
    padding-left: 5px;
}
#indexPage .homeDetailInfoBox .iRI_cI_lB_info .iconfont {
    font-size: 16px;
}
.homeDetailInfoBox .inRoomInfo .iRI_operator {
    width: 100%;
    height: 45px;
    border-top: 0px;
    margin-top: 5px;
    line-height: 45px;
}

.homeDetailInfoBox .futureRoomInfo {
    overflow-y: auto;
}
#indexPage .homeDetailInfoBox .futureRoomInfo i.iconfont {
    font-size: 35px;
    padding-bottom: -9px;
    position: absolute;
    top: 21px;
    left: 15px;
 }
.homeDetailInfoBox .orderLog {
    overflow-y: auto;
}
.homeDetailInfoBox .roomPriceInfo {
    
}
</style>
<style>
#indexPage .inputDiv {
    width: 75%;
    height: 20px;
    margin: 0 auto;
}
#indexPage .inputDiv .el-input__inner {
    height: 30px;
    line-height: 30px;
    border-right: 0px;
}
#indexPage .inputDiv .el-input .el-input__inner {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
}
#indexPage .inputDiv .el-input.is-active .el-input__inner,
#indexPage .inputDiv .el-input__inner:focus {
    outline: 0;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-color: rgba(76,109,232,.8);
}
#indexPage .inputDiv .el-input__suffix {
    display: none;
}
#indexPage .inputDiv .el-button {
    padding: 0px;
    padding-left: 12px;
    box-shadow: none;
}
#indexPage .inputDiv .el-input-group__append {
   color: #fff;
   border: 1px solid rgba(76,109,232,.8);
   background-color: rgba(76,109,232,.8);
}
#indexPage .el-checkbox__inner:hover {
    border-color: rgba(76,109,232,.8);
}
#indexPage .el-checkbox__input.is-checked .el-checkbox__inner, 
#indexPage .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgba(76,109,232,.8);
}
#indexPage .el-checkbox__input.is-checked+.el-checkbox__label {
    color: rgba(76,109,232,.8);
}

#indexPage .el-checkbox {
    margin-right: 22px;
}
#indexPage .sB_homeLevel .el-radio.is-bordered.is-checked{
    border-color: rgba(76,109,232,.8);
}
#indexPage .sB_homeLevel .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#indexPage .sB_homeLevel .el-radio__input.is-checked+.el-radio__label {
    color: rgba(76,109,232,.8);
}
#indexPage .el-dialog__headerbtn:focus .el-dialog__close, 
#indexPage .el-dialog__headerbtn:hover .el-dialog__close {
    color: rgba(76,109,232,.8);
}
#indexPage .el-dialog__title {
    color: rgba(76,109,232,.8);
}
#indexPage .el-dialog__body {
    padding-top: 0px;
}
#indexPage .el-dialog {
    border-radius: 8px;
}
#indexPage .el-button--primary,
#indexPage .el-button--primary:focus,
#indexPage .el-button--primary:hover {
    background: rgba(76,109,232,.8)!important;
    border-color: rgba(76,109,232,.8)!important;
}
#indexPage .el-button:active {
    color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
    outline: 0;
}
#indexPage .el-button:focus,
#indexPage .el-button:hover {
    color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
    background-color: rgba(76,109,232,.2);
}
#indexPage .el-tabs__item:hover,
#indexPage .el-tabs__item.is-active,
#indexPage .el-tabs__active-bar
{
    color: rgba(76,109,232,.8);
}
#indexPage .el-tabs__active-bar{
    background-color: rgba(76,109,232,.8);
}
#indexPage .el-tabs__content{
    display: none;
}
#indexPage .el-dialog__header {
    padding: 15px 20px 0px;
}
#indexPage .homeDetailInfoBox .iRI_operator .el-button--mini, .el-button--mini.is-round {
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
}
#indexPage .homeDetailInfoBox i.iconfont{
    font-size: 22px;
    padding-bottom: -9px;
    position: relative;
    top: 3px;
    left: -2px;
}
#indexPage .el-dialog__footer {
    padding: 15px 20px 10px;
}
#indexPage .iRI_cI_leftBox .el-avatar {
    width: 90px;
    height: 90px;
    margin-top: 10px;
    margin-left: 35px;
}
#indexPage .el-calendar-table td.is-selected {
    background-color: rgba(76,109,232,.1);
}
#indexPage .el-backtop, .el-calendar-table td.is-today {
    color: rgba(76,109,232,.8)!important;
}
#indexPage .is-selected {
    color: rgba(76,109,232,.8);
  }
#indexPage .el-timeline-item__wrapper {
    width: 99%;
}
#indexPage .orderLog .el-timeline-item__tail {
    border-left: 2px solid rgba(76,109,232,.8);
}
#indexPage .orderLog .el-timeline-item__node {
    background-color: rgba(76,109,232,.8); 
}
</style>