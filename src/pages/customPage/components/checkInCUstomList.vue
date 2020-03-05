<template>
	<div id="checkInCustomList">
		<div id="top-box">
			<div class="t-b-itemBox clearfix">
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">姓名 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入客户名"
                          v-model="inputCustomName"
                          clearable>
                        </el-input>
					</div>
				</div>
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">电话 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入电话号码"
                          v-model="phoneNumber"
                          clearable>
                        </el-input>
					</div>
				</div>
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房号 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入房号"
                          v-model="roomNumber"
                          clearable>
                        </el-input>
					</div>
				</div>
			</div>
			<div class="t-b-itemBox clearfix">
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">入住时间 : </span>
					<div class="rangeBox">
					   <el-date-picker
                         v-model="searchTime"
                         type="daterange"
                         range-separator="至"
                         start-placeholder="开始日期"
                         end-placeholder="结束日期">
                       </el-date-picker>
                    </div>
				</div>

				<div class="t-b-item" style="margin-left: 180px;">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房间类型 : </span>
					<div class="inputItem">
						<el-select v-model="roomType" clearable placeholder="请选择房间类型">
                          <el-option
                            v-for="item in roomTypeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
					</div>
				</div>
			</div>
		</div>
		<div id="bottom-box">
			<div class="contentBox scrollBar">
			   <el-table
                 :data="tableData"
                 style="width: 100%;"
                 :default-sort="{prop: 'consumptionDate', order: 'descending'}"
                 >
                 <el-table-column
                   label="房号"
                   width="100"
                   prop="roomNum"
                   >
                   <template slot-scope="scope">
                     <span>{{ scope.row.roomNum }}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="姓名"
                   width="110"
                   sortable
                   prop="customName"
                   >
                   <template slot-scope="scope">
                     <el-tooltip 
                        class="item" 
                        effect="dark" 
                        content="点击查看订单详情" 
                        placement="top-start"
                     >
                       <el-button size="mini">{{scope.row.customName}}</el-button>
                     </el-tooltip>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="电话号码"
                   width="125">
                   <template slot-scope="scope">
                     <span>{{ scope.row.phoneNumber }}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="证件号"
                   width="180">
                   <template slot-scope="scope">
                     <span>{{ scope.row.identifierNum }}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="地址"
                   width="320">
                   <template slot-scope="scope">
                     <span>{{ scope.row.address }}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="入住时间"
                   width="120">
                   <template slot-scope="scope">
                     <span>{{ scope.row.checkInDate}}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="预离时间"
                   width="120">
                   <template slot-scope="scope">
                     <span>{{ scope.row.checkOutDate }}</span>
                   </template>
                 </el-table-column>

                 <el-table-column
                   label="备注"
                   width="180">
                   <template slot-scope="scope">
                     <span>{{ scope.row.orderNote }}</span>
                   </template>
                 </el-table-column>

               </el-table>
			</div>
		</div>
		<div class="paginationBox">
		   <el-pagination
             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             :current-page="currentPage"
             :page-sizes="[20, 30, 40, 50]"
             :page-size="20"
             layout="total, sizes, prev, pager, next, jumper"
             :total="320">
           </el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'checkInCustomList',
		data(){
			return {
               currentPage: 1, // 当前页面数
               inputCustomName: '', // 客户名
               phoneNumber: '', // 电话号码
               roomNumber: '', // 房间号
               searchTime: '', // 搜索的时间段
               roomType: '', // 房间类型
               roomTypeOptions: [ // 房间类型
                  {
                  	 label: '大床房',
                  	 value: '大床房',
                  },
                  {
                  	 label: '情侣房',
                  	 value: '情侣房',
                  },
                  {
                  	 label: '单人房',
                  	 value: '单人房',
                  },
                  {
                  	 label: '特价房',
                  	 value: '特价房',
                  },
                  {
                  	 label: '总统房',
                  	 value: '总统房',
                  },
                  {
                  	 label: '双人房',
                  	 value: '双人房',
                  },
               ],
               tableData: [
				   {
				   	 roomNum: '509',
				   	 customName: '王大虎',
				   	 orderId:'123456789',
				   	 phoneNumber: '12345678901',
				   	 identifierNum: '4425154332718281855',
				   	 address: '广东省潮州市饶平县三饶镇官田村月明楼围50号',
                     checkInDate: '2016-05-02',
                     checkOutDate: '2020-02-13',
                     orderNote: '这是订单备注...',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-05-04',
                     customName: '王二虎',
                     accountType:'闪住',
                     accountDetailInfo:'这是业务详情',
                     playType: '支付宝',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-05-01',
                     customName: '王三虎',
                     accountType:'艺龙',
                     accountDetailInfo:'这是业务详情',
                     playType: '现金',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-05-03',
                     customName: '王四虎',
                     accountType:'携程',
                     accountDetailInfo:'这是业务详情',
                     playType: '支付宝',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   },
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-06-02',
                     customName: '王五虎',
                     accountType:'百度',
                     accountDetailInfo:'这是业务详情',
                     playType: '银行卡',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-06-04',
                     customName: '王六虎',
                     accountType:'高德',
                     accountDetailInfo:'这是业务详情',
                     playType: '微信',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-07-01',
                     customName: '王七虎',
                     accountType:'美团',
                     accountDetailInfo:'这是业务详情',
                     playType: '微信',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-07-03',
                     customName: '王八虎',
                     accountType:'携程',
                     accountDetailInfo:'这是业务详情',
                     playType: '支付宝',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   },
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-08-02',
                     customName: '王九虎',
                     accountType:'其他',
                     accountDetailInfo:'这是业务详情',
                     playType: '银行卡',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-08-04',
                     customName: '王十虎',
                     accountType:'其他',
                     accountDetailInfo:'这是业务详情',
                     playType: '现金',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-07-11',
                     customName: '王中虎',
                     accountType:'美团',
                     accountDetailInfo:'这是业务详情',
                     playType: '微信',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, 
                   {
                   	 orderId:'123456789',
                     consumptionDate: '2016-07-13',
                     customName: '王小虎',
                     accountType:'艺龙',
                     accountDetailInfo:'这是业务详情',
                     playType: '支付宝',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }
                ],
			}
		},
		methods: {
           handleSizeChange(){

           },
           handleCurrentChange(){

           }
		},
		components:{

		}
	}
