<template>
    <div>
      <v-toolbar height="35" z-index="9" color="black" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="font-weight-black">HackWatch</v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" fixed app>

      <v-container>

<v-card v-if="this.$store.state.userProfile.first_name !== ''" class="mx-auto my-2" color="white" light flat>

    <v-layout align-center column justify-center>
            <v-flex>
            <userAvatar  :howBig="120"></userAvatar>

            </v-flex>
             <v-flex  class="mt-2"> 
            <h1>
              {{this.$store.state.userProfile.first_name}}
              {{this.$store.state.userProfile.last_name}}
            </h1>
          </v-flex>
          <v-flex>
            <h6 >{{this.$store.state.userProfile.email}}</h6>  
          </v-flex>
        
    </v-layout>

        <v-layout  justify-start column class="ml-2">
          <h6 ><v-icon color="black" style="font-size:15px;">attach_money</v-icon> {{gotUserMoney}}</h6>
          <h6><v-icon color="black" style="font-size:15px;">shopping_cart</v-icon> {{totalItemOnCart}}</h6>
          
        </v-layout>
  </v-card>

  <v-layout column justify-center >

  

  <v-flex v-if="this.$store.state.userProfile.role === 'Admin'" xs12>
    <v-btn style="margin-left:30%;" @click="toAdminDashboard" small dark color="black">ADMIN DASHBOARD</v-btn>
  </v-flex>

 <v-flex v-if="this.$store.state.userProfile.first_name !== ''" xs12 >
            <v-btn small @click="logout" dark style="margin-left:30%;" color="black">Logout</v-btn>
          </v-flex>
          <v-flex v-else xs10 md6>
            <loginForm :warnaprops="'white'" :bgcolorprops="'black'" ></loginForm>
             <registerForm :warnaprops="'white'" :bgcolorprops="'black'" ></registerForm>
            </v-flex> 

              
  </v-layout>
        <v-layout v-if="this.$store.state.userProfile.first_name !== '' && this.$store.state.userProfile.role !== 'Admin'">
          <v-flex xs12 md12>

                 <v-list dense>
          <v-list-tile @click="movePage('profile')" class="menuDrawer">
            <v-list-tile-action>
              <v-icon color="black">settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Setting</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="movePage('wishlist')" class="menuDrawer">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Wish List</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="movePage('topup')" class="menuDrawer">
            <v-list-tile-action>
              <v-icon>add</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>TopUp</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile >
          <v-divider></v-divider>
          <v-list-tile @click="movePage('cart')" class="menuDrawer">
            <v-list-tile-action>
             <v-badge  color="black" right>
      <template v-slot:badge>
        <span>{{totalItemOnCart}}</span>
      </template>
      <v-icon
        color="black"
      >
        shopping_cart
      </v-icon>
    </v-badge>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Cart</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
           <v-divider></v-divider>
            </v-list>
          </v-flex>

        </v-layout>

        <v-list-tile @click="movePage('products')" class="menuDrawer">
            <v-list-tile-action>
              <v-icon>shopping_basket</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Shop</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile >


        <v-spacer></v-spacer>
        <v-layout justify-center row>
          <v-flex xs10>
            <v-text-field color="black"
            label="Search"
          ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout justify-center column>
          <v-flex xs10>
          <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Brand</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Suunto</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>G-shock</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Garmin</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Alba</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Fossil</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Timberland</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Tissot</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>South Point William</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>

          </v-flex>
        </v-layout>




        <v-layout justify-center column>
          <v-flex xs10>
          <v-list>
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>Type</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Casual</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Sport</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Smartwatch</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Formal</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </v-list>

          </v-flex>
        </v-layout>

         <v-layout justify-center column wrap>
          <h4>Price</h4>
          <v-flex xs10>
            <v-text-field color="black"
            label="From"
          ></v-text-field>
          </v-flex>

          <v-flex xs10>
            <v-text-field color="black"
            label="To"
          ></v-text-field>
          </v-flex>
          
        </v-layout>

        





      </v-container>
       
    </v-navigation-drawer>
     
    </div>
    
</template>





<script>
import loginForm from '../components/loginForm'
import registerForm from '../components/registerForm'
import userAvatar from "../components/userAvatar"
export default {
  data: () => ({
    drawer: true
  }),
  props: {
    source: String
  },
  methods: {
      movePage(dest){
        this.$router.push(`/${dest}`)
      },
      logout(){
        this.$store.commit('logout')
        this.$router.push('/products')
      },
      toAdminDashboard(){
          this.$router.push('/admin')
      }
  },
  components: {
    userAvatar,
    loginForm,
    registerForm
  },
    computed: {
       totalItemOnCart : function () {
            return this.$store.state.cart.length
       },
       gotUserMoney : function(){
         if(this.$store.state.userProfile.money === undefined){
           return 0
         } else {
           return this.$store.state.userProfile.money
         }
       }
    }
};
</script>

<style scoped>
  .menuDrawer:hover {
      cursor: pointer;
  }
</style>


