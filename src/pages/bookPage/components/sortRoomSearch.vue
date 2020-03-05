<template>
	<div id="sortRoomSearch">
		<div class="checkedBox">
			<div class="checked">
				<span class="cB_title">订单类型: </span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="orderTypeCheckedList" 
					   :max="1"
				    >
                      <el-checkbox label="全部订单"></el-checkbox>
                      <el-checkbox label="在住订单"></el-checkbox>
                      <el-checkbox label="历史订单"></el-checkbox>
                      <el-checkbox label="预定订单"></el-checkbox>
                    </el-checkbox-group>
				</div>
			</div>
			<div class="checked">
				<span class="cB_title">预离时间: </span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="outerCheckedList" 
					   :max="1"
				    >
                      <el-checkbox label="全部"></el-checkbox>
                      <el-checkbox label="今天"></el-checkbox>
                      <el-checkbox label="这周"></el-checkbox>
                      <el-checkbox label="上周"></el-checkbox>
                    </el-checkbox-group>
				</div>
			</div>
			<div class="checked">
				<span class="cB_title">入住标准: </span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="inHomeCheckedList" 
					   :max="1"
				    >
                      <el-checkbox label="全部"></el-checkbox>
                      <el-checkbox label="全天房"></el-checkbox>
                      <el-checkbox label="特价房"></el-checkbox>
                      <el-checkbox label="钟点房"></el-checkbox>
                    </el-checkbox-group>
				</div>
			</div>
		</div>
		<div class="inputSearch clearfix">
			<div class="iS_item">
				<span class="iS_itemTitle">订单来源: </span>
				<el-select v-model="orderSourceValue" clearable placeholder="请选择订单来源">
                  <el-option
                    v-for="item in orderSourceOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
			</div>
			<div class="iS_item inHomeDate">
				<span class="iS_itemTitle">入住日期: </span>
                <el-date-picker
                     v-model="inHomeDate"
                     type="daterange"
                     range-separator="至"
                     start-placeholder="开始日期"
                     end-placeholder="结束日期">
                </el-date-picker>
			</div>
		</div>
		<div class="inputSearch clearfix" style="margin-top: 20px;">
			<div class="iS_item">
				<span class="iS_itemTitle">姓名: </span>
				<el-input
                  placeholder="请输入入住人姓名"
                  v-model="inputComeName"
                  clearable>
                </el-input>
			</div>
			<div class="iS_item">
				<span class="iS_itemTitle">房号: </span>
				<el-input
                  placeholder="请输入房间号"
                  v-model="inputHomeNumber"
                  clearable>
                </el-input>
			</div>
			<div class="iS_item">
				<span class="iS_itemTitle">房间类型: </span>
				<el-select v-model="homeTypeValue" clearable placeholder="请选择订单来源">
                  <el-option
                    v-for="item in homeTypeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
			</div>
		</div>
		<div class="orderDetailInfo">
			<div class="oDI_content scrollBar">
				<el-table
          :data="tableData"
          style="width: 100%;"
          :default-sort="{prop: 'bookDate', order: 'descending'}"
          >
          <el-table-column
            fixed
            label="日期"
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
            label="姓名"
            width="125"
            sortable
            prop="name"
            >
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
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
            label="房间类型"
            width="125">
            <template slot-scope="scope">
              <span>{{ scope.row.roomType }}</span>
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
            label="房间类型"
            width="125">
            <template slot-scope="scope">
              <span>{{ scope.row.roomType }}</span>
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
                @click="toEditCustomInfo(scope.row.orderId)">编辑</el-button>
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
		name : "sortRoomSearch",
		data(){
			return {
				orderTypeCheckedList:[], // 订单类型选择数组
				outerCheckedList:[], // 预离时间选择数组
				inHomeCheckedList:[], // 入住标准选择数组
				orderSourceOptions: [{ // 订单来源数组
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
                homeTypeOptions:[ // 房间类型数组
                	{
                		value: '双人房',
                		label: '双人房'
                	},
                	{
                		value: '单人房',
                		label: '单人房'
                	},
                	{
                		value: '大床房',
                		label: '大床房'
                	},
                	{
                		value: '情侣房',
                		label: '情侣房'
                	},
                	{
                		value: '总统房',
                		label: '总统房'
                	},
                	{
                		value: '特价房',
                		label: '特价房'
                	}
                ],
                tableData: [
				           {
				           	 orderId:'123456789',
                     bookDate: '2016-05-02',
                     name: '王大虎',
                     bookMethod:'美团',
                     phoneNumber:'13727940858',
                     comeTime:'2016-05-07',
                     outTime:'2016-05-10',
                     roomType:'大床房',
                     address: '上海市普陀区金沙江路 1518 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-05-04',
                     name: '王二虎',
                     bookMethod:'闪住',
                     phoneNumber:'13727940858',
                     comeTime:'2016-05-09',
                     outTime:'2016-05-11',
                     roomType:'单人房',
                     address: '上海市普陀区金沙江路 1517 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-05-01',
                     name: '王三虎',
                     bookMethod:'艺龙',
                     phoneNumber:'13727940858',
                     comeTime:'2016-05-03',
                     outTime:'2016-05-04',
                     roomType:'特价房',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-05-03',
                     name: '王四虎',
                     bookMethod:'携程',
                     phoneNumber:'13727940858',
                     comeTime:'2016-05-06',
                     outTime:'2016-05-09',
                     roomType:'大床房',
                     address: '上海市普陀区金沙江路 1516 弄'
                   },
                   {
                   	 orderId:'123456789',
                     bookDate: '2016-06-02',
                     name: '王五虎',
                     bookMethod:'百度',
                     phoneNumber:'13727940858',
                     comeTime:'2016-06-28',
                     outTime:'2016-07-06',
                     roomType:'单人房',
                     address: '上海市普陀区金沙江路 1518 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-06-04',
                     name: '王六虎',
                     bookMethod:'高德',
                     phoneNumber:'13727940858',
                     comeTime:'2016-06-22',
                     outTime:'2016-06-26',
                     roomType:'大床房',
                     address: '上海市普陀区金沙江路 1517 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-07-01',
                     name: '王七虎',
                     bookMethod:'美团',
                     phoneNumber:'13727940858',
                     comeTime:'2016-07-17',
                     outTime:'2016-07-19',
                     roomType:'单人房',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-07-03',
                     name: '王八虎',
                     bookMethod:'携程',
                     phoneNumber:'13727940858',
                     comeTime:'2016-07-25',
                     outTime:'2016-08-07',
                     roomType:'双人房',
                     address: '上海市普陀区金沙江路 1516 弄'
                   },
                   {
                   	 orderId:'123456789',
                     bookDate: '2016-08-02',
                     name: '王九虎',
                     bookMethod:'其他',
                     phoneNumber:'13727940858',
                     comeTime:'2016-08-21',
                     outTime:'2016-08-24',
                     roomType:'情侣房',
                     address: '上海市普陀区金沙江路 1518 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-08-04',
                     name: '王十虎',
                     bookMethod:'其他',
                     phoneNumber:'13727940858',
                     comeTime:'2016-08-18',
                     outTime:'2016-08-21',
                     roomType:'单人房',
                     address: '上海市普陀区金沙江路 1517 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-07-11',
                     name: '王中虎',
                     bookMethod:'美团',
                     phoneNumber:'13727940858',
                     comeTime:'2016-07-22',
                     outTime:'2016-07-26',
                     roomType:'大床房',
                     address: '上海市普陀区金沙江路 1519 弄'
                   }, {
                   	 orderId:'123456789',
                     bookDate: '2016-07-13',
                     name: '王小虎',
                     bookMethod:'艺龙',
                     phoneNumber:'13727940858',
                     comeTime:'2016-07-18',
                     outTime:'2016-07-23',
                     roomType:'单人房',
                     address: '上海市普陀区金沙江路 1516 弄'
                   }
                ],
                orderSourceValue: '', // 所选择的订单来源
                inHomeDate: '', // 入住时间
                inputComeName:'', // 入住人姓名
                homeTypeValue: '', // 房间类型
                inputHomeNumber: '', // 输入的房间号
                currentPage: 1, // 分页区域的当前目标页
			}
		},
		methods:{
           handleSizeChange(val) { // 分页区域每页显示信息条数变化事件
              let that = this;
              that.$message({
              	  message:'每页显示：'+val+' 条',
              	  type:'success'
              });
           },
           handleCurrentChange(val) { // 分页区域点击切换页面事件
              let that = this;
              that.$message({
              	  message:'跳转到：'+val+' 页',
              	  type:'success'
              });
           },
		},
		components:{

		}
	}
</script>

<style scoped>
#sortRoomSearch {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	padding: 15px 20px;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.checkedBox {
	width: 100%;
	z-index: 999;
	position: relative;
}
.checkedBox .checked {
	width: 100%;
	height: 30px;
	position: relative;
	line-height: 30px;
	margin-bottom: 5px;
}
.checkedBox .checked .cB_title {
	color: rgba(76,109,232,.8);
	display: inline-block;
	font-size: 14px;
	font-weight: 700;
	padding-left: 10px;
}
.cB_btns {
	top: 0px;
	width: 100%;
	height: 30px;
	position: absolute;
	padding-left: 100px;
	line-height: 30px;
}
.inputSearch {
	z-index: 999;
    position: relative;
	margin-top: 15px;
	padding-left: 10px;
}
.inputSearch .iS_item {
	float: left;
	width: 255px;
    height: 30px;
    position: relative;
    line-height: 30px;
}
.inputSearch .iS_itemTitle {
	color: rgba(76,109,232,.8);
	width: 80px;
	display: inline-block;
	font-size: 15px;
	font-weight: 700;
}
.orderDetailInfo {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-x: auto;
    padding-top: 220px;
    padding-bottom: 60px;
}
.orderDetailInfo .oDI_content {
	width: 100%;
	height: 100%;
	padding: 10px 15px 15px 30px;
	overflow-y: auto;
}
.paginationBox {
	position: absolute;
    width: 100%;
    height: 50px;
    left: 0px;
    bottom: 0px;
}
</style>

