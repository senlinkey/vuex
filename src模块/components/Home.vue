<template>
	<div>
		<h1>我是home 数据</h1>
		<p>我是store中的数据: {{home}}</p>
		<button @click="changeHome">同步 改变Home数据</button>
		<button @click="changeHome2">异步 改变Home数据</button>
		<hr>
		<h1>我是signin 数据</h1>
		<p>我是store中的数据: {{signin}}</p>
		<button @click="changeSignin">同步 改变Signin数据</button>
		<button @click="changeSignin2">异步 改变Signin数据</button>
		<hr>
		<h1>我是root 数据</h1>
		<p>我是store中的数据: {{root}}</p>
		<button @click="changeRoot">同步 改变Root数据</button>
		<button @click="changeRoot2">异步 改变Root数据</button>
		<hr>

	</div>
</template>

<script>
export default {
	created () {
		console.log(this.home);	
		console.log(this.signin);	
		console.log(this.root);	
	},
	methods: {
		changeHome(){
			// console.log(this.$store);
			this.$store.commit('changeHome', "同步改变Home");
		},
		changeHome2(){
			this.$store.dispatch('changeHome', "异步改变Home");
		}	,
		changeSignin(){
			this.$store.commit('changeSignin', "同步改变signin");
		},
		changeSignin2(){
			this.$store.dispatch('changeSignin', "异步改变signin");
		},	
		changeRoot(){
			this.$store.commit('changeRoot', "同步改变root");
		},
		changeRoot2(){
			this.$store.dispatch('changeRoot', "异步改变root");
		}	
	},
	computed: {
		home() {
			return this.$store.state.home.home;
		},
		signin(){
			return this.$store.state.signin.signin;
		},
		root(){
			return this.$store.state.root;
		}
	},
	updated () {
		// console.log(this.home);
	}
}
</script>

<style>

</style>
