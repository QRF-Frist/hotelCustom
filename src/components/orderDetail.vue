<template>
	<div id="orderDetail" class="scrollBar">
		<div class="titleBox">
			<span>订单号：{{orderId||'p9283jwsjd223452jsjndc2'}}</span>
			<span>订单来源：{{orderDetailInfo.orderSource}}</span>
			<span>入住类型：{{orderDetailInfo.checkInType}}</span>
		</div>
		<div class="customInfo">
			<div class="cI_contentBox">
				<p>
					<span>客人姓名：{{orderDetailInfo.customName}}</span>
				</p>
				<p>
					<span>备注：{{orderDetailInfo.orderNote}}</span>
				</p>
				<p>
					<span>客户类型：{{orderDetailInfo.customType}}</span>
				</p>
				<p>
					<span>销售员：{{orderDetailInfo.salesmanName}}</span>
				</p>
			</div>
			<div class="cI_contentBox">
				<p>
					<span>入住天数：{{orderDetailInfo.inRoomDays}}</span>
				</p>
				<p>
					<span>手机号码：{{orderDetailInfo.phoneNumber}}</span>
				</p>
				<p>
					<span>证件类型：{{orderDetailInfo.identifierType}}</span>
				</p>
				<p>
					<span>车牌号：{{orderDetailInfo.carNumber}}</span>
				</p>
			</div>
			<div class="cI_contentBox">
				<p>
					<span>入住时间：{{orderDetailInfo.checkInDate}}</span>
				</p>
				<p>
					<span>入住方式：{{orderDetailInfo.checkInType}}</span>
				</p>
				<p>
					<span>证件号码：{{orderDetailInfo.identifierNumber}}</span>
				</p>
				<p>
					<span>房价合计：{{orderDetailInfo.roomPriceTotal}}</span>
				</p>
			</div>
			<div class="cI_contentBox">
				<p>
					<span>预离时间：{{orderDetailInfo.outerDate}}</span>
				</p>
				<p>
					<span>房号：{{orderDetailInfo.roomNum}}</span>
				</p>
				<p>
					<span>房型：{{orderDetailInfo.roomType}}</span>
				</p>
				<p>
					<span>客户住址：{{orderDetailInfo.customAddress}}</span>
				</p>
			</div>
		</div>
		<p class="pTitle textColor textWeight">账务详情</p>
        <div class="accountsDetail">
        	<el-table
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column
                fixed
                prop="ConsumptionDate"
                label="消费时间"
                width="150">
              </el-table-column>
              <el-table-column
                prop="roomNum"
                label="房号"
                width="140">
              </el-table-column>
              <el-table-column
                prop="accountsType"
                label="账务项目"
                width="140">
              </el-table-column>
              <el-table-column
                prop="accountsStatus"
                label="状态"
                width="140">
              </el-table-column>
              <el-table-column
                prop="consumptionTotal"
                label="消费"
                width="140">
              </el-table-column>
              <el-table-column
                prop="businessInfo"
                label="业务说明"
                width="140">
              </el-table-column>
              <el-table-column
                prop="accountsNote"
                label="业务备注"
                
              >
              </el-table-column>
            </el-table>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'orderDetail',
		data(){
			return {
			   orderId: '', // 订单 ID
               orderDetailInfo: { // 根据 订单ID 所获取的 详细订单数据
                  orderId: '123456789', // 订单 ID
                  orderSource: '携程', // 订单来源
                  checkInType: '全天房', // 入住类型
                  customName: '林嘉东', 
                  orderNote: '林嘉东是我儿子',
                  customType: '散客',
                  salesmanName: '钱锐锋', // 销售员
                  inRoomDays: 1, // 入住天数
                  phoneNumber: '13727940858',
                  identifierType: '居民身份证',
                  carNumber: '无', // 车牌号
                  checkInDate: '2019-02-11', // 入住时间
                  checkInType: '全天房', // 入住方式
                  identifierNumber: '44512219958854558', 
                  roomPriceTotal: '168',
                  outerDate: '2019-02-12',
                  roomNum: '509',
                  roomType: '大床房',
                  customAddress: '广东省饶平县三饶镇河口村垃圾场',
               },
               tableData: [
                  {
                    ConsumptionDate: '2016-05-03',
                    roomNum: '509',
                    accountsType: '现金退款',
                    accountsStatus: '已结',
                    consumptionTotal: '168',
                    businessInfo: '现金退款',
                    accountsNote: '',
                  },
               ]
			}
		},
		mounted(){
			let that = this;
			// 调用 byOrderIdGetOrderInfo 方法，获取数据渲染当前组件
			that.$bus.on("toGetOrderDetail",orderId => {
				that.$message({
					type: 'success',
					center: true,
					message: orderId,
				});
				that.byOrderIdGetOrderInfo(orderId);
			})
		},
		methods: {
			byOrderIdGetOrderInfo(orderId){ 
			   let that = this;
			   that.orderId = orderId;
               // 根据所传入的 orderID 到数据库中，
			   // 获取数据，并将所获取的数据保存到 orderDetailInfo 中，
			   // 根据 orderDetailInfo 中的数据，渲染当前组件
			   // Ajax 代码
			}
		}
	}
</script>

<style scoped>
#orderDetail {
	top: 0px;
	left: 0px;
	color: #999;
	width: 100%;
	height: 360px;
	position: relative;
	overflow-y: auto;
	padding-right: 10px;
}
.titleBox {
	height: 45px;
	line-height: 45px;
	border-bottom: 1px solid rgba(76,109,232,.8);
}
.titleBox > span {
	display: inline-block;
	margin-right: 15px;
}
.customInfo {
	width: 100%;
	height: 160px;
	padding: 10px 0px;
	border-bottom: 1px solid rgba(76,109,232,.8);
	margin-bottom: 20px;
}
.customInfo .cI_contentBox {
	float: left;
    width: 22%;
    height: 100%;
    margin-right: 4%;
}
.customInfo .cI_contentBox:last-child {
	margin-right: 0px;
}
.customInfo .cI_contentBox > p {
	height: 32px;
	line-height: 32px;
	margin-bottom: 0px;
	overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.customInfo .cI_contentBox > p span {
	float: left;
}
</style>

<style>
	
</style>