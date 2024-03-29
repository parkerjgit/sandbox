import Vue from 'vue'
import Vuex from 'vuex'
import quotes from './modules/quotes'
import projects from './modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        quotes,
        projects
    }   
});