import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

const state = {
    id_bebe: null,
    nombre_bebe: null
}

const mutations = {
    setId(state, payload) {
        state.id_bebe = payload
    },
    setName(state,payload)
    {
        state.nombre_bebe = payload
    }
}

export default new Vuex.Store({
    state,
    mutations,
})