<template>
	<div>
		<h1>我是home 组件</h1>
		<p>我是store中的数据{{name}}</p>
		<button @click="changeName">同步 改变数据</button>
		<button @click="changeName2">异步 改变数据</button>
	</div>
</template>

<script>
export default {
	created () {
		console.log(this.name);	
	},
	methods: {
		changeName(){
			this.$store.commit('changeName', "BW");
		},
		changeName2(){
			this.$store.dispatch('changeName', "Binkw");
		}	
	},
	computed: {
		name() {
			return this.$store.state.name;
		}
	},
	updated () {
		console.log(this.name);
	}
}
</script>

<style>

</style>
