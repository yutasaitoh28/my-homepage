<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="toggleSideMenu"> </v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>MY HOMEPAGE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <SideNav />

    <v-content>
      <router-view/>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SideNav from './components/SideNav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    SideNav,
    Footer
  },
  data () {
    return {
      //
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
   }
}
</script>

<style lang="sass">

</style>


