<template>
	<div id="historyCustomAccount">
		<div class="search-box">
			<div class="search-box-itemBox clearfix">
				<div class="search-box-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">操作员 : </span>
			        <div class="input-box">
		                 <el-input
                              placeholder="请输入操作员姓名"
                              v-model="inputOperatorName"
                              clearable>
                         </el-input>
			        </div>
				</div>

				<div class="search-box-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">操作时间 : </span>
			        <div class="data-range-box">
		                 <el-date-picker
                           v-model="operatorDate"
                           type="daterange"
                           range-separator="至"
                           start-placeholder="开始日期"
                           end-placeholder="结束日期">
                         </el-date-picker>
			        </div>
				</div>
			</div>
			
		</div>
		<div class="show-info-box">
			<div class="sIB_contentBox scrollBar">
				<el-table
                  :data="tableData"
                  style="width: 100%;"
                  :default-sort="{prop: 'bookDate', order: 'descending'}"
                  >
                  <el-table-column
                    fixed
                    label="预订日期"
                    width="140"
                    sortable
                    prop="bookDate"
                    >
                    <template slot-scope="scope">
                      <i class="el-icon-time" style="color: rgba(76,109,232,.8);"></i>
                      <span style="margin-left: 10px">{{ scope.row.bookDate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                     label="订单号" 
                     width="200" 
                     sortable
                     prop="orderId"
                  >

                  </el-table-column>

                  <el-table-column
                    label="客户"
                    width="100"
                    sortable
                    prop="name"
                    >
                    <template slot-scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="客户类型"
                    width="100"
                    sortable
                    prop="checkInType"
                    >
                    <template slot-scope="scope">
                      <span style="margin-left: 10px">{{ scope.row.checkInType }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="预定方式"
                    width="125">
                    <template slot-scope="scope">
                      <span>{{ scope.row.bookMethod }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="预抵时间"
                    width="125"
                    sortable
                    prop="comeTime"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.comeTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="预离时间"
                    width="140"
                    sortable
                    prop="outTime"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.outTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="房价"
                    width="100"
                    sortable
                    prop="roomPrice"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.roomPrice }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="押金"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{ scope.row.deposit }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="支付类型"
                    width="110">
                    <template slot-scope="scope">
                      <span>{{ scope.row.playType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="总消费"
                    width="125">
                    <template slot-scope="scope">
                      <span>{{ scope.row.totalPlayMoney }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="订单来源"
                    width="125">
                    <template slot-scope="scope">
                      <span>{{ scope.row.bookMethod }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                     label="备注" 
                     width="180"
                  >
                     <template slot-scope="scope">
                      <span>{{ scope.row.orderNote }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column 
                    fixed="right"
                    label="操作"
                    width="150"
                    >
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="toEditCustomInfo(scope.row.orderId)">详情</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="toDeleteCustomInfo(scope.row.orderId)">删除</el-button>
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
		name: 'inRoomCustomBalance',
		data(){
			return {
               inputOperatorName: '', // 操作员姓名
               operatorDate: '', // 操作时间
               tableData: [
				   {
				   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王大虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王小虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '519',
				   	 name: '王二虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '368',
                     deposit: '200', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王二虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王三虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王三虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王四虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王4虎',
                   },
                   {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王五虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王5虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王六虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王6虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王七虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王7虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王八虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王8虎',
                   },
                   {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王九虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王9虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王十虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王10虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王中虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王11虎',
                   }, {
                   	 bookDate: '2016-05-02',
				   	 orderId:'123456789',
				   	 roomNum: '518',
				   	 name: '王小虎',
				   	 checkInType: '个人',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     checkInStation: '散客',
                     roomPrice: '268',
                     deposit: '100', // 押金
                     playType: '微信',
                     totalPlayMoney: '427', // 总消费
                     bookMethod:'美团',
                     orderNote:'王12虎',
                   }
                ]
			}
		},
		methods: {

		},
		components: {
			
		}
	}
</script>

<style scoped>
#historyCustomAccount {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	pad2016-0-ding: 15px 20px;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.search-box {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 60px;
	z-index: 999;
	position: relative;
	line-height: 60px;
	padding-left: 15px;
}
.show-info-box {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 60px;
	padding-bottom: 60px;
}
.sIB_contentBox {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background-color: rgba(76,109,232,.8);
}
.input-box {
    top: 0px;
    left: 0px;
    width: 220px;
    position: absolute;
    padding-left: 75px;
}
.data-range-box {
	top: 0px;
    left: 0px;
    position: absolute;
    padding-left: 75px;
}
.search-box-itemBox {
	margin-bottom: 15px;
}
.search-box-item {
	float: left;
	width: 240px;
	height: 40px;
	position: relative;
	margin-top: 10px;
	line-height: 40px;
	margin-right: 20px;
}
.search-box-item .spanTextColor {
	top: 0px;
	left: 0px;
    width: 75px;
    z-index: 999;
    position: relative;
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
#historyCustomAccount .input-box .el-input__inner{
   height: 30px;
   line-height: 30px;
}	
#historyCustomAccount .input-box .el-input.is-active .el-input__inner,
#historyCustomAccount .input-box .el-input__inner:focus {
   border-color: rgba(76,109,232,.8);
}
#historyCustomAccount .search-box-itemBox .el-select .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#historyCustomAccount .search-box-itemBox .el-input__inner {
   height: 30px;
   line-height: 30px;
}
#historyCustomAccount .el-range-editor.el-input__inner {
	margin-top: 5px;
    margin-left: 15px;
}
#historyCustomAccount .el-input.is-active .el-input__inner,
#historyCustomAccount .el-input__inner:focus 
{
   border-color: rgba(76,109,232,.8);
}
#historyCustomAccount .el-input__icon,
#historyCustomAccount .el-date-editor .el-range-separator
{
	line-height: 25px;
}
#historyCustomAccount .el-pagination {
    padding-top: 5px;
	padding-left: 40px;
}
#historyCustomAccount .el-pagination__sizes .el-input .el-input__inner:hover,
#historyCustomAccount .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#historyCustomAccount .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#historyCustomAccount .el-pager li.active,
#historyCustomAccount .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#historyCustomAccount .el-input.is-active .el-input__inner,
#historyCustomAccount .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
</style>