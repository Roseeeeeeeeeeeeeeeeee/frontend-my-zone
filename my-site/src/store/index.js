import Vuex from 'vuex'
import Vue from 'vue'
import banner from './banner'
import setting from './setting';
import about from './about';
import project from './project';

if (!window.Vuex) {
    Vue.use(Vuex);
  }

const store =  new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project
    },
    strict:true
})
window.store = store//便于测试
export default store
