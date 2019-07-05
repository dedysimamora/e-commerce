<template>
  <v-container>
    <v-layout justify-space-between row wrap>
      <v-flex xs12 md12>
        <v-layout column justify-space-between>
          <v-toolbar height="35" color="black" dark>
            <v-toolbar-title>All Product</v-toolbar-title>
          </v-toolbar>
          <v-expansion-panel popout>
            <v-expansion-panel-content
              v-for="item in this.$store.state.allProducts"
              :key="item.id"
              hide-actions
            >
              <template v-slot:header>
                <v-layout row justify-start>
                  <!-- avatar -->
                  <v-flex xs2 md2>
                    <img :src="item.productId.photo" alt="Avatar" width="50px" height="35px" />
                  </v-flex>
                  <!-- end avatar -->

                  <v-flex xs6 md6>
                    <strong>{{item.productId.name}}</strong>
                  </v-flex>

                  <v-flex xs1 md1>
                    <strong>{{item.amount}}</strong>
                  </v-flex>

                  <v-flex xs2 md2>
                    <strong>{{formatNumber(item.amount * item.productId.price )}}</strong>
                  </v-flex>

                   <v-flex xs1 md1>
                    <strong @click="deleteItemOnCart(item.productId)"><h1>☒</h1></strong>
                  </v-flex>
                </v-layout>
              </template>

              <v-card>
                <v-divider></v-divider>
                <v-card-text>{{item.productId.description}}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    totalPrice: 0
  }),
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    deleteItemOnCart(itemId){
        // alert(itemId._id)
        this.$store.dispatch('deleteUserCart', itemId._id)
    },
    checkout(){
        this.$store.dispatch('checkOutCart')
    }
  },
  created() {
    this.$store.dispatch("getUserCart")
  },
  computed: {
       getTotalPrice : function () {
            let all = 0;
            let cart = this.$store.state.cart
            for (let i = 0; i < cart.length; i++) {
                
                let peritem = cart[i].amount * cart[i].productId.price;
                all += peritem;
            }
            return all
            }
  }
};
</script>