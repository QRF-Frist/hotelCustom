<template>
   <div id="roomStatusLog">
      <div class="rS_searchBox">
      	 <div class="rS_sB">
      	 	<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">变更时间 : </span>
				<el-radio-group v-model="changeStatus_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">昨日</el-radio>
                  <el-radio :label="3">今天</el-radio>
                  <el-radio :label="4">这周</el-radio>
                  <el-radio :label="5">最近七天</el-radio>
                  <el-radio :label="6">这个月</el-radio>
                </el-radio-group>
			</div>
      	 </div>
      	 <div class="rS_sB">
      	 	<div class="radioBox">
                <div class="rB-searchBox">
					<span class="rB-sB_title">房 号：</span>
					<div class="rB-sB_inputBox">
						<el-input
                          placeholder="请输入房号"
                          v-model="inputRoomNum"
                          >
                        </el-input>
					</div>
				</div>
      		</div>
      		<div class="radioBox">
                <div class="rB-searchBox">
					<span class="rB-sB_title">管理员：</span>
					<div class="rB-sB_inputBox">
						<el-input
                          placeholder="请输入管理员"
                          v-model="inputManager"
                          >
                        </el-input>
					</div>
				</div>
      		</div>
      	 </div>
      </div>
      <div class="rS_contetnBox">
      	 <div class="contentBox scrollBar">
      	 	<el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="changeDate"
                label="变更时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="roomNum"
                label="房间号"
                width="120">
              </el-table-column>

              <el-table-column
                prop="oldStatus"
                label="原状态"
                width="160">
              </el-table-column>

              <el-table-column
                prop="newStatus"
                label="新状态"
                width="160">
              </el-table-column>

              <el-table-column
                prop="operatorMan"
                label="管理员"
                width="140">
              </el-table-column>

              <el-table-column
                prop="notes"
                label="备注">
              </el-table-column>
            </el-table>
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
   </div>
</template>

<script>
	export default {
		name: 'roomStatusLog',
		data(){
			return {
               changeStatus_radio: '', // 房态的变更时间
               inputRoomNum: '', // 房号
               inputManager: '', // 管理员姓名
               currentPage: 1,
               tableData: [
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 },
                 {
                 	changeDate: '2020-03-02',
                 	roomNum: '503',
                 	oldStatus: '在住脏房',
                 	newStatus: '在住干净房',
                 	operatorMan: '钱锐锋',
                 }
               ]
			}
		},
		methods: {
           handleSizeChange(){

           },
           handleCurrentChange(){

           },

		},
		components: {

		}
	}
</script>

<style scoped>
#roomStatusLog {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.rS_searchBox {
	width: 100%;
	height: 80px;
	z-index: 999;
	padding-left: 15px;
	position: relative;
}
.rS_contetnBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 90px;
	padding-left: 15px;
	padding-bottom: 60px;
}
.rS_sB {
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.rB-searchBox {
	width: 270px;
	height: 30px;
	display: inline-block;
	position: relative;
	line-height: 30px;
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
	position: absolute;
	padding-left: 65px;
}
.radioBox {
	float: left;
	height: 30px;
	line-height: 30px;
}
.contentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
    position: relative;
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
#roomStatusLog .el-radio-group{
    margin-top: 7px;
    margin-left: 15px;
}
#roomStatusLog .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#roomStatusLog .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#roomStatusLog .el-radio__inner:hover {
	border-color: rgba(76,109,232,.8);
}
#roomStatusLog .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#roomStatusLog .el-input.is-active .el-input__inner,
#roomStatusLog .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#roomStatusLog .el-pagination {
    padding-top: 3px;
	padding-left: 40px;
}
#roomStatusLog .el-pagination__sizes .el-input .el-input__inner:hover,
#roomStatusLog .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#roomStatusLog .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#roomStatusLog .el-pager li.active,
#roomStatusLog .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
</style>