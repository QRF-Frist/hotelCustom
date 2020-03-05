<template>
	<div id="bookManage">

		<div class="checkedBox">
			<div class="checked">
				<span class="cB_title">
					预定时间:
				</span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="bookTimeCheckedList" 
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
				<span class="cB_title">
					预抵时间:
				</span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="comeTimeCheckedList" 
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
				<span class="cB_title">
					预定方式:
				</span>
				<div class="cB_btns">
					<el-checkbox-group 
					   v-model="bookMethodCheckedList" 
					   :max="1"
				    >
				      <el-checkbox label="全部"></el-checkbox>
                      <el-checkbox label="美团"></el-checkbox>
                      <el-checkbox label="携程"></el-checkbox>
                      <el-checkbox label="艺龙"></el-checkbox>
                      <el-checkbox label="闪住"></el-checkbox>
                      <el-checkbox label="其他"></el-checkbox>
                    </el-checkbox-group>
				</div>
			</div>
		</div>

		<div class="orderDetailInfo scrollBar">
			<div class="scrollBar">
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
		name : "bookManage",
		data(){
			return {
				bookTimeCheckedList:[], // 用户在 "预定时间" 里所选择的类别
				comeTimeCheckedList:[], // 用户在 "预抵时间" 里所选择的类别
				bookMethodCheckedList:[], // 用户在 "预定方式" 里所选择的类别
				currentPage: 1, // 分页区域的当前目标页
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
                ]
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
           toEditCustomInfo(orderId){ 
              let that = this;
              that.$message({
              	   message:"edit: "+orderId,
              	   type:'success'
              });
           },
           toDeleteCustomInfo(orderId){
              let that = this;
              that.$message({
              	   message:"delete: "+orderId,
              	   type:'warning'
              });               
           }
		},
		components:{

		},
	}
</script>

<style scoped>
#bookManage {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	pad2016-0-ding: 15px 20px;
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
	height: 35px;
	position: relative;
	line-height: 35px;
	margin-bottom: 8px;
}
.checkedBox .checked .cB_title {
	color: rgba(76,109,232,.8);
	display: inline-block;
	font-weight: 700;
	padding-left: 10px;
}
.cB_btns {
	top: 0px;
	width: 100%;
	height: 35px;
	position: absolute;
	padding-left: 100px;
	line-height: 35px;
}
.orderDetailInfo {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	overflow-x: auto;
	padding-top: 140px;
	padding-bottom: 60px;
}
.orderDetailInfo .scrollBar {
	width: 100%;
	height: 100%;
	min-width: 1110px;
	padding: 10px 15px 15px 30px;
	overflow: auto;
	
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
/* 重置 element-ui 样式  开始 */
#bookManage .el-checkbox__inner:hover,
#bookManage .el-checkbox__inner:focus
 {
    border-color: rgba(76,109,232,.8);
}
#bookManage .el-checkbox__input.is-checked+.el-checkbox__label 
{
	color: rgba(76,109,232,.8);
}
#bookManage .el-checkbox__input.is-checked .el-checkbox__inner, 
#bookManage .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#bookManage .el-table .descending .sort-caret.descending
{
	border-top-color: rgba(76,109,232,.8);
}
#bookManage .el-tag {
	color: rgba(76,109,232,.8);
	border-color: rgba(76,109,232,.2);
	background-color: rgba(76,109,232,.2);
    
}
#bookManage .el-pagination {
  padding-top: 5px;
	padding-left: 40px;
}
#bookManage .el-pagination__sizes .el-input .el-input__inner:hover,
#bookManage .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#bookManage .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#bookManage .el-pager li.active,
#bookManage .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#bookManage .el-input.is-active .el-input__inner,
#bookManage .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
/* 重置 element-ui 样式  结束 */
</style>