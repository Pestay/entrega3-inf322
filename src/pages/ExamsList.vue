<template>
  <v-card
    class="mx-auto"
    max-width="1080"
  >
    <v-list two-line>
        <template v-for="examen in examenes">
          <i :key="examen.id_examen" v-if="examen.id_bebe == getBabyId">
            <v-list-item :key="examen.id_examen">
                <v-list-item-title  style= "font-size: 18px;" v-text="examen.titulo"></v-list-item-title>
                <v-list-item-title v-text="examen.fecha"></v-list-item-title>
                <v-list-item-subtitle style = "margin-right: 100px;" v-text="examen.texto_reducido"></v-list-item-subtitle>
                <v-btn icon x-large v-on:click="gotosite(examen.titulo, examen.texto_completo, examen.fecha)">
                   <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
                <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item>
          </i>
        </template>
    </v-list>
  </v-card>
</template>

<script>
  import router from '../router'
  import store from '../store'
  export default {


    data() {
      return {
        examenes: [
          {
            id_examen: 1,
            id_bebe: 1,
            titulo: "Examen Mensual",
            texto_reducido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
            texto_completo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            fecha: "2021-12-02"
          },
          {
            id_examen: 2,
            id_bebe: 1,
            titulo: "Examen Mensual",
            texto_reducido: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam ...",
            texto_completo: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
            fecha: "2021-11-05"
          },
          {
            id_examen: 3,
            id_bebe: 1,
            titulo: "Examen Mensual",
            texto_reducido: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?...",
            texto_completo: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            fecha: "2021-10-07"
          },
          {
            id_examen: 4,
            id_bebe: 2,
            titulo: "Examen Mensual",
            texto_reducido: "Morbi tincidunt vulputate tortor, quis tincidunt dolor aliquet eu. Proin vitae tellus eget leo imperdiet dictum nec id eros. Maecenas quam turpis, aliquet in velit sed, semper iaculis sapien. Duis posuere faucibus tellus, vel ullamcorper urna porta vitae. Ut mattis ligula eu lectus tincidunt, at commodo risus vestibulum...",
            texto_completo: "Morbi tincidunt vulputate tortor, quis tincidunt dolor aliquet eu. Proin vitae tellus eget leo imperdiet dictum nec id eros. Maecenas quam turpis, aliquet in velit sed, semper iaculis sapien. Duis posuere faucibus tellus, vel ullamcorper urna porta vitae. Ut mattis ligula eu lectus tincidunt, at commodo risus vestibulum. Cras rhoncus odio non odio fermentum convallis. Vivamus sed nibh dictum, lobortis dui vitae, fermentum lacus. Phasellus ut tempus risus. Nulla sodales felis orci, eget viverra lectus rhoncus id. Praesent sagittis nisl sit amet ex malesuada, sed accumsan arcu euismod. Vestibulum malesuada, augue fermentum dapibus venenatis, libero augue porttitor ligula, eu dictum tellus ante interdum leo. Suspendisse potenti. Pellentesque porttitor, ligula et feugiat egestas, nibh justo feugiat nibh, sed suscipit nisl arcu at mauris. Nulla in feugiat purus.",
            fecha: "2021-12-05"
          },
          {
            id_examen: 5,
            id_bebe: 2,
            titulo: "Examen Mensual",
            texto_reducido: "Nulla facilisi. Morbi sollicitudin sem et justo pellentesque, nec sollicitudin quam condimentum. Donec ultricies venenatis tellus, fermentum posuere elit gravida ac. Ut ornare posuere arcu vitae commodo. Integer accumsan lectus sit amet turpis viverra accumsan. Quisque lobortis lorem metus, at mollis diam luctus in...",
            texto_completo: "Nulla facilisi. Morbi sollicitudin sem et justo pellentesque, nec sollicitudin quam condimentum. Donec ultricies venenatis tellus, fermentum posuere elit gravida ac. Ut ornare posuere arcu vitae commodo. Integer accumsan lectus sit amet turpis viverra accumsan. Quisque lobortis lorem metus, at mollis diam luctus in. Aliquam ut massa commodo, finibus odio eget, tristique orci. Maecenas sed commodo purus. Nunc ac ultricies nibh, vel sollicitudin dolor. Nullam aliquet odio leo, ut hendrerit eros pellentesque et. Vestibulum malesuada lacus vel nisl vehicula scelerisque. Etiam elementum urna vel convallis aliquam. Sed congue, ipsum at mollis finibus, erat erat auctor felis, tempus porttitor nibh nisi ac augue. Praesent rutrum imperdiet sem vitae dictum.",
            fecha: "2021-11-18"
          },
          {
            id_examen: 6,
            id_bebe: 2,
            titulo: "Examen Mensual",
            texto_reducido: "Nulla finibus rhoncus sem, id porta diam efficitur non. Maecenas dapibus urna elementum, commodo nisl quis, aliquet libero. Nulla enim felis, laoreet id neque ut, mollis lobortis augue....",
            texto_completo: "Nulla finibus rhoncus sem, id porta diam efficitur non. Maecenas dapibus urna elementum, commodo nisl quis, aliquet libero. Nulla enim felis, laoreet id neque ut, mollis lobortis augue. Quisque dolor elit, accumsan efficitur tellus nec, eleifend convallis nisl. Donec feugiat mattis tortor, ac malesuada elit congue lobortis. Cras dignissim ipsum vitae eros consequat, nec porta ligula molestie. Mauris et venenatis risus, ac varius urna. Phasellus velit lectus, gravida ut metus pulvinar, pellentesque accumsan ex. Aliquam dignissim mi ut turpis vulputate, in blandit felis accumsan. Morbi turpis erat, commodo sit amet turpis quis, luctus interdum risus. Cras feugiat, tortor sit amet scelerisque lacinia, eros nisl molestie magna, sed imperdiet lorem felis at ligula. Cras elit ex, fermentum ac rutrum eu, faucibus eu ex.",
            fecha: "2021-10-14"
          }
        ],
        
      }
    },
    computed: {
      getBabyId() {
        return this.$store.state.id_bebe
      },
    },
    methods : {
        gotosite(examen_titulo, examen_texto_completo, examen_fecha){
          store.commit('setTituloExamen',examen_titulo)
          store.commit('setTextoExamen',examen_texto_completo)
          store.commit('setFechaExamen',examen_fecha)
          router.push({
            path:"/particular-exam",
          })
          
        },
    },
  }
</script>