</script>

<style scoped>
#checkInCustomList {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
#top-box {
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100px;
   z-index: 999;
   position: relative;
}
.t-b-itemBox {
   width: 100%;
   height: 50px;
   padding: 0px 15px;
   line-height: 50px;
}
.t-b-item {
   top: 10px;
   float: left;
   width: 260px;
   height: 30px;
   position: relative;
   line-height: 30px;
   margin-right: 20px;
}
.t-b-item span {
   width: 80px;
   height: 30px;
   z-index: 999;
   position: relative;
   line-height: 30px;
}
.t-b-item .inputItem {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 30px;
	position: absolute;
	line-height: 30px;
	padding-left: 80px;
}
.t-b-item .rangeBox {
	top: 0px;
	left: 0px;
	height: 30px;
	position: absolute;
	line-height: 30px;
    padding-left: 80px;
}
#bottom-box {
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   position: absolute;
   overflow-y: auto;
   padding-top: 100px;
   padding-bottom: 60px;
}
.contentBox {
   width: 100%;
   height: 100%;
   overflow-y: auto;
}
.paginationBox {
    left: 0px;
    width: 100%;
    height: 50px;
    bottom: 5px;
    position: absolute;
    padding-top: 10px;
    padding-left: 35px; 
}
</style>

<style>
#checkInCustomList .el-pagination {
    padding-top: 8px;
	padding-left: 40px;
}
#checkInCustomList .el-pagination__sizes .el-input .el-input__inner:hover,
#checkInCustomList .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#checkInCustomList .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#checkInCustomList .el-pager li.active,
#checkInCustomList .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#checkInCustomList .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#checkInCustomList .el-input__suffix {
    line-height: 25px;
}
#checkInCustomList .el-date-editor .el-range-separator,
#checkInCustomList .el-input__icon {
 	line-height: 25px;
}
#checkInCustomList .el-select .el-input__inner:focus,
#checkInCustomList .el-input.is-active .el-input__inner, 
#checkInCustomList .el-input__inner:focus,
#checkInCustomList .el-range-editor.is-active, 
#checkInCustomList .el-range-editor.is-active:hover
{
	border-color: rgba(76,109,232,.8);
}
#checkInCustomList .el-button:focus,
#checkInCustomList .el-button:hover {
    color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.2);
    background-color: rgba(76,109,232,.2);
}
</style>