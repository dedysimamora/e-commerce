<template>
  <v-layout row xs12>
    <v-flex justify-center>
      <v-avatar :size="howBig" >
        <img :src="this.$store.state.userProfile.avatar" alt="John" />
      </v-avatar>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
    props:['howBig'],
    data(){
        return {
            images : ''
        }
    },
    created:{
        
    }
}
</script>








