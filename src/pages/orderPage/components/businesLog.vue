<template>
   <div id="businessLog">
   	  <div class="conditionsBox">
   	     <p class="pTitle textColor textWeight">日志查看</p>
   	     <div class="logTypeBox">
   	     	<div class="lTB_leftBox FL">
   	     		<span>日志类型</span>
   	     	</div>
   	     	<div class="lTB_rightBox FR">
   	     		<div>
   	     			 <el-radio v-model="logType_radio" label="房间日志">房间日志</el-radio>
   	     			 <el-radio v-model="logType_radio" label="客人日志">客人日志</el-radio>
   	     			 <el-radio v-model="logType_radio" label="入住日志">入住日志</el-radio>
   	     			 <el-radio v-model="logType_radio" label="退房日志">退房日志</el-radio>
   	     		</div>
   	     		<div>
   	     			<el-radio v-model="logType_radio" label="账务日志">账务日志</el-radio>
   	     		</div>
   	     	</div>
   	     </div>
   	     <div class="cB_inputBox">
   	     	<span style="color: #b9b9b9;">日期：</span>
   	     	<el-date-picker
              v-model="daysValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
            <span style="color: #b9b9b9;margin-left: 30px;display:inline-block;;">客户姓名：</span>
            <el-input
              placeholder="请输入客户姓名"
              v-model="customName"
              clearable>
            </el-input>
            <span style="color: #b9b9b9;margin-left: 30px;display:inline-block;;">房号：</span>
            <el-input
              placeholder="请输入房号"
              v-model="searchRoomNum"
              clearable>
            </el-input>
   	     </div>
   	  </div>
   	  <div class="allLogContentBox">
   	  	 <div class="aLCB_logBox">
   	  	 	<div 
   	  	 	   class="logBox roomLogBox"
   	  	 	   :class="logType_radio=='房间日志'?'elementShow':'elementHidden'"
   	  	 	>
   	  	 		<div class="lB_tableBox scrollBar">
   	  	 			<el-table
                      :data="roomLogTableData"
                      style="width: 100%">
                      <el-table-column
                        prop="orderNum"
                        label="订单号"
                        width="200">
                      </el-table-column>

                      <el-table-column
                        prop="businessType" 
                        label="业务类型"
                        width="120">
                      </el-table-column>

                      <el-table-column
                        prop="businessDetail"
                        label="业务详情"
                        width="240">
                      </el-table-column>

                      <el-table-column
                        prop="roomNum"
                        label="房号"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="customName"
                        label="客户"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="operatorDate"
                        label="操作时间"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="operatorName"
                        label="操作员"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="orderNote"
                        label="备注">
                      </el-table-column>

                    </el-table>
   	  	 		</div>
   	  	 	</div>

   	  	 	<div 
   	  	 	   class="logBox customLogBox"
   	  	 	   :class="logType_radio=='客人日志'?'elementShow':'elementHidden'"
   	  	 	>
   	  	 		<div class="lB_tableBox scrollBar">
   	  	 			<el-table
                      :data="roomLogTableData"
                      style="width: 100%">

                      <el-table-column
                        prop="businessType" 
                        label="业务类型"
                        width="180">
                      </el-table-column>

                      <el-table-column
                        prop="businessDetail"
                        label="业务详情"
                        width="240">
                      </el-table-column>

                      <el-table-column
                        prop="customName"
                        label="客户"
                        width="120">
                      </el-table-column>

                      <el-table-column
                        prop="operatorDate"
                        label="操作时间"
                        width="180">
                      </el-table-column>

                      <el-table-column
                        prop="operatorName"
                        label="操作员"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="orderNote"
                        label="备注">
                      </el-table-column>

                    </el-table>
   	  	 		</div>
   	  	 	</div>

   	  	 	<div 
   	  	 	   class="logBox checkInLogBox"
   	  	 	   :class="logType_radio=='入住日志'?'elementShow':'elementHidden'"
   	  	 	>
   	  	 		<div class="lB_tableBox scrollBar">
   	  	 			<el-table
                      :data="roomLogTableData"
                      style="width: 100%">
                      <el-table-column
                        prop="orderNum"
                        label="订单号"
                        width="200">
                      </el-table-column>

                      <el-table-column
                        prop="businessType" 
                        label="业务类型"
                        width="120">
                      </el-table-column>

                      <el-table-column
                        prop="businessDetail"
                        label="业务详情"
                        width="240">
                      </el-table-column>

                      <el-table-column
                        prop="roomNum"
                        label="房号"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="customName"
                        label="客户"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="operatorDate"
                        label="操作时间"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="operatorName"
                        label="操作员"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="orderNote"
                        label="备注">
                      </el-table-column>

                    </el-table>
   	  	 		</div>
   	  	 	</div>

            <div 
               class="logBox checkOutLogBox"
               :class="logType_radio=='退房日志'?'elementShow':'elementHidden'"
            >
            	<div class="lB_tableBox scrollBar">
            		<el-table
                      :data="roomLogTableData"
                      style="width: 100%">
                      <el-table-column
                        prop="orderNum"
                        label="订单号"
                        width="200">
                      </el-table-column>

                      <el-table-column
                        prop="businessType" 
                        label="业务类型"
                        width="120">
                      </el-table-column>

                      <el-table-column
                        prop="businessDetail"
                        label="业务详情"
                        width="240">
                      </el-table-column>

                      <el-table-column
                        prop="roomNum"
                        label="房号"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="customName"
                        label="客户"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="operatorDate"
                        label="操作时间"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="operatorName"
                        label="操作员"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="orderNote"
                        label="备注">
                      </el-table-column>

                    </el-table>
            	</div>
            </div>

            <div 
               class="logBox accountsLogBox"
               :class="logType_radio=='账务日志'?'elementShow':'elementHidden'"
            >
            	<div class="lB_tableBox scrollBar">
            		<el-table
                      :data="roomLogTableData"
                      style="width: 100%">
                      <el-table-column
                        prop="orderNum"
                        label="订单号"
                        width="200">
                      </el-table-column>

                      <el-table-column
                        prop="businessType" 
                        label="业务类型"
                        width="120">
                      </el-table-column>

                      <el-table-column
                        prop="businessDetail"
                        label="业务详情"
                        width="240">
                      </el-table-column>

                      <el-table-column
                        prop="roomNum"
                        label="房号"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="customName"
                        label="客户"
                        width="100">
                      </el-table-column>

                      <el-table-column
                        prop="operatorDate"
                        label="操作时间"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="operatorName"
                        label="操作员"
                        width="140">
                      </el-table-column>

                      <el-table-column
                        prop="orderNote"
                        label="备注">
                      </el-table-column>

                    </el-table>
            	</div>
            </div>
            
            <!-- 公共分页区域  开始 -->
            <div class="paginationBox">
            	<!-- padination 是公共的，根据 logType_radio 的值，来切换查询各类日志 -->
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
            <!-- 公共分页区域  结束 -->
   	  	 </div>
   	  </div>
   </div>
