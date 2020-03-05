<template>
   <div id="orderSearch">
   	  <div class="oS_conditionsBox">
   	  	 <p class="pTitle textColor textWeight">订单查询</p>
   	  	 <div class="orderType">
			<span class="spanTextColor" style="color: rgba(76,109,232,.8)">订单类型 : </span>
			<el-radio-group v-model="orderType_radio">
                <el-radio :label="1">在住订单</el-radio>
                <el-radio :label="2">今日预离</el-radio>
                <el-radio :label="3">历史订单</el-radio>
            </el-radio-group>
		 </div>
		 <div class="orderType">
			<span class="spanTextColor" style="color: rgba(76,109,232,.8)">预离时间 : </span>
			<el-radio-group v-model="livingTimeValue">
                <el-radio :label="1">今天</el-radio>
                <el-radio :label="2">昨天</el-radio>
                <el-radio :label="3">明天</el-radio>
                <el-radio :label="4">这周</el-radio>
                <el-radio :label="5">上周</el-radio>
            </el-radio-group>
            <el-date-picker
              v-model="livingTimeValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
		 </div>
		 <div class="orderType orderSource">
		 	<span class="spanTextColor" style="color: rgba(76,109,232,.8)">订单来源 : </span>
		 	<el-select v-model="orderSourceValue" placeholder="请选择订单来源">
              <el-option
                v-for="item in orderSourceOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="spanTextColor" style="color: rgba(76,109,232,.8)">客源类别 : </span>
            <el-select v-model="customTypeValue" placeholder="请选择订单来源">
              <el-option
                v-for="item in customTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <span class="spanTextColor" style="color: rgba(76,109,232,.8)">入住日期 : </span>
            <el-date-picker
              v-model="checkInDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
		 </div>
		 <div class="orderType orderSource">
		 	<span class="spanTextColor" style="color: rgba(76,109,232,.8)">姓名 : </span>
		 	<el-input
              placeholder="请输入客户姓名"
              v-model="customName"
              clearable>
            </el-input>
            <span class="spanTextColor" style="color: rgba(76,109,232,.8)">房号 : </span>
		 	<el-input
              placeholder="请输入房号"
              v-model="roomNum"
              clearable>
            </el-input>
            <span class="spanTextColor" style="color: rgba(76,109,232,.8)">房型 : </span>
            <el-select v-model="roomTypeValue" placeholder="请选择房型">
              <el-option
                v-for="item in roomTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
		 </div>
		 
   	  </div>
   	  <div class="oS_content">
   	  	 <div class="oS_c_content scrollBar">
   	  	 	<el-table
              :data="tableData"
              style="width: 100%;"
              :default-sort="{prop: 'bookDate', order: 'descending'}" 
            >
          <el-table-column
            fixed
            label="姓名"
            width="120"
            sortable
            prop="name"
          >
            <template slot-scope="scope">
              <i class="el-icon-time" style="color: rgba(76,109,232,.8);"></i>
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="性别"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.gender }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="民族"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.nationalName }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="手机号码"
            width="140">
            <template slot-scope="scope">
              <span>{{ scope.row.phoneNumber }}</span>
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
            width="125"
            sortable
            prop="outTime"
            >
            <template slot-scope="scope">
              <span>{{ scope.row.outTime }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="房间类型"
            width="125">
            <template slot-scope="scope">
              <span>{{ scope.row.roomType }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="房号"
            width="125"
            sortable
            prop="roomNum"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.roomNum }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="证件号"
            width="200"
            sortable
            prop="identifierNumber"
          >
            <template slot-scope="scope">
              <span>{{ scope.row.identifierNumber }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="客源类别"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.customSource }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="订单来源"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.bookMethod }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="在住状态"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.inHomeStatus }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="结账状态"
            width="100">
            <template slot-scope="scope">
              <span>{{ scope.row.checkOutStatus }}</span>
            </template>
          </el-table-column>

          <el-table-column 
            fixed="right"
            label="操作"
            width="220"
            >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="toShowOrderDetail(scope.row.orderId)">详情</el-button>
              <span 
                v-if="scope.row.checkOutStatus=='未结'"
                style="margin: 0px 10px;" 
                >
              	<el-button 
                size="mini"
                type="success"
                @click="toCheckoutOrder(scope.row.orderId)">结账</el-button> 
              </span>
              <el-button
                size="mini"
                type="danger"
                @click="toDeleteOrder(scope.row.orderId)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
   	  	 </div>
   	  </div>

   	  <!-- 订单详细信息弹出框  开始 -->
   	  <el-dialog
        title="订单详情"
        :visible.sync="orderDetailVisible"
      >
        <orderDetailComponent></orderDetailComponent>
        <span slot="footer" class="dialog-footer">
          <el-button @click="orderDetailVisible = false">取 消</el-button>
          <el-button type="primary" @click="orderDetailVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 订单详细信息弹出框  结束 -->
   </div>
