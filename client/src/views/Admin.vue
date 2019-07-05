<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
    <div>
    </div>
      <v-list dense>
        <v-list-tile @click="movePage('/admin/report')">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Report</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="movePage('/admin/editproduct')">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Edit Product</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile @click="movePage('/admin/addproduct')">
          <v-list-tile-action>
            <v-icon>edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Add New Product</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
         <v-list-tile @click="movePage('/products')">
          <v-list-tile-action>
            <v-icon>shop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Back To Website</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar height="35" app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>HACKWATCH ADMIN</v-toolbar-title>
    </v-toolbar>


    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

    
    <v-footer app fixed>
      <span></span>
    </v-footer>
  </v-app>
</template>

<script>
import AddProduct from '../components/AddProduct.vue'
  export default {
    name: 'Admin',
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    },
    components: {
        AddProduct
    },
     methods: {
      movePage(dest){
        this.$router.push(dest)
      }
      
    },
    created(){
      if(this.$store.state.userProfile.role !== "Admin"){
        this.$router.push('/products')
      }
    }
  }
</script>
