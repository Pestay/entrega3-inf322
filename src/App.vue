<template>
  <v-app style="background-color:#05445E;">
    <div>
      <Navbar/>
      <notifications></notifications>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

  export default {
    components:
    {
      Navbar
    },
    methods: {
      disableRTL() {
        if (!this.$rtl.isRTL) {
          this.$rtl.disableRTL();
        }
      },
      toggleNavOpen() {
        let root = document.getElementsByTagName('html')[0];
        root.classList.toggle('nav-open');
      }
    },
    mounted() {
      document.title = "Sansanitos"
      this.$watch('$route', this.disableRTL, { immediate: true });
      this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
    }
  };
</script>

<style lang="scss"></style>