</template>

<script>
	export default {
		name: 'businessLog',
		data(){
			return {
			   // padination 是公共的，根据 logType_radio 的值，来切换查询各类日志
               logType_radio: '房间日志', // 日志类型
               daysValue: '', // 
               customName: '', // 
               searchRoomNum: '', // 输入的房间号
               currentPage: 1, // 分页区域的当前目标页
               roomLogTableData: [
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  },
                  {
                    orderNum: 'argwui23q34vagber', // 订单号
                    businessType: '房态更新', // 业务类型
                    businessDetail: '林少机将房间 502 更新为脏房', // 业务详情
                    roomNum: '502', // 房间号
                    customName: '黄吉柏', // 客户名
                    operatorDate: '2020-02-11', // 操作时间
                    operatorName: '林少机', // 操作员
                    orderNote: '无', // 备注
                  }
               ],
			}
		},
		methods: {
           handleSizeChange(val) { // 分页区域每页显示信息条数变化事件
           	  // 依据 logType_radio 的值 来判断 应该查询哪张数据表
              let that = this;
              that.$message({
              	  message:'每页显示：'+val+' 条',
              	  type:'success'
              });
           },
           handleCurrentChange(val) { // 分页区域点击切换页面事件
           	  // 依据 logType_radio 的值 来判断 应该查询哪张数据表
              let that = this;
              that.$message({
              	  message:'跳转到：'+val+' 页',
              	  type:'success'
              });
           },
		},
		components: {
			
		}
	}
</script>

<style scoped>
#businessLog {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}	
.conditionsBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 200px;
	z-index: 999;
	padding: 10px 15px;
	position: relative;
}
.allLogContentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 200px;
	padding-left: 15px;
	padding-bottom: 60px;
}
.paginationBox {
	left: 0px;
	width: 100%;
    bottom: -48px;
    position: absolute;
}
.logTypeBox {
	width: 100%;
	height: 100px;
	position: relative;
}
.logTypeBox .lTB_leftBox {
	top: 0px;
	left: 0px;
    width: 120px;
    height: 100%;
    z-index: 999;
    position: relative;
}
.logTypeBox .lTB_rightBox {
    top: 0px;
	left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    padding-left: 125px;
}
.logTypeBox .lTB_rightBox > div {
	color: #e9e9e9;
	width: 100%;
	height: 50px;
	line-height: 50px;
}
.lTB_leftBox > span {
	color: rgba(76,109,232,.8);
	display: inline-block;
	margin-top: 5px;
	font-weight: 700;
	margin-left: 35px;
}
.cB_inputBox {
	width: 100%;
	height: 50px;
	line-height: 50px;
	padding-left: 35px;
}
.aLCB_logBox {
	width: 100%;
	height: 100%;
	position: relative;
}
.logBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	transition: all 3.8s;
}
.roomLogBox {
	
}
.customLogBox {
	
}
.checkInLogBox {

}
.checkOutLogBox {

}
.accountsLogBox {

}
.lB_tableBox {
	width: 100%;
	height: 100%;
	overflow-y: auto;
}
</style>

<style>
#businessLog .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#businessLog .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#businessLog .el-radio__inner:hover {
	border-color: rgba(76,109,232,.8);
}
#businessLog  .el-radio {
	margin-right: 65px;
}
#businessLog .el-range-editor.is-active,
#businessLog  .el-range-editor.is-active:hover {
	border-color: rgba(76,109,232,.8);
}
.el-picker-panel__shortcut:hover {
	color: rgba(76,109,232,.8);
}
#businessLog .el-range-editor.el-input__inner {
	margin-top: 5px;
}
#businessLog .cB_inputBox .el-input {
    width: 180px;
}
#businessLog .el-input.is-active .el-input__inner,
#businessLog .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#businessLog .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#businessLog .el-date-editor .el-range__icon,
#businessLog .el-date-editor .el-range__close-icon,
#businessLog .el-date-editor .el-range-separator
{
	line-height: 25px;
}
#businessLog .el-pagination {
    
}
#businessLog .el-pagination__sizes .el-input .el-input__inner:hover,
#businessLog .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#businessLog .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#businessLog .el-pager li.active,
#businessLog .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#businessLog .el-input.is-active .el-input__inner,
#businessLog .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
</style>