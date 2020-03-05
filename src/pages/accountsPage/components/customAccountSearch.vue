<template>
	<div id="customAccountSearch">
		<div class="searchBox">
			<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">营业项目 : </span>
				<el-radio-group v-model="businessType_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">房费</el-radio>
                  <el-radio :label="3">收款</el-radio>
                  <el-radio :label="4">退款</el-radio>
                  <el-radio :label="5">押金</el-radio>
                  <el-radio :label="6">商品</el-radio>
                </el-radio-group>
			</div>
			<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">支付方式 : </span>
				<el-radio-group v-model="payType_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">现金</el-radio>
                  <el-radio :label="3">银行卡</el-radio>
                  <el-radio :label="4">支付宝</el-radio>
                  <el-radio :label="5">微信</el-radio>
                  <el-radio :label="6">QQ</el-radio>
                  <el-radio :label="7">其他</el-radio>
                </el-radio-group>
			</div>
			<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">消费时间 : </span>
				<el-radio-group v-model="consumptionTime_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">这周</el-radio>
                  <el-radio :label="3">本月</el-radio>
                  <el-radio :label="4">上个月</el-radio>
                </el-radio-group>
                <el-date-picker
                  v-model="consumptionTime_daterange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
			</div>
			<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">字段查询 : </span>
				<div class="rB-searchBox">
					<span class="rB-sB_title">客户名：</span>
					<div class="rB-sB_inputBox">
						<el-input
                          placeholder="请输入客户名"
                          v-model="customName"
                          >
                        </el-input>
					</div>
				</div>
				<div class="rB-searchBox">
					<span class="rB-sB_title">操作员：</span>
					<div class="rB-sB_inputBox">
						<el-input v-model="operatorName" placeholder="请输入操作员"></el-input>
					</div>
				</div>
				<div class="rB-searchBox">
					<span class="rB-sB_title">房号：</span>
					<div class="rB-sB_inputBox">
						<el-input v-model="roomNum" placeholder="请输入房号"></el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="cAS_contentBox">
			<div class="cAS_CB_contentBox scrollBar">
				<el-table
                  :data="tableData"
                  style="width: 100%;"
                  :default-sort="{prop: 'consumptionDate', order: 'descending'}"
                  >
                  <el-table-column
                    fixed
                    label="消费时间"
                    width="140"
                    sortable
                    prop="consumptionDate"
                    >
                    <template slot-scope="scope">
                      <i class="el-icon-time" style="color: rgba(76,109,232,.8);"></i>
                      <span style="margin-left: 10px">{{ scope.row.consumptionDate }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="营业项目"
                    width="110"
                    prop="accountType"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.accountType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="业务详情"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{ scope.row.accountDetailInfo }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="类别"
                    width="120">
                    <template slot-scope="scope">
                      <span>{{ scope.row.playType }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="金额"
                    width="125"
                    sortable
                    prop="moneyTotal"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.moneyTotal }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="姓名"
                    width="125"
                    sortable
                    prop="customName"
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.customName }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="房号"
                    sortable
                    width="125">
                    <template slot-scope="scope">
                      <span>{{ scope.row.roomNum }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="操作员"
                    width="110">
                    <template slot-scope="scope">
                      <span>{{ scope.row.operatorName }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="备注"
                    width="160">
                    <template slot-scope="scope">
                      <span>{{ scope.row.orderNote }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    label="结账时间"
                    width="125"
                    sortable
                    >
                    <template slot-scope="scope">
                      <span>{{ scope.row.checkOutTime }}</span>
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
		name: 'customAccountSearch',
		data(){
			return {
               businessType_radio: '', // 营业项目
               payType_radio: '', // 支付方式
               consumptionTime_radio: '', // 消费时间
               consumptionTime_daterange: '', // 消费时间的范围
               customName: '', // 客户名
               operatorName: '', // 操作员名称
               roomNum: '', // 
               tableData: [
				   {
				   	 orderId:'123456789',
                     consumptionDate: '2016-05-02',
                     customName: '王大虎',
                     accountType:'美团',
                     accountDetailInfo:'这是业务详情',
                     playType: '微信',
                     moneyTotal: '269',
                     roomNum: '509',
                     operatorName: '大钱万',
                     orderNote: '这是订单备注',
                     checkOutTime: '2020-02-13',
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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
                   }, {
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

		},
		components: {
			
		}
	}
</script>

<style scoped>
#customAccountSearch {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	pad2016-0-ding: 15px 20px;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.searchBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 200px;
	z-index: 999;
	position: relative;
	padding-left: 15px;
}
.radioBox {
	height: 30px;
	margin-top: 15px;
	line-height: 30px;
}
.radioBox:last-child > span {
    position: relative;
}
.rB-searchBox {
	width: 270px;
	height: 30px;
	display: inline-block;
	position: relative;
	line-height: 30px;
	margin-left: 15px;
}
.rB-searchBox .rB-sB_title {
	top: 0px;
	left: 0px;
	color: rgba(76,109,232,.8);
	width: 65px;
	z-index: 999;
    position: relative;
    text-align: right;
}
.rB-searchBox .rB-sB_inputBox {
	top: 0px;
	left: 0px;
	width: 100%;
	position: absolute;
	padding-left: 65px;
}
.cAS_contentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 200px;
	padding-left: 15px;
	padding-bottom: 50px;
}
.cAS_CB_contentBox {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	background-color: rgba(76,109,232,.2);
}
</style>

<style>
#customAccountSearch {

}
#customAccountSearch .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#customAccountSearch .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#customAccountSearch .el-radio__inner:hover {
	customAccountSearch-color: rgba(76,109,232,.8);
}
#customAccountSearch .el-radio-group{
    margin-top: 7px;
    margin-left: 15px;
}
#customAccountSearch .el-input__inner {
	height: 30px;
	margin-top: 5px;
	margin-left: 35px;
	line-height: 30px;
}
#customAccountSearch .el-input.is-active .el-input__inner,
#customAccountSearch .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#customAccountSearch .el-date-editor .el-range__icon {
	margin-top: -10px;
}
#customAccountSearch .el-date-editor .el-range-separator,
#customAccountSearch .el-date-editor .el-range__close-icon
{
	line-height: 24px;
}
#customAccountSearch .rB-sB_inputBox .el-input__inner{
    margin-left: 0px;
    height: 30px;
    line-height: 25px;
    margin-top: 0px;
}
#customAccountSearch .el-input__suffix {
	margin-top: 0px;
}
#customAccountSearch .el-pagination {
  padding-top: 5px;
	padding-left: 40px;
}
#customAccountSearch .el-pagination__sizes .el-input .el-input__inner:hover,
#customAccountSearch .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#customAccountSearch .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#customAccountSearch .el-pager li.active,
#customAccountSearch .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#customAccountSearch .el-input.is-active .el-input__inner,
#customAccountSearch .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#customAccountSearch .paginationBox .el-pagination .el-select .el-input {
	width: 100px;
}
#customAccountSearch .el-pagination button,
#customAccountSearch .el-pagination span:not([class*=suffix]) {
   line-height: 40px
}
#customAccountSearch .el-pager {
	padding-top: 8px;
}
</style>