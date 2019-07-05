<template>
  <v-app id="inspire">
    <navDrawer/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footera></footera>
  </v-app>
</template>

<script>
// import loginForm from '../components/loginForm'
// import userAvatar from "../components/userAvatar"
import navDrawer from '../components/navdrawer'
// import advert from "../components/advert"
// import cardProduct from '../components/cardProduct'
import footera from '../components/footer'
export default {
  data: () => ({
  }),
  props: {
    source: String
  },
  methods: {
    
  },
  components: {
    navDrawer,
    footera
  },
  mounted () {
    this.$store.dispatch('getAllProducts')
  }
};
</script>

<style scoped>
    .clink {
    text-decoration: none;
    color: rgb(97, 165, 8);
    margin-left: 10px;
    font-size: 1rem;
    padding: 2;
  }
  .clink:hover {
    background-color: rgb(0, 255, 98);
    color : white;
    border-radius: 5px;
    padding: 8px;
  }
  .loginHome {
    color: white;
    font-size: 1000px;
  }
</style>