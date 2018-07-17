import axios from 'axios';

let $api = axios.create({
    baseURL: 'http://127.0.0.1:5000/api/',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})

export default {

    state: {
        quotes: [{
            "author" : "Nigel",
            "body" : "Just do it!"
        }],
        errors: []
    },

    getters: {
        quotes: (state) => {
            return state.quotes
        }
    },

    actions: {
        fetchQuotes: function (context) {
            $api.get(`quote`)
                .then(response => response.data)
                .then((responseData) => {
                    context.commit('setQuotes', responseData)
            })
        }
    },

    mutations: {
        setQuotes: function (state, value) {
            state.quotes = value
        }
    } 
}

