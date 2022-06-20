import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: "https://api.edamam.com/search",
    },
    getters: {},
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: "1079d6da",
                        app_key: "ee5f76965f2802fe8923164a80813b4a",
                        from: 0,
                        to: 9,
                    },
                });
                commit("setRecipes", response.data.hits);
            } catch (error) {
                commit("setRecipes", []);
            }
        },
    },
    modules: {},
});
