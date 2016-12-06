<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<h1>{{msgFromFather}}</h1>
		<button v-on:click="onClickMe">Click!</button>
	</div>
</template>
<script>
export default{
	data: function(){
		return{
			msg: 'Hello from component_msg'
		}
	},
	props:['msgFromFather'],
	methods:{
		onClickMe: function(){
			this.msg = this.msgFromFather
		}
	}
}
</script>
<!-- Add 'scoped' attribute to limit CSS to this compoent only -->
<style scoped>
h1{
	color:#42b983;
}
</style>