<style>
/* 重置 element-ui 样式  开始 */
#sortRoomSearch .el-checkbox__inner:hover,
#sortRoomSearch .el-checkbox__inner:focus
 {
    border-color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-checkbox__input.is-checked+.el-checkbox__label 
{
	color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-checkbox__input.is-checked .el-checkbox__inner, 
#sortRoomSearch .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-table .descending .sort-caret.descending
{
	border-top-color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-tag {
	color: rgba(76,109,232,.8);
	border-color: rgba(76,109,232,.2);
	background-color: rgba(76,109,232,.2);   
}
#sortRoomSearch .el-input {
	width: auto;
}
#sortRoomSearch .inputSearch .el-input__inner {
    width: 150px;
	height: 30px;
	line-height: 30px;
}
#sortRoomSearch .el-input__icon {
	line-height: 30px;
}
#sortRoomSearch .inputSearch .el-select .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#sortRoomSearch .inputSearch .selected {
    color: rgba(76,109,232,.8);
}
#sortRoomSearch .iS_item .el-select {
    top: 0px;
    left: 80px;
    width: 150px;
    position: absolute;
}
#sortRoomSearch .el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange{
	top: 0px;
    left: 85px;
    position: absolute;
}
#sortRoomSearch .el-date-editor .el-input__icon {
    line-height: 25px;
}
#sortRoomSearch .el-date-editor .el-range-separator {
	width: 6%;
	line-height: 25px;
}
#sortRoomSearch .inHomeDate .el-input__inner{
	width: 330px;
}
#sortRoomSearch .el-pagination {
  padding-top: 5px;
	padding-left: 40px;
}
#sortRoomSearch .el-pagination__sizes .el-input .el-input__inner:hover,
#sortRoomSearch .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-pager li.active,
#sortRoomSearch .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#sortRoomSearch .el-input.is-active .el-input__inner,
#sortRoomSearch .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#sortRoomSearch .paginationBox .el-pagination .el-select .el-input {
	width: 100px;
}
/* 重置 element-ui 样式  结束 */
</style>