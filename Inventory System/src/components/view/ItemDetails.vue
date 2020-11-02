<template>
  <div v-if="item" class="row">
    <div class="col-sm-6">
      <img :src="item.photo" alt="Photo" />
    </div>
    <div class="col-sm-6">
      <h3>{{ item.model }} - {{ item.year }}</h3>
      <h5>{{ item.title }}</h5>
      <p>{{ item.description }}</p>
      <p class="price">${{ item.price }}</p>
      <a href="#" @click="addToCart(item)" class="btn btn-primary addbtn">Add +</a>
    </div>
  </div>
  <h3 v-else>Loading...</h3>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      item: null,
    };
  },
  mounted() {
    this.fetchItem();
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    fetchItem() {
      var self = this;
      axios.get("http://localhost:3000/item/" + self.$route.params.id).then((response) => {
          self.item = response.data;
          self.loading = false;
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
.price {
  width: 50%;
  float: left;
  margin-top: 9px;
}
</style>