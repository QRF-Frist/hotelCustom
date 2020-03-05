<template>
	<div id="customGoodManage">
		<div class="top-box">
			<div class="t-b-itemBox clearfix">
				<div class="t-b-item" style="width: 100%;">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">类型 : </span>
					<el-radio-group v-model="goodType_radio">
                        <el-radio :label="1">全部</el-radio>
                        <el-radio :label="2">贵重物品</el-radio>
                        <el-radio :label="3">遗留物品</el-radio>
                    </el-radio-group>
				</div>
			</div>
			<div class="t-b-itemBox clearfix">
				<div class="t-b-item" style="width: 100%;">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">日期 : </span>
					<el-radio-group v-model="putTime_radio">
                        <el-radio :label="1">全部</el-radio>
                        <el-radio :label="2">今天</el-radio>
                        <el-radio :label="3">昨天</el-radio>
                        <el-radio :label="4">上周</el-radio>
                    </el-radio-group>
                    <el-date-picker
                      v-model="putTimeRange"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期">
                    </el-date-picker>
				</div>
			</div>
			<div class="t-b-itemBox clearfix">
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">物品名称 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入物品名称"
                          v-model="inputGoodsName"
                          clearable>
                        </el-input>
					</div>
				</div>
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">客人 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入客人姓名"
                          v-model="inputCustomName"
                          clearable>
                        </el-input>
					</div>
				</div>
				<div class="t-b-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房号 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入房号"
                          v-model="inputRoomNum"
                          clearable>
                        </el-input>
					</div>
				</div>
			</div>

            <!-- 点击存放物品区域  开始 -->
            <div class="putGoodsBox">
            	<i 
            	   class="iconfont icon-cun"
            	   @click="putGoodsEvent"
            	></i>
            </div>
            <!-- 点击存放物品区域  结束 -->

		</div>
		<div class="bottom-box">
			<div class="content-box scrollBar">
				<el-table
                  :data="tableData"
                  style="width: 100%"
                >
                  <el-table-column
                    label="存放日期"
                    width="180"
                    fixed
                  >
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="类型"
                    width="120">
                    <template slot-scope="scope">
                      <span>{{scope.row.goodsType}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="名称"
                    width="120">
                    <template slot-scope="scope">
                      <span>{{scope.row.goodsName}}</span>
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
                    label="电话"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{scope.row.phoneNumber}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="房间号"
                    width="100"
                    sortable
                  >
                    <template slot-scope="scope">
                      <span>{{scope.row.roomNum}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="订单号"
                    width="180">
                    <template slot-scope="scope">
                      <span>{{scope.row.orderId}}</span>
                    </template>
                  </el-table-column> 

                  <el-table-column
                    label="参考价值"
                    width="120">
                    <template slot-scope="scope">
                      <span>{{scope.row.referencePrice}}</span>
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
                    label="存放操作员"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{scope.row.putOperatorName}}</span>
                    </template>
                  </el-table-column> 

                  <el-table-column
                    label="领取时间"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{scope.row.getTime}}</span>
                    </template>
                  </el-table-column>

                  <el-table-column
                    label="领取操作员"
                    width="100">
                    <template slot-scope="scope">
                      <span>{{scope.row.getOperatorName}}</span>
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

    <!-- 存放物品的弹出框  开始 -->
       <div id="putGoodsBox">
         <el-dialog
           title="存放物品"
           :visible.sync="putGoodsBoxVisible"
         >
           <putGoods></putGoods>
           <span slot="footer" class="dialog-footer">
             <el-button @click="putGoodsBoxVisible = false">取 消</el-button>
             <el-button type="primary" @click="putGoodsBoxVisible = false">确 定</el-button>
           </span>
         </el-dialog>
        </div>
    <!-- 存放物品的弹出框  结束 -->

	</div>
</template>

<script>
  import putGoods from "../../../components/putGoods";
	export default {
		name: 'customGoodManage',
		data(){
			return {
               currentPage: 1, // 默认的分页区域的指定页面
               goodType_radio: '', // 物品类型
               putTime_radio: '', // 存放的时间
               inputGoodsName: '', // 物品名称
               inputCustomName: '', // 客人姓名
               inputRoomNum: '', // 输入的房号
               putTimeRange: '', // 日期范围
               putGoodsBoxVisible: false, // 存放物品弹框是否显示
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
              let that = this;
           },
           handleCurrentChange(){
              let that = this;
           },
           putGoodsEvent(){ // 存放物品事件
              let that = this;

              that.putGoodsBoxVisible = true;
           }
		},
		components:{
       putGoods,
		}
	}
