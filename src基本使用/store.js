/**
 * Vuex 使用
 */

/**
 * ============1, 引入===========*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * ============2, 定义===========*/

const store = new Vuex.Store({
    // 定义数据
    state:{
        name: 'Binkswine',
        age: 18,
        sex: '男'
    },
    // 同步修改数据,这里面定义的方法用于同步修改数据, 配合commit使用
    mutations: {
        changeName (state, args){
            // 定义一个方法, 用于修改name, 这里面的方发,默认有一个参数state,必填
            state.name = args;
        }
    },
    // 异步修改数据, 这里面定义的方法用于异步修改数据,配合 dispatch使用
    // 在其他组件中使用this.$store.dispatch('changeName', 'BW') 调用
    // actions中的changeName方法, 这个方法去调用 muitations中的changeName 方法更改值
    actions: {
        changeName (content, args){
            setTimeout(() => {
                content.commit('changeName', args);
            }, 5000);
        }
    }

})

/**
 * ==========3, 暴露=============*/
export default store ;

/**
 * ===== 4, 在入口文件中引入 ===== */
// import store from './store.js';
/**
 * ===== 5, 在入口文件中声明 ===== */
// var vm = new Vue({
    // store,store //给每个组件增加$store属性
// })

/**
 * ===== 6, 在任意组件中通过计算属性来进行声明 ===== */
// computed: {
//     name () {
//         在组件中就可以使用name==> store.state.name 
//         return this.$store.state.name;
//     }
// }

/**
 * ===== 7, 在任意组件中通过this.$store.commit('方法名', 参数1) 修改store中的数据 ===== */
// this.$store.commit('changeName', 'BW');

/**
 * ===== 8, 在任意组件中通过this.$store.dispatch('方法名', 参数1) 调用actions中的方法 ===== */
// this.$store.dispathc('changeName', 'BW');
// 在actions中再去调用mutations中相应的方法更改 数据