</template>

<script>
  import orderDetailComponent from '../../../components/orderDetail.vue';
	export default {
		name: 'orderSearch',
		data(){
			return {
			   orderDetailVisible: false, // 弹出框是否可见
			   toShowOrderDetailByOrderId: '', // 要查看详细信息订单的 id
               orderType_radio: '', // 订单类型
               livingTimeValue: '', // 预离的时间
               orderSourceValue: '', // 订单来源
               customTypeValue: '', // 客源类别
               checkInDate: '', // 入住日期
               customName: '', // 姓名
               roomNum: '', // 房号
               roomTypeValue: '', // 房间类型
               orderSourceOptions:[{
                    value: '全部',
                    label: '全部'
                  }, {
                    value: '美团',
                    label: '美团'
                  }, {
                    value: '携程',
                    label: '携程'
                  }, {
                    value: '艺龙',
                    label: '艺龙'
                  }, {
                    value: '闪住',
                    label: '闪住'
                  }, {
                    value: '其他',
                    label: '其他'
                }],
               customTypeOptions: [ // 客源类别数组
                  {
                  	value: '散客',
                  	label: '散客',
                  },
                  {
                  	value: '单位',
                  	label: '单位',
                  },
                  {
                  	value: '中介',
                  	label: '中介',
                  }
               ],
               roomTypeOptions: [ // 房间类型
                  {
                  	value: '全部',
                  	label: '全部',
                  }
               ],
               tableData: [
				 {
				   orderId:'123456789',
                   bookDate: '2016-05-02',
                   name: '王大虎',
                   gender: '男',
                   identifierNumber: '445122199811184539',
                   nationalName: '汉族',
                   bookMethod:'美团',
                   phoneNumber:'13727940858',
                   comeTime:'2016-05-07',
                   outTime:'2016-05-10',
                   roomType:'大床房',
                   roomNum: '501',
                   customSource: '散客',
                   inHomeStatus: '在住',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-05-04',
                   name: '王二虎',
                   gender: '女',
                   identifierNumber: '445122199811184539',
                   nationalName: '蒙古族',
                   bookMethod:'闪住',
                   phoneNumber:'13727940858',
                   comeTime:'2016-05-09',
                   outTime:'2016-05-11',
                   roomType:'单人房',
                   roomNum: '502',
                   customSource: '单位',
                   inHomeStatus: '离店',
                   checkOutStatus: '未结',
                   address: '上海市普陀区金沙江路 1517 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-05-01',
                   name: '王三虎',
                   identifierNumber: '445122199811184539',
                   gender: '未知',
                   nationalName: '傈僳族',
                   bookMethod:'艺龙',
                   phoneNumber:'13727940858',
                   comeTime:'2016-05-03',
                   outTime:'2016-05-04',
                   roomType:'特价房',
                   roomNum: '503',
                   customSource: '中介',
                   inHomeStatus: '在住',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1519 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-05-03',
                   name: '王四虎',
                   identifierNumber: '445122199811184539',
                   gender: '未知',
                   nationalName: '保安族',
                   bookMethod:'携程',
                   phoneNumber:'13727940858',
                   comeTime:'2016-05-06',
                   outTime:'2016-05-09',
                   roomType:'大床房',
                   roomNum: '504',
                   customSource: '散客',
                   inHomeStatus: '预定',
                   checkOutStatus: '未结',
                   address: '上海市普陀区金沙江路 1516 弄'
                 },
                 {
                 	 orderId:'123456789',
                   bookDate: '2016-06-02',
                   name: '王五虎',
                   identifierNumber: '445122199811184539',
                   gender: '男',
                   nationalName: '苗族',
                   bookMethod:'百度',
                   phoneNumber:'13727940858',
                   comeTime:'2016-06-28',
                   outTime:'2016-07-06',
                   roomType:'单人房',
                   roomNum: '505',
                   customSource: '单位',
                   inHomeStatus: '在住',
                   checkOutStatus: '未结',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-06-04',
                   name: '王六虎',
                   identifierNumber: '445122199811184539',
                   gender: '女',
                   nationalName: '汉族',
                   bookMethod:'高德',
                   phoneNumber:'13727940858',
                   comeTime:'2016-06-22',
                   outTime:'2016-06-26',
                   roomType:'大床房',
                   roomNum: '506',
                   customSource: '中介',
                   inHomeStatus: '预定',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1517 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-07-01',
                   name: '王七虎',
                   identifierNumber: '445122199811184539',
                   gender: '男',
                   nationalName: '满族',
                   bookMethod:'美团',
                   phoneNumber:'13727940858',
                   comeTime:'2016-07-17',
                   outTime:'2016-07-19',
                   roomType:'单人房',
                   roomNum: '507',
                   customSource: '散客',
                   inHomeStatus: '预离',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1519 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-07-03',
                   name: '王八虎',
                   identifierNumber: '445122199811184539',
                   gender: '女',
                   nationalName: '壮族',
                   bookMethod:'携程',
                   customSource: '单位',
                   phoneNumber:'13727940858',
                   comeTime:'2016-07-25',
                   outTime:'2016-08-07',
                   roomType:'双人房',
                   roomNum: '508',
                   inHomeStatus: '预离',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1516 弄'
                 },
                 {
                 	 orderId:'123456789',
                   bookDate: '2016-08-02',
                   name: '王九虎',
                   identifierNumber: '445122199811184539',
                   gender: '未知',
                   nationalName: '布朗族',
                   bookMethod:'其他',
                   phoneNumber:'13727940858',
                   comeTime:'2016-08-21',
                   outTime:'2016-08-24',
                   roomType:'情侣房',
                   roomNum: '509',
                   customSource: '中介',
                   inHomeStatus: '离店',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1518 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-08-04',
                   name: '王十虎',
                   identifierNumber: '445122199811184539',
                   gender: '男',
                   nationalName: '汉族',
                   bookMethod:'其他',
                   phoneNumber:'13727940858',
                   comeTime:'2016-08-18',
                   outTime:'2016-08-21',
                   roomType:'单人房',
                   roomNum: '510',
                   customSource: '单位',
                   inHomeStatus: '在住',
                   checkOutStatus: '未结',
                   address: '上海市普陀区金沙江路 1517 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-07-11',
                   name: '王中虎',
                   identifierNumber: '445122199811184539',
                   gender: '男',
                   nationalName: '独龙族',
                   bookMethod:'美团',
                   phoneNumber:'13727940858',
                   comeTime:'2016-07-22',
                   outTime:'2016-07-26',
                   roomType:'大床房',
                   roomNum: '511',
                   customSource: '散客',
                   inHomeStatus: '离店',
                   checkOutStatus: '已结',
                   address: '上海市普陀区金沙江路 1519 弄'
                 }, {
                 	 orderId:'123456789',
                   bookDate: '2016-07-13',
                   name: '王小虎',
                   identifierNumber: '445122199811184539',
                   gender: '未知',
                   nationalName: '汉族',
                   bookMethod:'艺龙',
                   phoneNumber:'13727940858',
                   comeTime:'2016-07-18',
                   outTime:'2016-07-23',
                   roomType:'单人房',
                   roomNum: '512',
                   customSource: '中介',
                   inHomeStatus: '预定',
                   checkOutStatus: '未结',
                   address: '上海市普陀区金沙江路 1516 弄'
                 }
                ],
			}
		},
		methods: {
           toShowOrderDetail(orderId){ // 查看订单的详情
              let that = this;
              that.orderDetailVisible = true;
              that.toShowOrderDetailByOrderId = orderId;
              that.$bus.emit("toGetOrderDetail",orderId);
           },
           toCheckoutOrder(){ // 结算订单
              let that = this;
           },
           toDeleteOrder(){ // 删除订单
              let that = this;
           }
		},
		components: {
			orderDetailComponent
		}
	}
