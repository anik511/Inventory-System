export const storage ={
    state:{
        inventory:[],
        cart: [],
    },
    getters:{
        getInventory(state){
            return state.inventory
        },
        getCart(state){
            return state.cart
        }
    },
    mutations:{
        setInventory(state, payload){
            state.inventory = payload
        },
        addToCart(state, payload){
            state.cart.push(payload)
        },
        removeCart(state, payload){
            state.cart.splice(payload, 1)
        },
        checkOut(state){
            state.cart = []
        }
    },
    actions:{
        addToCart(contex, payload){
            contex.commit('addToCart', payload)
        },
        removeCart(contex, payload){
            contex.commit('removeCart', payload)
        },
        setInventory(contex, payload){
            contex.commit('setInventory', payload)
        },
        checkOut(contex){
            contex.commit('checkOut')
        }
    }
}