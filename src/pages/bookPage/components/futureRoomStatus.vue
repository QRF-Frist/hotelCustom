<template>
	<div id="futureRoomStatus">
		<div class="tabBox">
			 <el-tabs v-model="activeName" @tab-click="handleClick">
               <el-tab-pane label="房态日历" name="homeStatusTable"></el-tab-pane>
               <el-tab-pane label="房型汇总表" name="homeTypeTable"></el-tab-pane>
             </el-tabs>
		</div>
		<div class="content">
			<div class="homeStatusTableBox" v-if="activeName=='homeStatusTable'">
				<div class="hSTB_checkedDate">
					<el-date-picker
                      v-model="checkedDate"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions">
                    </el-date-picker>
				</div>
				<div class="hSTB_detailInfo">
					<div class="hSTB_dI_content scrollBar">
						<!-- 依据数据循环生成  开始 -->
						<div 
						   class="hSTB_dI_c_item" 
						   v-for="(item,index) in roomStatusDataArray"
						   :key="index"
						   @click="toShowRoomDetailInfoEvent(item.date)"
						   >
							<div class="hSTB_dI_c_itemContent">
								<div class="weekData">
									<span class="day FL">
										{{item.date.split('-')[2]}} 号
									</span>
									<span class="week FR">
										{{item.dayOfWeek}}
									</span>
								</div>
								<div class="inHomeRate" style="margin-bottom: 0px;">
									<span class="FL">
										可售数
									</span>
									<span class="FR">
										预定出租率
									</span>
								</div>
								<div class="inHomeRateData">
									<span class="FL" style="color: rgba(76,109,232,.8);">
										{{item.available}} 间
									</span>
									<span class="FR" style="color: rgba(76,109,232,.8);">
										{{item.saleRate}}
									</span>
								</div>
								<div 
								   class="emptyHomeNum"
                                   style="font-weight: 700; color: #999;margin-bottom: 0px;"
								   >
									在住 <span style="color: rgba(76,109,232,.8);"> {{item.inRoomNum}} </span> 间
								</div>
								<div class="eHNDetailData">
									<span>预离 {{item.bookOut}} 间</span> | <span>预抵 {{item.comeHere}} 间</span>
								</div>
								<div class="remainingRoomNum">
									<span>剩余房间 </span>&nbsp;&nbsp;&nbsp;
									<span style="color: rgba(76,109,232,.8);"> {{item.remaining}} </span>&nbsp;&nbsp;&nbsp;
									<span> 间</span>
								</div>
								<div 
								     class="toSeeDetailInfo" 
								     @click="toShowRoomDetailInfoEvent(item.date)"
								>
									查看详情
							    </div>
							</div>
						</div>
						<!-- 依据数据循环生成  结束 -->
					</div>
				</div>
			</div>
			<div class="homeTypeTableBox" v-if="activeName=='homeTypeTable'">
				<div class="hTTB_topBox">
					<div>
						<span 
						   class="textColor textSize textWeight"
						>
						   查询类型 : 	
						</span>
						<div style="padding-left: 100px;">
							 <el-radio v-model="saerchType" label="1" border size="mini">剩余房量</el-radio>
                             <el-radio v-model="saerchType" label="2" border size="mini">预订出租率</el-radio>
                             <el-radio v-model="saerchType" label="3" border size="mini">预期客房收入</el-radio>
                             <el-radio v-model="saerchType" label="4" border size="mini">可售数</el-radio>
                             <el-radio v-model="saerchType" label="5" border size="mini">预抵数</el-radio>
                             <el-radio v-model="saerchType" label="6" border size="mini">预离数</el-radio>
						</div>
					</div>
					<div>
						<span 
						   class="textColor textSize textWeight"
						>
						   时间筛选 : 	
						</span>
						<div style="padding-left: 100px;">
							<el-radio v-model="saerchByDate" label="1" border size="mini">这周</el-radio>
                             <el-radio v-model="saerchByDate" label="2" border size="mini">上一周</el-radio>
                             <el-radio v-model="saerchByDate" label="3" border size="mini"> 30 天</el-radio>
						</div>
					</div>
				</div>
				<div class="hTTB_bottomBox">
					<div class="hTTB_bB_content">
						
					</div>
				</div>
			</div>
		</div>


		<!-- 每日房态的详细信息  开始 -->
		<div class="roomStatusDetailInfo">
		   <el-dialog
             title="房态详细信息"
             :visible.sync="roomStatusDetailInfoVisible"
           >

             <div class="rSDI_mainContent">
             	<div class="rSDI_mC_line">
             		<div class="line_circleBox">
             			
             		</div>
             		<div class="line_line">
             			
             		</div>
             	</div>
             	<div class="rSDI_mC_content scrollBar">
             		<div class="dateTime">2020-02-08</div>
             		<div class="orderNum">
             			预订订单： <span> 0 </span>
             		</div>
             		<div class="roomRemainingNum">
             			剩余房量： <span> 142 </span>
             		</div>
             		<div class="roomNumBox">
             			双人房 : <span> 32</span>
             		</div>
             		<div class="roomNumBox">
             			单人房 : <span> 22</span>
             		</div>
             		<div class="roomNumBox">
             			大床房 : <span> 32</span>
             		</div>
             		<div class="roomNumBox">
             			情侣房 : <span> 22</span>
             		</div>
             		<div class="roomNumBox">
             			总统房 : <span> 32</span>
             		</div>
             		<div class="roomNumBox">
             			特价房 : <span> 22</span>
             		</div>
             	</div>
             </div>

             <span slot="footer" class="dialog-footer">
               <el-button @click="roomStatusDetailInfoVisible = false">取 消</el-button>
               <el-button type="primary" @click="roomStatusDetailInfoVisible = false">确 定</el-button>
             </span>
           </el-dialog>
        </div>
        <!-- 每日房态的详细信息  结束 -->
	</div>
