<template>
    <v-toolbar
      color="black"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Bebés Sansanitos y Felices</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-if="getUserId != null" @click="Logout()" class="ma-2" color="black">

        <v-icon small dark >mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-toolbar>
</template>

<script>
import router from '../router'
import store from '../store'
export default ({
  methods: 
  {
    Logout() 
    {
      store.commit('setUserId', null)
      store.commit('setUserType', null)
      store.commit('setId', null)
      store.commit('setName', null)
      router.push({
        path: "/"
      })
    }
  },
  computed: 
  {
    getUserId()
    {
      return this.$store.state.id_usuario
    }

  }
})
</script>

