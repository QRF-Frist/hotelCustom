<template>
	<div id="customFileSearch">
		<div class="top-box">
			<div class="t-b-itemBox clearfix">
                <div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">客户 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入客户名"
                          v-model="inputCustomName"
                          clearable>
                        </el-input>
					</div>
				</div>

				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">性别 : </span>
					<div class="inputItem">
						<el-select v-model="customGender" clearable placeholder="请选择">
                          <el-option
                            v-for="item in genderOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
					</div>
				</div>

				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">黑名单 : </span>
                    <div class="inputItem">
						<el-select v-model="blacklistValue" clearable placeholder="请选择">
                          <el-option
                            v-for="item in blacklistOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
					</div>
				</div>

			</div>
		</div>
		<div class="bottom-box">
			<div class="contentBox scrollBar">
				<el-table
                  :data="tableData"
                  style="width: 100%"
                >
                  <el-table-column
                    label="日期"
                    width="180"
                    fixed
                  >
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="姓名"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{scope.row.customName}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="性别"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{scope.row.customGender}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="是否黑名单"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{scope.row.isBlockList}}</span>
                    </template>
                  </el-table-column> 

                  <el-table-column
                    label="客户备注"
                    width="220">
                    <template slot-scope="scope">
                      <span>{{scope.row.customNote}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="手机号码"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{scope.row.phoneNumber}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="地址"
                    width="320">
                    <template slot-scope="scope">
                      <span>{{scope.row.address}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="出生日期"
                    width="130">
                    <template slot-scope="scope">
                      <span>{{scope.row.birthDate}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="证件号码"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{scope.row.identifierNumber}}</span>
                    </template>
                  </el-table-column> 

                  <el-table-column 
                     label="操作"
                     fixed="right"
                     width="180"
                  >
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="toShowCUstomInfoDetail(scope.$index, scope.row)">详情</el-button>
                      <el-button
                        size="mini"
                        type="danger"
                        @click="toDeleteCustomInfo(scope.$index, scope.row)">删除</el-button>
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
		name: 'customFileSearch',
		data(){
			return {
               currentPage: 1, // 当前页面数
               inputCustomName: '', // 客户名
               customGender: '', // 用户性别
               blacklistValue: '', // 是否是黑名单
               orderDetailVisible: false, // 订单详情组件是否显示
               genderOptions: [
                  {
                  	 label: '男',
                  	 value: '男'
                  },
                  {
                  	label: '女',
                  	value: '女',
                  },
                  {
                  	label: '不详',
                  	value: '不详',
                  }
               ],
               blacklistOptions: [
                  {
                  	label: '是',
                  	value: '是',
                  },
                  {
                  	label: '否',
                  	value: '否',
                  }
               ],
               tableData: [
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-02',
                    customName: '王小虎',
                    customGender: '男',
                    isBlockList: '否',
                    customNote: '无',
                    phoneNumber: '15829301829',
                    address: '广东省潮州市湘桥区鸡掰路 1520 号',
                    birthDate: '1989-02-11',
                    identifierNumber: '445122198902119981',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-04',
                    customName: '张晓丽',
                    customGender: '女',
                    phoneNumber: '14039281023',
                    address: '上海市普陀区金沙江路 1517 弄',
                    birthDate: '1986-12-21',
                    identifierNumber: '445122198612211120',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2020-01-04',
                    customName: '苏大龙',
                    customGender: '男',
                    phoneNumber: '13520392738',
                    address: '山东省大连市大嶝区兰家桥路 150 号',
                    birthDate: '1988-08-31',
                    identifierNumber: '445122198808310092',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-11-23',
                    customName: '陈萍萍',
                    customGender: '女',
                    phoneNumber: '15820392817',
                    address: '广东省广州市天河区金平路 6031 号',
                    birthDate: '1997-06-06',
                    identifierNumber: '445122199706061129',
                  },
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-04',
                    customName: '张晓丽',
                    customGender: '女',
                    phoneNumber: '14039281023',
                    address: '上海市普陀区金沙江路 1517 弄',
                    birthDate: '1986-12-21',
                    identifierNumber: '445122198612211120',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-11-23',
                    customName: '陈萍萍',
                    customGender: '女',
                    phoneNumber: '15820392817',
                    address: '广东省广州市天河区金平路 6031 号',
                    birthDate: '1997-06-06',
                    identifierNumber: '445122199706061129',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2020-01-04',
                    customName: '苏大龙',
                    customGender: '男',
                    phoneNumber: '13520392738',
                    address: '山东省大连市大嶝区兰家桥路 150 号',
                    birthDate: '1988-08-31',
                    identifierNumber: '445122198808310092',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-02',
                    customName: '王小虎',
                    customGender: '男',
                    isBlockList: '否',
                    customNote: '无',
                    phoneNumber: '15829301829',
                    address: '广东省潮州市湘桥区鸡掰路 1520 号',
                    birthDate: '1989-02-11',
                    identifierNumber: '445122198902119981',
                  },
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-04',
                    customName: '张晓丽',
                    customGender: '女',
                    phoneNumber: '14039281023',
                    address: '上海市普陀区金沙江路 1517 弄',
                    birthDate: '1986-12-21',
                    identifierNumber: '445122198612211120',
                  },
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-04',
                    customName: '张晓丽',
                    customGender: '女',
                    phoneNumber: '14039281023',
                    address: '上海市普陀区金沙江路 1517 弄',
                    birthDate: '1986-12-21',
                    identifierNumber: '445122198612211120',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-11-23',
                    customName: '陈萍萍',
                    customGender: '女',
                    phoneNumber: '15820392817',
                    address: '广东省广州市天河区金平路 6031 号',
                    birthDate: '1997-06-06',
                    identifierNumber: '445122199706061129',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2020-01-04',
                    customName: '苏大龙',
                    customGender: '男',
                    phoneNumber: '13520392738',
                    address: '山东省大连市大嶝区兰家桥路 150 号',
                    birthDate: '1988-08-31',
                    identifierNumber: '445122198808310092',
                  }, 
                  { 
                  	orderId: 'order_123456789_11122',
                    date: '2019-05-02',
                    customName: '王小虎',
                    customGender: '男',
                    isBlockList: '否',
                    customNote: '无',
                    phoneNumber: '15829301829',
                    address: '广东省潮州市湘桥区鸡掰路 1520 号',
                    birthDate: '1989-02-11',
                    identifierNumber: '445122198902119981',
                  },
               ]
			}
		},
		methods: {
           handleSizeChange(){

           },
           handleCurrentChange(){

           },
           toShowCUstomInfoDetail(index,customInfo){
              let that = this;
              that.orderDetailVisible = true;
              let orderId = customInfo.orderId;
              that.$bus.emit("toGetOrderDetail",orderId);
           },
           toDeleteCustomInfo(index,customInfo){

           }
		},
		components:{
           orderDetailComponent,
		}
	}
