<template>
	<div id="teamCheckIn">
		<div class="customInfo">
			<p class="pTitle textColor textWeight">团队入住</p>
			<div class="customType">
				<span class="spanTextColor" style="color: rgba(76,109,232,.8)">客户类型 : </span>
				<el-radio-group v-model="customType_radio">
                  <el-radio :label="1">散客</el-radio>
                  <el-radio :label="2">单位</el-radio>
                  <el-radio :label="3">中介</el-radio>
                </el-radio-group>

                <div class="cT_inputBox">

                	<el-autocomplete
                      v-model="state"
                      :fetch-suggestions="querySearchAsync"
                      placeholder="请输入中介名称/手机号码"
                      @select="handleSelect"
                    ></el-autocomplete>
                </div>
			</div>

			<div class="checkInfo_1 clearfix">
				<div class="item">
					<span class="itemTitle">入住天数</span>
					<div class="itemContent">
						<el-input-number size="mini" :min="1" v-model="inRoomDayNum"></el-input-number>
					</div>
				</div>
				<div class="item">
					<span class="itemTitle">预离日期</span>
					<div class="itemContent">
						<el-date-picker
                          v-model="outRoomTime"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
					</div>
				</div>
				<div class="item">
					<span class="itemTitle">订单来源</span>
					<div class="itemContent">
						  <el-select v-model="orderSourceValue" placeholder="请选择">
                            <el-option
                              v-for="item in orderSourceOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
					</div>
				</div>
			</div>

			<div class="checkInfo_1 clearfix">
        <div class="item">
					<span class="itemTitle">团队名称</span>
					<div class="itemContent">
						<el-input
              placeholder="请输入团队名称"
              v-model="inputTeamName"
              clearable>
            </el-input>
					</div>
				</div>
				<div class="item">
					<span class="itemTitle">操作员</span>
					<div class="itemContent">
						<el-input
              placeholder="请输入"
              v-model="operatorManName"
              clearable>
            </el-input>
					</div>
				</div>
      </div>

			<div class="checkInfo_1 clearfix">
            	<div class="item" style="width: 80%;">
					<span class="itemTitle">订单备注</span>
					<div class="itemContent">
						<el-input
                          placeholder="请输入备注信息"
                          v-model="orderNote"
                          clearable>
                        </el-input>
					</div>
				</div>
            </div>

		</div>

		<div class="orderInfo">
           <div class="oI_content scrollBar">
              <div class="clearfix">
                 <p class="pTitle textColor textWeight">房间信息</p>
                 <div class="roomInfoBox scrollBar">
						<el-table
                          :data="tableData"
                          style="width: 100%"
                          highlight-current-row
                          @current-change="handleCurrentChange"
                        >
                          <el-table-column
                            prop="roomType"
                            label="房型"
                            width="140">
                          </el-table-column>
                          <el-table-column
                            prop="roomPrice"
                            label="房价"
                            width="140">
                          </el-table-column>
                          <el-table-column
                            prop="canBookNum"
                            label="可订数"
                            width="140">
                          </el-table-column>
                          <el-table-column
                            
                            label="入住间数">
                            <span>此处应该是一个计数器</span>
                          </el-table-column>
                        </el-table>
				 </div>
				 <div class="roomScreening">
						<div class="rSTitle">
							房间筛选
						</div>
						<div class="rsChecked">
							<el-checkbox-group 
					           v-model="roomSearchCheckedList" 
				            >
                               <el-checkbox label="有窗"></el-checkbox>
                               <el-checkbox label="靠马路"></el-checkbox>
                               <el-checkbox label="干净房"></el-checkbox>
                            </el-checkbox-group>
						</div>
						<div class="showChooseRoomBox">
							<div class="sCRB_content scrollBar clearfix">
								<!--根据 canBookRoomArray 数组 for 循环生成 开始 -->
								<div 
								   class="sCRB_c_item" 
								   v-for="(item,index) in canBookRoomArray"
								   @click="chooseRoomClickEvent(item.roomNum,index)"
								   :key="item.roomNum"
								   >
									<span 
									    class="iconfont"
									    style="font-size: 18px;"
									    :class="item.roomIcon"
									    >  </span>&nbsp;&nbsp;&nbsp;
									<span class="sCRB_c_item_text" style="font-size: 15px;">
										{{item.roomType}}  {{item.roomNum}}
									</span>
								</div>
								<!-- for 循环生成 开始 -->
							</div>
						</div>
				 </div>
              </div>

              <!-- 本次排房区域  开始 -->
                <div class="checkInOperatorBox">
                	<div class="cIOB_titleBox">
                		<p>本次排房 : </p>
                		<div class="checkedBox" 
                		    v-show="Object.keys(chooseRoomTypeObj).length > 0"
                		>
                			<el-checkbox-group 
					           v-model="roomCheckedList" 
				            >
                               <el-checkbox 
                                  v-for="item in Object.keys(chooseRoomTypeObj)" 
                                  :label="item" 
                                  :key="item"
                               >
                                  {{item}} ( {{chooseRoomTypeObj[item]}} )
                              </el-checkbox>
                            </el-checkbox-group>
                            <div class="cIOB_tB_showChooseRoom clearfix scrollBar">
                            	<div 
                            	  v-for="item in Object.keys(chooseRoomTypeObj)"
                            	  @click=""
                            	 >
                                    <span 
                                       class="iconfont" 
                                       :class="byRoomTypeToIcon[item]"
                                       style="font-size: 16px;margin-right: 10px;" 
                                    ></span>
                            		{{item}}  ( {{chooseRoomTypeObj[item]}} )
                            	</div>
                            </div>
                		</div>
                	</div>
                	<div class="definedBtnBox">
                		<el-button type="primary" @click="definedCheckIn">确定入住</el-button>
                	</div>
                </div>
				<!--  本次排房区域  结束  -->
           </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'teamCheckIn',
		data(){
			return {
			   // 公共数据  开始
			   byRoomTypeToIcon:{ // 根据 "房间类型" 对应相应的 "房间icon图标"
			      "单人房": 'icon-danrenfang',
			      "情侣房": 'icon-qinglvfang',
			      "双人房": 'icon-shuangrenfang',
			      "大床房": 'icon-dachuangfang',
			      "特价房": 'icon-tejiafang',
			      "总统房": 'icon-zongtongfang',
			   },
			   // 公共数据  结束
               customType_radio: 1, // 当前入住用户的类型，默认为：1 散客
               state: '', // 用户输入的 "中介名称" 或 "手机号码"
               restaurants: [],
               state: '',
               timeout:  null,
               inRoomDayNum: 1, // 用户输入的 "入住天数"
               outRoomTime: '', // 预离日期
               orderSourceValue: '', // 订单的来源
               orderNote: '', // 当前订单的备注
               inputTeamName: '', // 团队名称
               operatorManName: '', // 操作员名称
               roomSearchCheckedList: [], // 房间筛选数组
               chooseRoomArray:[ // 存储当前用户所选择的房间
               ],
               chooseRoomTypeObj:{ // 存储当前用户所选择的房间类型对象,

               },
               canBookRoomArray: [ // 用于渲染 "房间筛选" 区域的数组
                  {
                     roomType:"单人房",
                     roomNum: '501',
                     roomIcon: 'icon-danrenfang',
                  },
                  {
                     roomType:"情侣房",
                     roomNum: '502',
                     roomIcon: 'icon-qinglvfang',
                  },
                  {
                     roomType:"双人房",
                     roomNum: '503',
                     roomIcon: 'icon-shuangrenfang',
                  },
                  {
                     roomType:"大床房",
                     roomNum: '504',
                     roomIcon: 'icon-dachuangfang',
                  },
                  {
                     roomType:"特价房",
                     roomNum: '505',
                     roomIcon: 'icon-tejiafang',
                  },
                  {
                     roomType:"总统房",
                     roomNum: '506',
                     roomIcon: 'icon-zongtongfang',
                  },
                  {
                     roomType:"特价房",
                     roomNum: '507',
                     roomIcon: 'icon-tejiafang',
                  },
                  {
                     roomType:"总统房",
                     roomNum: '508',
                     roomIcon: 'icon-zongtongfang',
                  },
                  {
                     roomType:"情侣房",
                     roomNum: '509',
                     roomIcon: 'icon-qinglvfang',
                  },
                  {
                     roomType:"双人房",
                     roomNum: '510',
                     roomIcon: 'icon-shuangrenfang',
                  },
                  {
                     roomType:"大床房",
                     roomNum: '511',
                     roomIcon: 'icon-dachuangfang',
                  },
                  {
                     roomType:"特价房",
                     roomNum: '512',
                     roomIcon: 'icon-tejiafang',
                  },
               ],
               roomCheckedList:[ // 

               ],
               orderSourceOptions:[{
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
                tableData: [
                   {
                     roomType: '双人房', 
                     roomPrice: 259,
                     canBookNum: 13,
                     chooseInNum: 0,
                   },
                   {
                     roomType: '单人房',
                     roomPrice: 169,
                     canBookNum: 3,
                     chooseInNum: 0,
                   }, 
                   {
                     roomType: '大床房',
                     roomPrice: 219,
                     canBookNum: 23,
                     chooseInNum: 0,
                   }, 
                   {
                     roomType: '情侣房',
                     roomPrice: 289,
                     canBookNum: 6,
                     chooseInNum: 0,
                   }, 
                   {
                     roomType: '总统房',
                     roomPrice: 689,
                     canBookNum: 11,
                     chooseInNum: 0,
                   }, 
                   {
                     roomType: '特价房',
                     roomPrice: 139,
                     canBookNum: 16,
                     chooseInNum: 0,
                   }, 
                ],
			}
		},
		methods: {
			handleCurrentChange(val) {
		   	// val = > 确定当前点击的是哪一行，根据所传入的 val 数据，
		   	// 到数据库中查询数据渲染左侧的 "房间搜索" 盒子
		   	let roomType = val.roomType;
             this.$message({
             	message: val,
             	type: 'success',
             	center: true
             });
             // Ajax 代码，将所获取的数据保存到 this.canBookRoomArray 中
           },
           loadAll() {
             return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "      上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"       },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306"       },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"       },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "      上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "      普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "      上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
              ];
           },
           querySearchAsync(queryString, cb) {
             var restaurants = this.restaurants;
             var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) :      restaurants;
     
             clearTimeout(this.timeout);
             this.timeout = setTimeout(() => {
               cb(results);
             }, 3000 * Math.random());
           },
           createStateFilter(queryString) {
             return (state) => {
               return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
             };
           },
           handleSelect(item) {
              console.log(item);
           },
           chooseRoomClickEvent(roomNum,index){ // 房间筛选区域的点击事件
              let that = this;
              let roomType = that.canBookRoomArray[index].roomType;
              that.chooseRoomArray.push(that.canBookRoomArray[index]);
              that.canBookRoomArray.splice(index,1);
              if (roomType in that.chooseRoomTypeObj){
              	that.chooseRoomTypeObj[roomType]++;
              } else {
              	that.chooseRoomTypeObj[roomType] = 1;
              }
              that.$message({
              	message: `roomNum is ${roomNum},index is ${index}`,
              	type: "success",
              	center: true,
              });
           },
           definedCheckIn(){ // 确定入住事件
              // 1 ）： 查看订单信息是否填写完整，若不完整，提示用户并直接 return
              // 检查信息代码...
              
              // 2 ）： 若信息填写完整，弹出 "确定入住信息" 弹框，要求用户填写 "入住人员" 的信息
              
              // 3 ）： 将数据提交的数据库，并保存
              // 数据提交代码
              
              // 4 ）： 若提交成功，则调用 "音频 提示管理员有一条新的消息"，
              //        若失败，则要求 "管理员" 重新操作
              //   语音播放代码
              
              audio.play();
           }
		},
		components: {
			
		}
	}
