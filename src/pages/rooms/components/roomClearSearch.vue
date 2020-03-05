<template>
   <div id="roomClearSearch">
      <div class="rCS_searchBox">
      	 <div class="sB_itemBox">
      	 	<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">变更时间 : </span>
				<el-radio-group v-model="changeDate_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">昨日</el-radio>
                  <el-radio :label="3">今天</el-radio>
                  <el-radio :label="4">这周</el-radio>
                  <el-radio :label="5">最近七天</el-radio>
                  <el-radio :label="6">这个月</el-radio>
                </el-radio-group>
			</div>
			<el-date-picker
              v-model="changeDateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
      	 </div>
      	 <div class="sB_itemBox">
      	 	<div class="radioBox inputBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房 号 : </span>
				<div class="iB_itemBox">
					<el-input
                      placeholder="请输入房号"
                      v-model="inputRoomNum"
                      clearable>
                    </el-input>
				</div>
			</div>
			<div class="radioBox inputBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房扫人员 : </span>
				<div class="iB_itemBox">
					<el-input
                      placeholder="请输入房扫人员"
                      v-model="inputclearMan"
                      clearable>
                    </el-input>
				</div>
			</div>
			<div class="radioBox inputBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房型 : </span>
				<div class="iB_itemBox">
					<el-input
                      placeholder="请输入房间的类型"
                      v-model="inputRoomType"
                      clearable>
                    </el-input>
				</div>
			</div>
      	 </div>
      </div>
      <div class="rCS_contentBox">
      	 <div class="contentBox scrollBar">
      	 	<el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="clearDate"
                label="房扫时间"
                width="200">
              </el-table-column>
              <el-table-column
                prop="clearMan"
                label="房扫人员"
                width="120">
              </el-table-column>

              <el-table-column
                prop="roomNum"
                label="房号"
                width="160">
              </el-table-column>

              <el-table-column
                prop="roomType"
                label="房型"
                width="160">
              </el-table-column>

              <el-table-column
                prop="operatorMan"
                label="操作员"
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
		name: 'roomClearSearch',
		data(){
			return {
			   changeDate_radio: '', // 房态变更的时间
			   changeDateRange: '', // 房态变更的时间的范围
               currentPage: 1,
               inputRoomNum: '', // 要查询的房号
               inputclearMan: '', // 房扫人员
               inputRoomType: '', // 房间类型
               tableData: [
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 },
                 {
                 	clearDate: '2020-03-02',
                 	clearMan: '计时东',
                 	roomNum: '503',
                 	roomType: '双人房',
                 	operatorMan: '钱锐锋',
                 	notes: '这里是备注消息111222333444'
                 }
               ]
			}
		},
		methods: {
           handleSizeChange(){

           },
           handleCurrentChange(){

           }
		},
		components: {

		}
	}
</script>

<style scoped>
#roomClearSearch {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.rCS_searchBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 80px;
	z-index: 999;
	position: relative;
	padding-left: 15px;
}
.sB_itemBox {
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.rCS_contentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 90px;
	padding-bottom: 60px;
}
.radioBox {
	float: left;
	height: 40px;
	line-height: 40px;
}
.inputBox {
	width: 260px;
	margin-right: 25px;
	position: relative;
}
.iB_itemBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 40px;
	position: absolute;
	line-height: 40px;
	padding-left: 80px;
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
#roomClearSearch .el-pagination {
    padding-top: 3px;
	padding-left: 40px;
}
#roomClearSearch .el-pagination__sizes .el-input .el-input__inner:hover,
#roomClearSearch .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#roomClearSearch .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#roomClearSearch .el-pager li.active,
#roomClearSearch .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#roomClearSearch .el-radio-group{
    margin-top: 7px;
    margin-left: 15px;
}
#roomClearSearch .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#roomClearSearch .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#roomClearSearch .el-radio__inner:hover {
	border-color: rgba(76,109,232,.8);
}
#roomClearSearch .sB_itemBox .el-input__inner {
    height: 30px;
    margin-top: 5px;
    line-height: 30px;
    margin-left: 25px;
}
#roomClearSearch .el-date-editor .el-range__icon,
#roomClearSearch .el-date-editor .el-range-separator,
#roomClearSearch .el-date-editor .el-range__close-icon
{
	line-height: 25px;
}
#roomClearSearch .iB_itemBox  .el-input__inner{
    margin: 0px;
}
#roomClearSearch .el-input.is-active .el-input__inner,
#roomClearSearch .el-input__inner:focus
{
	border-color: rgba(76,109,232,.8);
}
</style>