</template>

<script>
	export default {
		name : "futureRoomStatus",
		data(){
			return {
				activeName: 'homeStatusTable', // 用户当前点击的 tab
				checkedDate: '', // 用户选择的日期
				roomStatusDetailInfoVisible: false, // 房间详细信息盒子是否展示的标志
				saerchType: '', // 房型汇总表 之 用户所选择的查询类型
				saerchByDate: '', // 房型汇总表 之 用户所选择的 "事件筛选"
				pickerOptions: {
                  shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近一个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                      picker.$emit('pick', [start, end]);
                    }
                  }, {
                    text: '最近三个月',
                    onClick(picker) {
                      const end = new Date();
                      const start = new Date();
                      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                      picker.$emit('pick', [start, end]);
                    }
                  }]
                },
                roomStatusDataArray:[
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	},
                	{
                		date:'2019-02-08',
                		dayOfWeek: '星期六',
                		available: 143,
                		saleRate: '41.96%',
                		inRoomNum: 124,
                		bookOut: 69,
                		comeHere: 5,
                		remaining: 83
                	}
                ]
			}
		},
		methods:{
           toShowRoomDetailInfoEvent(dateTime){
           		let that = this;
           		that.roomStatusDetailInfoVisible = true;
           }
		},
		components:{

		},
		mounted(){

		}
	}
</script>

