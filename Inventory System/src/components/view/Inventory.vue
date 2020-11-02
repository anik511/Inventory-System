<template>
  <div class="row">
    <!-- card start -->
    <div v-for="(item, index) in items" :key="index" class="card">
      <router-link tag="div" :to="{path:'/item/'+item.id}">
      <img :src="item.photo" class="card-img-top image-pointer" alt="Car" />
      <div class="card-body">
        <h5 class="card-title">{{ item.model }} - {{ item.year }}</h5>
        <p class="card-text">{{ item.title }}</p>
      </div>
      </router-link>
      <div class="card-footer">
        <p class="pricing">${{ item.price }}</p>
        <a @click="addToCart(item)" class="btn btn-primary addbtn">Add +</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // items: [],
    };
  },
  computed:{
    items(){
      return this.$store.getters.getInventory
    }
  },
  mounted() {
    this.fetchInventory();
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    fetchInventory() {
      var self = this;
      axios.get("http://localhost:3000/items").then((response) => {
        // self.items = response.data;
        self.$store.dispatch('setInventory', response.data)
      });
    },
  },
};
</script>
<style>
.addbtn {
  width: 50%;
  float: left;
}
.pricing {
  width: 50%;
  float: left;
}
.image-pointer {
  cursor: pointer;
}
.card {
  width: 31.8%;
  float: left;
  margin: 10px 10px 10px 0px;
}
</style>
