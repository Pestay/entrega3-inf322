import Vuex from 'vuex'
import Vue from "vue";

Vue.use(Vuex)

const state = {
    id_bebe: null,
    nombre_bebe: null,
    id_usuario: null,
    tipo_usuario: null,
    examen_titulo: null,
    examen_texto_completo: null,
    examen_fecha: null
}

const mutations = {
    setId(state, payload) {
        state.id_bebe = payload
    },
    setName(state,payload)
    {
        state.nombre_bebe = payload
    },
    setUserId(state, payload) {
        state.id_usuario = payload
    },
    setUserType(state, payload) {
        state.tipo_usuario = payload
    },
    setTituloExamen(state, payload) {
        state.examen_titulo = payload
    },
    setTextoExamen(state, payload) {
        state.examen_texto_completo = payload
    },
    setFechaExamen(state, payload) {
        state.examen_fecha = payload
    }
}

export default new Vuex.Store({
    state,
    mutations,
})