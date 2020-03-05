<template>
   <div id="orderPage">
      <div class="topNav">
            <topNav></topNav>
        </div>
        <div class="leftNav">
            <leftNav></leftNav>
        </div>
        <!-- 这里放的是每个主页面下的子页面  开始 -->
        <div class="mainContent">
            <router-view></router-view>
        </div>
        <!-- 这里放的是每个主页面下的子页面  结束 -->
   </div>
</template>

<script>
    import topNav from "../../components/topNav.vue";
    import leftNav from "../../components/leftNav.vue";
	export default {
		name: 'orderPage',
		data(){
			return {

			}
		},
		methods: {

		},
		components: {
           topNav,
           leftNav
		}
	}
</script>

<style scoped>
#orderPage {
    width: 100%;
    height: 100%;
}
.topNav {
    height: 60px;
}
.leftNav {
    top: -60px;
    width: 145px;
    height: 100%;
    z-index: 999;
    position: relative;
}
.mainContent {
   top: 0px;
   left: 0px;
   width: 100%;
   height: 100%;
   position: absolute;
   min-width: 1240px;
   padding-top: 68px;
   padding-left: 155px;
   background-color: #f2f2f2;
}
</style>

<style>
	
</style>