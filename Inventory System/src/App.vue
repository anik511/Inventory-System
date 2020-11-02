<template>
  <div id="app">
    <!-- <router-link :to="{path:'/test/1'}">test 1</router-link>
    <router-link :to="{path:'/test/2'}">test 2</router-link>
    <router-link :to="{path:'/test/3'}">test 3</router-link>
    <router-view></router-view> -->
    <Navbar @search="search"></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-9">
          <router-view></router-view>
          <!-- <Inventory @newItemAdded="addCartItem" :items="items"></Inventory> -->
        </div>
        <div class="col-sm-3">
          <Cart @cartRemoved="removeCart" :carts="carts"></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Inventory from './components/Inventory'
import Cart from './components/Cart'
import data from "./data.js";

export default {
  components: {
    Navbar,
    //Inventory,
    Cart,
  },
  data(){
    return{
      items: [],
      carts: [],
    }
  },
  mounted(){
    this.items = data;
  },
  methods:{
    addCartItem(item){
      this.carts.push(item)
    },
    removeCart(index){
      this.carts.splice(index,1)
    },
    search(keyword){
      this.items = data.filter((item) => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
  }
}
</script>

<style>
.container {
  padding-top: 20px;
}

</style>
