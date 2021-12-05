<template>
  <v-card
    class="mx-auto"
    max-width="1080"
  >

    <v-list two-line>
        <template v-for="bebe in bebes">
            <v-list-item :key="bebe.id" >
                <v-list-item-avatar style="margin-right: 30px">
                    <v-img src="img/bebe1.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-title v-text="bebe.nombre +' '+ bebe.apellido"></v-list-item-title>
                <v-list-item-subtitle v-text="bebe.edad"></v-list-item-subtitle>          
                <v-btn icon x-large v-on:click="gotosite(bebe.id,bebe.nombre+' '+bebe.apellido)">
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item>
          
        </template>
    </v-list>
  </v-card>
</template>

<script>
  import router from '../router'
  import store from '../store'
  import Navbar from '../components/Navbar.vue'
  export default {
    components: {
      Navbar
    },

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
    computed: {
      getIdUser() {
        return this.$store.state.id_usuario
      },
      getTipoUser() {
        return this.$store.state.tipo_usuario
      }
    }
  }
</script>
