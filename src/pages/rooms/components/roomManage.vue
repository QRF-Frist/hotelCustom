<template>
   <div id="roomManage">
      <div class="rM_searchBox">
      	<div class="rM_sB">
      		<div class="radioBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">房 态 : </span>
				<el-radio-group v-model="roomStatus_radio">
                  <el-radio :label="1">全部</el-radio>
                  <el-radio :label="2">空净</el-radio>
                  <el-radio :label="3">空脏</el-radio>
                  <el-radio :label="4">住人净</el-radio>
                  <el-radio :label="5">住人脏</el-radio>
                  <el-radio :label="6">维修房</el-radio>
                  <el-radio :label="7">锁房</el-radio>
                  <el-radio :label="8">解锁</el-radio>
                  <el-radio :label="9">维修结束</el-radio>
                </el-radio-group>
			</div>
      	</div>
      	<div class="rM_sB">
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
					<span class="rB-sB_title">房 型：</span>
					<div class="rB-sB_inputBox">
						<el-input
                          placeholder="请输入房 型"
                          v-model="inputRoomType"
                          >
                        </el-input>
					</div>
				</div>
      		</div>
      		<div class="radioBox">
                <div class="rB-searchBox">
					<span class="rB-sB_title">楼 层：</span>
					<div class="rB-sB_inputBox">
						<el-input
                          placeholder="请输入楼 层"
                          v-model="inputRoomLevel"
                          >
                        </el-input>
					</div>
				</div>
      		</div>
      	</div>
      	<div class="rM_sB">
      		<span class="spanTextColor" style="color: rgba(76,109,232,.8)">批量操作 : </span>
      		<el-button-group>
              <el-button type="primary" size="mini"><i class="iconfont icon-ganjing"></i>  置净</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-czIcon-dirtyRoom"></i>  置脏</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-weixiu"></i>  维修</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-beizhu"></i>  房间备注</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-czIcon-LOCK_HOUSE"></i>  锁房</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-jiesuo"></i>  锁房结束</el-button>
              <el-button type="primary" size="mini"><i class="iconfont icon-yixiuhao"></i>  维修结束</el-button>
            </el-button-group>
      	</div>
      </div>
      <div class="rM_contentBox">
      	<div class="contentBox scrollBar">
      		<el-table
              ref="multipleTable"
              :data="roomTableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55" 
                >
              </el-table-column>
              <el-table-column
                label="房号"
                width="100">
                <template slot-scope="scope">{{ scope.row.roomNum }}</template>
              </el-table-column>

              <el-table-column
                prop="roomLevel"
                label="楼层"
                width="100">
                <template slot-scope="scope">{{ scope.row.roomLevel }}</template>
              </el-table-column>

              <el-table-column
                prop="roomStatus"
                label="房态"
                width="100">
                <template slot-scope="scope">{{ scope.row.roomStatus }}</template>
              </el-table-column>

              <el-table-column
                prop="roomType"
                label="房型"
                width="100">
                <template slot-scope="scope">{{ scope.row.roomType }}</template>
              </el-table-column>

              <el-table-column
                prop="roomStatus"
                label="房间备注"
                width="240">
                <template slot-scope="scope">{{ scope.row.notes }}</template>
              </el-table-column>

              <el-table-column
                prop="repairText"
                label="维修原因"
                width="240">
                <template slot-scope="scope">{{ scope.row.repairText }}</template>
              </el-table-column>

              <el-table-column
                prop="lockText"
                label="锁房原因"
                show-overflow-tooltip>
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
		name: 'roomManage',
		data(){
			return {
               roomStatus_radio: '', // 房态
               inputRoomNum: '', // 房号
               inputRoomType: '', // 房型
               inputRoomLevel: '', // 楼层
               currentPage: 1, // 当前页面
               roomTableData: [
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }, 
                 {
                   roomNum: '501',
                   roomLevel: 5,
                   roomStatus: '空净',
                   roomType: '大床房',
                   notes: '这是房间的备注内容',
                   repairText: '这里记录的是房间的维修原因',
                   lockText: '这里记录的是房间上锁的原因',
                 }
               ],
               multipleSelection: []
			}
		},
		methods: {
           handleSizeChange(){

           },
           handleCurrentChange(){

           },
           handleSelectionChange(val) {
             this.multipleSelection = val;
             console.log(this.multipleSelection);
           }
		},
		components: {

		}
	}
</script>

<style scoped>
#roomManage {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.rM_searchBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 130px;
	z-index: 999;
	position: relative;
	padding-top: 10px;
	padding-left: 15px;
}
.rM_sB {
	width: 100%;
	height: 40px;
	line-height: 40px;
}
.radioBox {
	float: left;
	height: 30px;
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
.rM_sB iconfont {
	display: inline-block;
    font-size: 14px!important;
    margin-right: 3px;
}
.rM_contentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	position: absolute;
	padding-top: 140px;
	padding-bottom: 60px;
}
.contentBox {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
    position: relative;
    overflow-y: auto;
    background-color: rgba(76,109,232,.2);
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
#roomManage .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#roomManage .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#roomManage .el-radio__inner:hover {
	customAccountSearch-color: rgba(76,109,232,.8);
}
#roomManage .el-radio-group{
    margin-top: 7px;
    margin-left: 15px;
}
#roomManage .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#roomManage .el-input.is-active .el-input__inner,
#roomManage .el-input__inner:focus {
	border-color: rgba(76,109,232,.8);
}
#roomManage .el-button--mini {
    padding: 3px 10px;
    margin-left: 15px;
    border-radius: 3px;
    position: relative;
}
#roomManage .el-button--primary {
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#roomManage .el-pagination {
    padding-top: 3px;
	padding-left: 40px;
}
#roomManage .el-pagination__sizes .el-input .el-input__inner:hover,
#roomManage .el-select .el-input__inner:focus{
	border-color: rgba(76,109,232,.8);
}
#roomManage .el-select-dropdown__item.selected {
	color: rgba(76,109,232,.8);
}
#roomManage .el-pager li.active,
#roomManage .el-pager li:hover
{
    color: rgba(76,109,232,.8);
}
#roomManage .el-input__inner {
	height: 30px;
	line-height: 30px;
}
#roomManage .el-input__suffix {
    line-height: 25px;
}
#roomManage .el-date-editor .el-range-separator,
#roomManage .el-input__icon {
 	line-height: 25px;
}
#roomManage .el-select .el-input__inner:focus,
#roomManage .el-input.is-active .el-input__inner, 
#roomManage .el-input__inner:focus,
#roomManage .el-range-editor.is-active, 
#roomManage .el-range-editor.is-active:hover
{
	border-color: rgba(76,109,232,.8);
}

#roomManage .el-checkbox__input.is-checked .el-checkbox__inner,
#roomManage .el-checkbox__input.is-indeterminate .el-checkbox__inner
{
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#roomManage .el-checkbox__inner:hover {
	border-color: rgba(76,109,232,.8);
}
</style>