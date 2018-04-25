/**
 * Vuex 使用
 */

/**
 * ============1, 引入===========*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * ============2, 定义-模块 ===========*/
const home = {
    state: {
        home: '我是home模块数据'
    },
    mutations: {
        // 模块内部还是一样的
        changeHome (state, args) {
            return state.home = args;
        }
    },
    actions: {
        // 模块内部访问根节点状态context.rootState
        // changeHome({state, commit, rootState}, playload)
        changeHome (context, args) {
            setTimeout(() => {
                context.commit('changeHome', args);
            }, 2000);
        }
    }
}

const signin = {
    state: {
        signin: "我是signin模块数据"
    },
    mutations: {
        // 模块内部还是一样的
        changeSignin (state, args) {
            return state.signin = args;
        }
    },
    actions: {
        changeSignin (context, args) {
            setTimeout(() => {
                context.commit('changeSignin', args);
            }, 2000);
        }
    }
}

const store = new Vuex.Store({
    modules: {
        home: home,
        signin: signin
    },
    state: {
        root: "我是根节点数据"
    },
    mutations: {
        changeRoot (state, args) {
            return state.root = args;
        }
    },
    actions: {
        changeRoot(context, args){
            setTimeout(() => {
                context.commit('changeRoot', args);
            }, 2000);
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
