<template>
	<div id="leftNav">
		<div class="avatar">
			<el-avatar :size="85" :src="userAvatarUrl"></el-avatar>
		</div>
		<div class="buttonNav">
			<div class="mainTask">
				<el-button 
				   type="primary" 
				   @click="byCkickToTargetPage('index')"
				>
			       房务管理
			   </el-button>
			</div>
			<div class="mainTask">
				<el-button type="primary">前台营业</el-button>
			</div>
			<div class="dataStatistics">
				<el-button type="primary">数据统计</el-button>
			</div>
		</div>
	</div>
</template>

<script>
   export default {
      name:'leftNav',
      data(){
         return {
             userAvatarUrl: "https://tse3-mm.cn.bing.net/th/id/OIP.l3SI2VxwsC0Lj6fcM3Ml1QAAAA?w=182&h=182&c=7&o=5&pid=1.7",
         }
      },
      methods: {
      	  byCkickToTargetPage(UrlName){
             this.$router.push({name:UrlName});
          }
      }
   }
</script>

<style scoped>
#leftNav {
	width:145px;
	height:100%;
	z-index: 999;
	position: relative;
	background-color: #fff;
}
#leftNav .avatar {
	top: 10%;
	left: 26px;
	width: 85px;
	border: 1px solid #ccc;
	cursor: pointer;
	height: 85px;
	border-radius: 50%;
	position: relative;
}
.buttonNav {
	top: 20%;
	position: relative;
}
.buttonNav div {
	margin-bottom: 10px;
}
</style>
<style>
#leftNav .el-button--primary {
	width: 100%;
	background-color: rgba(76,109,232,.8);
}
</style>