</script>

<style scoped>
#teamCheckIn {
	width: 99.8%;
	height: 99.8%;
	border: 1px solid rgba(76,109,232,.8);
	position: relative;
	border-radius: 8px;
	background-color: #fff;
}
.pTitle {
	width: 100%;
	height: 25px;
	border-left: 6px solid rgba(76,109,232,.8);
	padding-left: 20px;
	line-height: 25px;
    margin-bottom: 5px;
}
.customInfo {
	top: 0%;
	left: 0%;
	widht: 100%;
	height: 260px;
	z-index: 999;
	padding: 15px;
	position: relative;
}
.customInfo > div {
	margin-top: 20px;
	padding-left: 25px;
}
.customType {
	height: 25px;
	line-height: 25px;
}
.cT_inputBox {
	display: inline-block;
	margin-left: 45px;
}
.checkInfo_1 .item {
	float: left;
	width: 21%;
	height: 30px;
	position: relative;
	line-height: 30px;
	margin-right: 10px;
}
.checkInfo_1 .item .itemTitle {
	color: rgba(76,109,232,.8);
	position: relative;
	z-index: 999;
	font-size: 14px;
}
.checkInfo_1 .item .itemContent {
	top: 0px;
	left: 0px;
	width: 85%;
	height: 100%;
	position: absolute;
	padding-left: 65px;
}
.orderInfo {
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
    position: absolute;
    padding-top: 260px;
}
.oI_content {
	width: 100%;
	height: 100%;
	padding: 15px;
	position: relative;
	overflow-y: auto;
	padding-bottom: 30px;
}
.oI_content .roomInfoBox {
	float: left;
	width: 50%;
	height: 280px;
	overflow-y: auto;
}
.oI_content .roomScreening {
	float: right;
	width: 40%;
	height: 280px;
	position: relative;
	margin-right: 7%;
	border: 1px solid #e0e0e0;
}
.roomScreening .rSTitle {
   color: #c3c3c3;
   height: 40px;
   padding-left: 15px;
   font-size: 15px;
   line-height: 40px;
   font-weight: 700;
   background-color: #f2f2f2;
}
.roomScreening .rsChecked {
   color: #fff;
   height: 50px;
   padding-left: 15px;
   font-size: 15px;
   line-height: 50px;
   border-bottom: 1px solid rgba(76,109,232,.4);
}
.roomScreening .showChooseRoomBox {
	top: 0px;
	left: 0px;
    height: 100%;
    width: 100%;
    position: absolute;
    padding-top: 90px;
}
.sCRB_content {
	width: 100%;
    height: 100%;
    padding: 10px 15px;
    overflow-y: auto;
}
.sCRB_content > div:nth-child(3n-1){
	margin: 0px 5%;
}
.sCRB_c_item {
	color: #fff;
	float: left;
	width: 30%;
	height: 35px;
	cursor: pointer;
	padding-left: 20px;
	line-height: 35px;
	border-radius: 5px;
	margin-bottom: 12px;
	background-color: rgba(76,109,232,.6);
}
.sCRB_c_item:hover {
	color: rgba(76,109,232,.6);
	border: 1px solid rgba(76,109,232,.6);
	transition: all .3s linear;
	background-color: #fff;
}
.checkInOperatorBox {
	width: 100%;
	padding-top: 30px;
}
.checkInOperatorBox .cIOB_titleBox > p{
    color: rgba(76,109,232,.6);
    font-weight: 700;
}
.checkInOperatorBox .cIOB_titleBox .checkedBox {
    padding-left: 15px;
}
.checkInOperatorBox .cIOB_titleBox .cIOB_tB_showChooseRoom {
	width: 90%;
	height: 44px;
	padding: 7px 0px;
	overflow-y: auto;
	line-height: 44px;
}
.cIOB_tB_showChooseRoom > div {
	color: rgba(76,109,232,.6);
	float: left;
	width: 13%;
	height: 30px;
	cursor: pointer;
	border: 1px solid rgba(76,109,232,.6);
	font-size: 14px;
	padding-left: 8px;
	margin-left: 2%;
	line-height: 30px;
	border-radius: 5px;
}
.definedBtnBox {
	margin-top: 10px;
}
</style>

