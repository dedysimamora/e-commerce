<template>
  <v-app>
    <v-content>
     <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .clink {
    text-decoration: none;
    color: red;
    margin-left: 10px;
    font-size: 1rem;
    padding: 2;
  }
  .clink:hover {
    background-color: red;
    color : white;
    border-radius: 5px;
    padding: 8px;
  }
  .loginHome {
    color: white;
    font-size: 1000px;
  }
  google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 100px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.swal-button {
  padding: 7px 19px;
  border-radius: 2px;
  background-color: rgb(0, 0, 0);
  font-size: 12px;
  border: 1px solid #fdfdfd;
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3);
}
</style>
