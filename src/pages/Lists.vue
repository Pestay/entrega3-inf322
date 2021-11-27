<template>
  <v-card
    class="mx-auto"
    max-width="1080"
  >
    <v-toolbar
      color="pink"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Bebés Sansanitos y Felices</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="bebe in bebes">
            <v-list-item :key="bebe.id" v-on:click="gotosite(bebe.id,bebe.nombre+' '+bebe.apellido)">
                <v-list-item-avatar style="margin-right: 30px">
                    <v-img src="img/bebe1.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-title v-text="bebe.nombre +' '+ bebe.apellido"></v-list-item-title>
                <v-list-item-subtitle v-text="bebe.edad"></v-list-item-subtitle>
                <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item>
          
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  import router from '../router'
  import store from '../store'
  export default {


    data: () => ({
      selected: [2],
      bebes: [
        {
            id: 1,
            nombre: "Carlos",
            apellido: "Buil",
            edad: "24 meses",
            sexo: "M"
        },
        {
            id: 2,
            nombre: "María Cristina",
            apellido: "Riff",
            edad: "24 meses",
            sexo: "F"
        }
      ],
    }),
    methods : {
        gotosite(baby_id,baby_name){
          store.commit('setId',baby_id)
          store.commit('setName',baby_name)
          router.push({
            path:"/info",
          })
          
        },
    },
  }
</script>