<style>
#teamCheckIn .el-radio {
   margin-top: 5px;
   margin-left: 20px;
}
#teamCheckIn .el-radio__input.is-checked+.el-radio__label {
   color: rgba(76,109,232,.8);
}
#teamCheckIn .el-radio__input.is-checked .el-radio__inner {
    border-color: rgba(76,109,232,.8);
    background: rgba(76,109,232,.8);
}
#teamCheckIn .el-radio__inner:hover {
	border-color: rgba(76,109,232,.8);
}
#teamCheckIn .cT_inputBox .el-input__inner {
	height: 25px;
	line-height: 25px;
}
#teamCheckIn .el-input.is-active .el-input__inner,
#teamCheckIn .el-input__inner:focus {
    border-color: rgba(76,109,232,.8);
}
#teamCheckIn .customInfo .el-input-number--mini{
	width: 95%;
    line-height: 25px;
    float: right;
}
#teamCheckIn .el-input-number__decrease:hover, 
#teamCheckIn .el-input-number__increase:hover {
    color: rgba(76,109,232,.8);
}
#teamCheckIn .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
#teamCheckIn .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled)
{
   border-color: rgba(76,109,232,.8);
}
#teamCheckIn .el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled),
#teamCheckIn .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled)
 {
   border-color: rgba(76,109,232,.8);
 }
#teamCheckIn .checkInfo_1 .el-date-editor.el-input,
#teamCheckIn .checkInfo_1 .el-date-editor.el-input__inner {
   width: 85%;
 }
#teamCheckIn .checkInfo_1 .el-input__inner {
 	height: 30px;
 	line-height: 30px;
 }
#teamCheckIn .checkInfo_1 .el-input__icon {
 	line-height: 30px;
 }
 #teamCheckIn .itemContent .el-radio {
    margin-left: 5px;
    margin-right: 10px;
 }
#teamCheckIn .el-checkbox__inner:hover,
#teamCheckIn .el-checkbox__inner:focus
 {
    border-color: rgba(76,109,232,.8);
}
#teamCheckIn .el-checkbox__input.is-checked+.el-checkbox__label 
{
	color: rgba(76,109,232,.8);
}
#teamCheckIn .el-checkbox__input.is-checked .el-checkbox__inner, 
#teamCheckIn .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
}
#teamCheckIn .el-button--primary,
#teamCheckIn .el-button--primary:focus,
#teamCheckIn .el-button--primary:hover {
    background: rgba(76,109,232,.8);
    border-color: rgba(76,109,232,.8);
    color: #FFF;
}
</style>