<template>
  <nav class="navbar navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{path:'/'}">Car House</router-link>
    <form @submit.prevent="search" class="form-inline">
      <input class="form-control mr-sm-2" type="search" v-model="keyword" placeholder="Search" aria-label="Search"/>
      <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      keyword: ''
    }
  },
  

  methods:{
    search(){
      var self = this
      axios.get("http://localhost:3000/search/"+ this.keyword).then(response =>{
        self.$store.dispatch('setInventory', response.data)
      })
    }
  }
}
</script>
<style >

</style>
