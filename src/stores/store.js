import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist';

const vueLocal = new VuexPersistence({
    storage: window.localStorage
});

const store = createStore({
    state() {
        return {
            theme: 'light'
        }
    },
    getters: {

    },
    mutations: {
        switchTheme(state) {
            state.theme === 'light'
                ? state.theme = 'dark'
                : state.theme = 'light'
        }
    },
    actions: {
        changeTheme(state) {
            state.commit('switchTheme');
        }
    },
    plugins: [vueLocal.plugin]
});

export default store;