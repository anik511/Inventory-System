<template>
  <div class="row">
    <ul class="list-group">
      <li class="list-group-item" style="background: rgb(255, 153, 0)">
        <span class="item-name">Item</span>
        <span class="item-price float-right">Price</span>
      </li>
      <li v-for="(cart, index) in carts" :key="index" class="list-group-item">
        <button @click= "cartremove(index)" class="btn btn-xs btn-danger">X</button>
        <span class="item-name">{{cart.title}} - {{cart.model}}</span>
        <span class="item-price float-right">{{cart.price}}</span>
      </li>
      <li class="list-group-item" style="border: solid rgb(241, 113, 7) 1px">
        <span class="item-name">Total</span>
        <span class="item-price float-right">{{total}}</span>
      </li>
      <li v-if="carts.length>0" class="List-group-item">
        <button @click="checkOut" class="btn btn-block btn-success">Checkout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed:{
    carts(){
      return this.$store.getters.getCart
    },
    total(){
      var total = 0
      this.carts.forEach(element => {
        total += parseFloat(element.price)
      });
      return total.toFixed(2)
    }
  },
  methods:{
    cartremove(index){
      this.$store.dispatch('removeCart', index)
    },
    checkOut(){
      if(confirm('Are you sure you want to checkout??')){
        this.$store.dispatch('checkOut')
      }
    }
  }
};
</script>
<style >
.list-group{
  width: 100%;
}
.item-name{
  width: 70%;
}
.item-price{
  width: 30%;
  text-align: right;
}
</style>