</script>

<style scoped>
#customFileSearch {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.top-box {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 50px;
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
.bottom-box {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 60px;
	padding-bottom: 60px;
}
.contentBox {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	padding-left: 15px;
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
#customFileSearch .el-pagination {
  padding-top: 8px;
	padding-left: 40px;
}
#customFileSearch .el-pagination__sizes .el-input .el-input__inner:hover,
#customFileSearch .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#customFileSearch .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#customFileSearch .el-pager li.active,
#customFileSearch .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#customFileSearch .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#customFileSearch .el-input__suffix {
    line-height: 25px;
}
#customFileSearch .el-date-editor .el-range-separator,
#customFileSearch .el-input__icon {
 	line-height: 25px;
}
#customFileSearch .el-select .el-input__inner:focus,
#customFileSearch .el-input.is-active .el-input__inner, 
#customFileSearch .el-input__inner:focus,
#customFileSearch .el-range-editor.is-active, 
#customFileSearch .el-range-editor.is-active:hover
{
	border-color: rgba(76,109,232,.8);
}
#customFileSearch .el-dialog {
	min-width: 1100px;
	margin-top: 11vh!important;
	border-radius: 8px;
}
#customFileSearch > .el-dialog__wrapper .el-dialog__body {
	padding: 0px 20px;
	padding-right: 1px;
}
#customFileSearch .el-button--primary,
#customFileSearch .el-button:focus, 
#customFileSearch .el-button:hover
{   
	color: #fff;
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#customFileSearch .el-dialog__title {
	color: rgba(76,109,232,.8);
}
</style>