<template>
<div>
  <v-card
    class="mx-auto"
    max-width="1080"
    style="padding-bottom:20px;padding-right:20px;padding-left:20px"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://www.casadesaude.pt/wp-content/uploads/2019/08/Teste-copy.jpg"
    ></v-img>

    <v-card-title>{{getTituloExamen}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <div class="grey--text ms-4">
          Apreciación General: (4.5)
        </div>
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>

      <div class="my-4 text-subtitle-1">
        {{getFechaExamen}}
      </div>

      <div>{{getTextoExamen}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-btn block color="primary" >
      Descargar Informe en PDF
      <v-icon>mdi-download</v-icon>
    </v-btn>

  </v-card>
</div>
</template>

<script>
  import router from '../router'
  import store from '../store'
  export default {

    computed: {
      getBabyId() {
        return this.$store.state.id_bebe
      },
      getBabyName() {
        return this.$store.state.nombre_bebe
      },
      getTituloExamen() {
        return this.$store.state.examen_titulo
      },
      getTextoExamen() {
        return this.$store.state.examen_texto_completo
      },
      getFechaExamen() {
        return this.$store.state.examen_fecha
      }
    },
  }
</script>
<style>
</style>