</script>

<style scoped>
#customGoodManage {
   width: 99.8%;
   height: 99.8%;
   border: 1px solid rgba(76,109,232,.8);
   position: relative;
   border-radius: 8px;
   background-color: #fff;
}
.top-box {
   width: 100%;
   height: 150px;
   z-index: 999;
   position: relative;
}
.putGoodsBox { /* 物品存放区域 样式 */
	top: 50px;
	right: 10%;
	width: 80px;
	height: 80px;
	position: absolute;
	animation: bounceBtnAnimated 2s infinite;
	box-shadow: 4px -4px 16px 0px rgba(100,100,100,.6);
	border-radius: 49%;
	background-color: rgba(76,109,232,.8);
}
.putGoodsBox .iconfont {
	top: -17.5px;
	left: 4.5px;
	color: #fff;
	cursor: pointer;
	position: relative;
	font-size: 70px;
}
.t-b-itemBox {
   width: 100%;
   height: 50px;
   padding: 0px 15px;
   line-height: 50px;
}
.t-b-item {
   width: 240px;
   float: left;
   position: relative;
   margin-right: 20px;
}
.inputItem {
   top: 10px;
   left: 0px;
   width: 240px;
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
   padding-top: 150px;
   padding-bottom: 60px;
}
.content-box {
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
/* 物品存放区域 "跳动动画" 开始 */
@keyframes bounceBtnAnimated {
    0%, 20%, 50%, 80%, 100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    40%{
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px)
    }

    60% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px)
    }

}
/* 物品存放区域 "跳动动画" 结束 */

</style>

<style>
/* 分页区域 开始 */
#customGoodManage .el-pagination {
   padding-top: 6px;
   padding-left: 40px;
}
#customGoodManage .el-pagination__sizes .el-input .el-input__inner:hover,
#customGoodManage .el-select .el-input__inner:focus{
   border-color: rgba(76,109,232,.8);
}
#customGoodManage .el-select-dropdown__item.selected {
   color: rgba(76,109,232,.8);
}
#customGoodManage .el-pager li.active,
#customGoodManage .el-pager li:hover
{
   color: rgba(76,109,232,.8);
}
/* 分页区域 结束 */

/* 单选框区域 开始 */
#customGoodManage .el-radio {
   width: 90px;
   margin-top: 8px;
   margin-left: 10px;
   margin-right: 0px;
}
#customGoodManage .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#customGoodManage .el-radio__input.is-checked .el-radio__inner {
   border-color: rgba(76,109,232,.8);
   background: rgba(76,109,232,.8);
}
#customGoodManage .el-radio__inner:hover {
   border-color: rgba(76,109,232,.8);
}
/* 单选框区域 结束 */

/* 输入框  开始 */
#customGoodManage .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#customGoodManage .el-input__suffix {
    line-height: 25px;
}
#customGoodManage .el-date-editor .el-range-separator,
#customGoodManage .el-input__icon {
 	line-height: 25px;
}
#customGoodManage .el-select .el-input__inner:focus,
#customGoodManage .el-input.is-active .el-input__inner, 
#customGoodManage .el-input__inner:focus,
#customGoodManage .el-range-editor.is-active, 
#customGoodManage .el-range-editor.is-active:hover
{
	border-color: rgba(76,109,232,.8);
}
/* 输入框 结束 */

/* 存放物品弹出框样式 开始 */
#customGoodManage .el-dialog {
  width: 860px;
  margin-top: 11vh!important;
  border-radius: 8px;
}
#customGoodManage > .el-dialog__wrapper .el-dialog__body {
  padding: 0px 20px;
  padding-right: 1px;
}
#customGoodManage  .el-dialog__body {
   padding: 5px 20px;
}
#customGoodManage .el-button--primary,
#customGoodManage .el-button:focus, 
#customGoodManage .el-button:hover
{   
  color: #fff;
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#customGoodManage .el-dialog__title {
  color: rgba(76,109,232,.8);
}
/* 存放物品弹出框样式 结束 */
</style>