<style scoped>
#futureRoomStatus {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	padding: 15px 20px;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.tabBox {
	height: 55px;
	position: relative;
	text-align: center;
}
.content {
	top: -55px;
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 45px;
}
.content .homeStatusTableBox,
.content .homeTypeTableBox
{
	width: 100%;
	height: 100%;
	position: relative;
}
.hSTB_checkedDate {
	width: 100%;
	height: 50px;
	z-index: 999;
	position: absolute;
	text-align: center;
}
.hSTB_detailInfo {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: relative;
	padding-top: 50px;
}
.hSTB_dI_content {
	width: 100%;
	height: 100%;
	position: relative;
    overflow-y: auto;
    padding-top: 20px;
}
.hSTB_dI_c_item {
	float: left;
	width: 228px;
	height: 300px;
	margin-right: 15px;
	margin-bottom: 50px;
}
.hSTB_dI_c_itemContent {
	width: 100%;
	height: 100%;
	border: 1px solid rgba(76,109,232,.8);
	padding: 15px 10px;
	position: relative;
	border-radius: 8px;
}
.hSTB_dI_c_item .hSTB_dI_c_itemContent .toSeeDetailInfo {
	left: 30px;
	color: #fff;
	width: 110px;
	height: 30px;
	bottom: -30px;
	cursor: pointer;
	position: absolute;
	text-align: center;
	font-weight: 700;
	line-height: 30px;
	border-radius: 5px;
	background-color: rgba(76,109,232,1);
}
.hSTB_dI_c_itemContent > div {
	height: 25px;
	cursor: pointer;
	margin-bottom: 15px;
}
.hSTB_dI_c_itemContent .weekData span,
.hSTB_dI_c_itemContent .inHomeRate span,
.hSTB_dI_c_itemContent .inHomeRateData span,
.hSTB_dI_c_itemContent .emptyHomeNum span,
.hSTB_dI_c_itemContent .remainingRoomNum span
{
	color: #999;
	display: inline-block;
	font-weight: 700;
}
.hSTB_dI_c_itemContent .eHNDetailData {
	color: #999;
	font-size: 14px;
}
.hSTB_dI_c_itemContent .remainingRoomNum {
	margin-top: 40px;
}
.rSDI_mainContent {
	width: 100%;
	height: 100%;
	position: relative;
}
.rSDI_mC_line {
	top: 0px;
	left: 0px;
	width: 10px;
	height: 100%;
	z-index: 999;
	position: absolute;
}
.line_circleBox {
	top: 0px;
	left: 1px;
	width: 9px;
	height: 9px;
	border: 1px solid rgba(76,109,232,.8);
	z-index: 999;
	position: absolute;
	border-radius: 50%;
}
.line_line {
	top: 8px;
	left: 5px;
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: rgba(76,109,232,.8);
}
.rSDI_mC_content {
	width: 100%;
	height: 260px;
	position: relative;
	overflow-y: auto;
	padding-left: 15px;
}
.rSDI_mC_content .dateTime {
	color: rgba(76,109,232,.8);
	font-size: 16px;
	font-weight: 700;
}
.rSDI_mC_content .orderNum,
.rSDI_mC_content .roomRemainingNum
{
	color: #fff;
	width: 150px;
	height: 35px;
	font-size: 16px;
	margin-top: 15px;
	font-weight: 700;
    line-height: 35px;
    padding-left: 15px;
	background-color: rgba(76,109,232,.8);
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}
.rSDI_mC_content .roomNumBox {
	float: left;
	color: rgba(76,109,232,.8);
	width: 50%;
	height: 25px;
	font-size: 16px;
	margin-top: 15px;
	font-weight: 700;
	line-height: 25px;
	padding-left: 15px;
}
.homeTypeTableBox .hTTB_topBox {
	top: 0px;
	left: 0px;
	width: 100%;
    height: 100px;
    z-index: 999;
    position: absolute;
}
.homeTypeTableBox .hTTB_topBox > div {
	width: 100%;
	height: 40px;
	position: relative;
	padding-left: 15px;
	line-height: 40px;
	margin-bottom: 10px;
}
.hTTB_topBox > div > div {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
}
.homeTypeTableBox .hTTB_bottomBox {
	top: 0px;
	left: 0px;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 110px;
}
.hTTB_bB_content {
	width: 100%;
	height: 100%;
	border: 1px dashed rgba(76,109,232,.8);
}
</style>

<style>
#futureRoomStatus .tabBox .el-tabs__active-bar {
	background-color: #E4E7ED;
}
#futureRoomStatus .tabBox .el-tabs__nav {
	left: 43.5%;
}
#futureRoomStatus .el-tabs__item:hover,
#futureRoomStatus .el-tabs__item.is-active {
	color: rgba(76,109,232,.8);
}
#futureRoomStatus .el-range-editor.is-active,
#futureRoomStatus  .el-range-editor.is-active:hover {
	border-color: rgba(76,109,232,.8);
}
.el-picker-panel__shortcut:hover {
	color: rgba(76,109,232,.8);
}
#futureRoomStatus .hSTB_checkedDate .el-range-editor.el-input__inner {
	margin-top: 5px;
}
#futureRoomStatus .roomStatusDetailInfo .el-dialog {
	width: 560px;
	border-radius: 8px;
}
.roomStatusDetailInfo .el-dialog__headerbtn:focus .el-dialog__close,
.roomStatusDetailInfo .el-dialog__headerbtn:hover .el-dialog__close 
{
   color: rgba(76,109,232,.8);
}
#futureRoomStatus .el-button--primary,
#futureRoomStatus .el-button--primary:focus,
#futureRoomStatus .el-button--primary:hover {
    background: rgba(76,109,232,.8)!important;
    border-color: rgba(76,109,232,.8)!important;
}
#futureRoomStatus .el-button:active {
    color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
    outline: 0;
}
#futureRoomStatus.el-button:focus,
#futureRoomStatus .el-button:hover {
    color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
    background-color: rgba(76,109,232,.2);
} 
#futureRoomStatus .el-dialog__body {
	padding: 0px 20px;
}
#futureRoomStatus .el-radio--mini.is-bordered {
	margin-right: 12px;
}
#futureRoomStatus .hTTB_topBox .el-radio.is-bordered.is-checked{
    border-color: rgba(76,109,232,.8);
}
#futureRoomStatus .hTTB_topBox .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#futureRoomStatus .hTTB_topBox .el-radio__input.is-checked+.el-radio__label {
    color: rgba(76,109,232,.8);
}
</style>