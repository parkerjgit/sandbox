import axios from 'axios';

let $api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})

export default {

    state: {
        projects: [{
            "id" : 19384765,
            "name" : "This is a Project!"
        }],
        errors: []
    },

    getters: {
        projects: (state) => {
            return state.projects
        }
    },

    actions: {
        fetchProjects: function (context) {
            $api.get(`projects`)
                .then(response => response.data)
                .then((responseData) => {
                    context.commit('setProjects', responseData)
            })
        }
    },

    mutations: {
        setProjects: function (state, value) {
            state.projects = value.projects
        }
    } 
}

