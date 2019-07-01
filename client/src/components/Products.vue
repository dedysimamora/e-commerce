<template>
    <v-app>
      <advert style="margin-top:-5.3%;"></advert>
      <v-container>
        <v-layout  justify-center row wrap>
                <v-flex  xs12 md2 mx-1 my-1  v-for="product in this.$store.state.allProducts" :key="product.id">
                  <cardProduct :pd="product"></cardProduct>
                </v-flex>

        </v-layout>
      </v-container>
    </v-app>
</template>

<script>
import advert from "../components/advert"
import cardProduct from '../components/cardProduct'
export default {
  data: () => ({
  }),
  methods: {
    
  },
  components: {
    advert,
    cardProduct,
  },
  mounted () {
    this.$store.dispatch('getAllProducts')
  }
};
</script>

<style scoped>
    
</style>