</script>

<style scoped>
#orderSearch {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.oS_conditionsBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 260px;
	padding: 10px 15px 10px 15px;
	z-index: 999;
	position: relative;
}
.oS_conditionsBox > div {
	margin-top: 25px;
	padding-left: 25px;
}
.pTitle {
	width: 100%;
	height: 25px;
	border-left: 6px solid rgba(76,109,232,.8);
	padding-left: 20px;
	line-height: 25px;
    margin-bottom: 5px;
}
.orderType {
	height: 25px;
	line-height: 25px;
}
.orderSource > span {
	width: 80px;
    display: inline-block;
	margin-right: 10px;
}


.oS_content {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 260px;
}
.oS_c_content {
	width: 100%;
	height: 100%;
	padding: 0px 15px 40px 15px;
	overflow-y: auto;
}
</style>

<style>
#orderSearch .el-radio {
	 width: 90px;
   margin-top: 5px;
   margin-left: 10px;
   margin-right: 0px;
}
#orderSearch .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#orderSearch .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#orderSearch .el-radio__inner:hover {
	border-color: rgba(76,109,232,.8);
}
#orderSearch .oS_conditionsBox .el-input__inner {
    height: 25px;
    line-height: 25px;
}
#orderSearch .oS_conditionsBox .el-radio-group {
	padding-top: 3px;
}
#orderSearch .oS_conditionsBox .el-date-editor .el-range__icon {
	line-height: 20px;
}
#orderSearch .oS_conditionsBox .el-date-editor .el-range-separator {
	width: 6%;
	line-height: 20px;
}
#orderSearch .oS_conditionsBox .el-date-editor .el-range__close-icon {
	line-height: 20px;
}
#orderSearch .orderSource .el-input__icon {
	line-height: 25px;
}
#orderSearch .el-input {
	width: 130px;
	margin-right: 20px;
}
#orderSearch .el-select .el-input.is-focus .el-input__inner {
    border-color: rgba(76,109,232,.8);
}
#orderSearch  .orderSource .el-select {
    width: 150px;
}
#orderSearch .el-select .el-input__inner:focus,
#orderSearch .el-input.is-active .el-input__inner, 
#orderSearch .el-input__inner:focus,
#orderSearch .el-range-editor.is-active, 
#orderSearch .el-range-editor.is-active:hover
{
	border-color: rgba(76,109,232,.8);
}
#orderSearch .el-dialog {
	min-width: 1100px;
	margin-top: 11vh!important;
	border-radius: 8px;
}
#orderSearch > .el-dialog__wrapper .el-dialog__body {
	padding: 0px 20px;
	padding-right: 1px;
}
#orderSearch .el-button--primary,
#orderSearch .el-button:focus, 
#orderSearch .el-button:hover
{   
	color: #fff;
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#orderSearch .el-dialog__title {
	color: rgba(76,109,232,.8);
}
</style>