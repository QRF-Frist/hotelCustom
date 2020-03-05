<template>
	<div id="putGoods">
		<div class="goodsInfo">
			<span class="gI_title">物 品 信 息</span>
			<div class="gI_itemBox">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">类型 : </span>
					<el-radio-group v-model="goodType_radio">
                        <el-radio :label="1">贵重物品</el-radio>
                        <el-radio :label="2">遗留物品</el-radio>
                    </el-radio-group>
			</div>
			<div class="gI_itemBox">
				<div class="gI-iB-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">物品名称 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入物品名称"
                          v-model="inputGoodsName"
                          clearable>
                        </el-input>
					</div>
				</div>
				<div class="gI-iB-item">
					<span class="spanTextColor" style="color: rgba(76,109,232,.8)">参考价值 : </span>
					<div class="inputItem">
						<el-input
                          placeholder="请输入物品的参考价值"
                          v-model="inputGoodsPrice"
                          clearable>
                        </el-input>
					</div>
				</div>
			</div>
		</div>
		<div class="goodsPersonInfo">
			<span class="gI_title">存 放 人 信 息</span>
			<div class="gpI_contentBox">
				<div class="gI_itemBox">
				    <span class="spanTextColor" style="color: rgba(76,109,232,.8)">客人类型 : </span>
					<el-radio-group v-model="customType_radio">
                        <el-radio :label="1">在住客人</el-radio>
                        <el-radio :label="2">离店客人</el-radio>
                        <el-radio :label="3">其他</el-radio>
                    </el-radio-group>
			    </div>
			    <div class="gI_itemBox">
				    <div class="gI-iB-item">
					    <span class="spanTextColor" style="color: rgba(76,109,232,.8)">房间号 : </span>
					    <div class="inputItem">
						    <el-input
                              placeholder="请输入房间号"
                              v-model="inputroomNum"
                              clearable>
                            </el-input>
					    </div>
				    </div>
				    <div class="gI-iB-item searchCustomInfo" style="height: 30px;width: 160px;">
					    <el-button type="primary" icon="el-icon-edit"> 选 择客 人 信 息</el-button>
				    </div>
			    </div>
			    <div class="gI_itemBox">
				    <div class="gI-iB-item">
					    <span class="spanTextColor" style="color: rgba(76,109,232,.8)">订单号 : </span>
					    <div class="inputItem">
						    <el-input
                              placeholder="请输入订单号"
                              v-model="inputOrderId"
                              clearable>
                            </el-input>
					    </div>
				    </div>
				    
				    <div class="gI-iB-item">
					    <span class="spanTextColor" style="color: rgba(76,109,232,.8)">客人姓名 : </span>
					    <div class="inputItem">
						    <el-input
                              placeholder="请输入客人姓名"
                              v-model="inputCustomName"
                              clearable>
                            </el-input>
					    </div>
				    </div>

				    <div class="gI-iB-item">
					    <span class="spanTextColor" style="color: rgba(76,109,232,.8)">电话号码 : </span>
					    <div class="inputItem">
						    <el-input
                              placeholder="请输入电话号码"
                              v-model="inputPhoneNumber"
                              clearable>
                            </el-input>
					    </div>
				    </div>

			    <div class="noteBox">
			    	<span>备 注：</span>
			    	<div class="noteContent">
			    		<el-input
                          type="textarea"
                          :rows="2"
                          placeholder="请输入内容"
                          v-model="noteText"
                          maxlength="150"
                        >
                        </el-input>
			    	</div>
			    </div>
		    </div>
		</div>
	</div>

	</div>
</template>

<script>
	export default {
		name: 'putGoods',
		data(){
			return {
               goodType_radio: '', // 物品类型
               inputGoodsName: '', // 物品名称
               inputGoodsPrice: '', // 物品的参考价值
               customType_radio: '', // 客人类型
               inputroomNum: '', // 房间号
               inputOrderId: '', // 订单号
               inputCustomName: '', // 客人姓名
               inputPhoneNumber: '', // 电话号码
               noteText: '', // 备注的内容
               searchCustomBoxVisible: false, //  
			}
		},
		methods: {

		},
		components: {

		}
	}
</script>

<style scope>
#putGoods {
	width: 100%;
	height: 340px;
	position: relative;
}
.goodsInfo {
    top: 0px;
    left: 0px;
	width: 100%;
	height: 80px;
	padding: 0px 15px;
    position: relative;
    border-top: 1px dashed rgba(76,109,232,.8);
    padding-top: 10px;
}
.gI_title {
	top: -12px;
	left: 320px;
	color: rgba(76,109,232,.8);
	width: 100px;
	height: 20px;
	display: inline-block;
	position: absolute;
	text-align: center;
	margin-right: 40px;
	background-color: #fff;
}
.gI_itemBox {
	width: 100%;
	height: 30px;
	margin-top: 5px;
}
.gI-iB-item {
	float: left;
	width: 240px;
	position: relative;
	margin-right: 20px;
}
.gI-iB-item .inputItem {
	top: 0px;
	left: 0px;
	position: absolute;
    padding-left: 80px;
}
.goodsPersonInfo {
	top: 20px;
	left: 0px;
	width: 100%;
	height: 240px;
	padding: 0px 15px;
	position: relative;
	border-top: 1px dashed rgba(76,109,232,.8);
	padding-top: 15px;
}
.gpI_contentBox {
	width: 100%;
	height: 100%;
}
.noteBox {
	color: rgba(76,109,232,.8);
	width: 100%;
	height: 110px;
	bottom: -40px;
	position: relative;
	line-height: 110px;
}
.noteBox > span {
	left: 0px;
	width: 80px;
	z-index: 999;
    position: absolute
}
.noteContent {
	width: 100%;
	height: 100%;
	position: absolute;
	padding-left: 80px;
}
</style>

<style>
#putGoods .el-input__inner {
	height: 25px!important;
	line-height: 25px!important;
}
#putGoods .searchCustomInfo .el-button--primary{
	width: 100%!important;
	height: 25px;
	line-height: 25px;
	padding-top: 0px;
}
#putGoods .searchCustomInfo .el-button--primary [class*=" el-icon-"], [class^=el-icon-]{
	line-height: 25px;
}
#putGoods .noteContent .el-textarea__inner {
   height: 110px;
   max-height: 110px;
}
#putGoods .noteContent .el-textarea__inner:focus {
   border-color: rgba(76,109,232,.8);
}
</style>