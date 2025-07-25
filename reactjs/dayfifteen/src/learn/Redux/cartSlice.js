import { createSlice } from "@reduxjs/toolkit";

const getcartFromLocalStorage = () =>{
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : [] 
}

const initialState = {
    cartItem : getcartFromLocalStorage(),
    totalQuantity: 0,
    totalPrice: 0
}

const updateLocalStorage = (cartItem) =>{
    localStorage.setItem('cart', JSON.stringify(cartItem));
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addtocart:(state,action) =>{
            const product = action.payload;
            const existingProduct = state.cartItem.find(
                (item) => item.id === product.id
            )
            if(existingProduct){
                existingProduct.quantity++;
            }else{
                state.cartItem.push({...product, quantity: 1})
            }
            updateLocalStorage(state.cartItem);
        }, 
        incrementQty:(state, action)=>{
            const id = action.payload;
            const existingProduct = state.cartItem.find(
                (item) => item.id === id
            )
            if (existingProduct){
                existingProduct.quantity++;
            }
            updateLocalStorage(state.cartItem);

        },
        decrementQty: (state, action) =>{
            const id = action.payload;
            const existingProduct = state.cartItem.find(
                (item) => item.id === id
            )
            if (existingProduct){
                existingProduct.quantity--;
            }
            updateLocalStorage(state.cartItem);
        },  
        removeItem: (state, action) =>{
            const id = action.payload;
            state.cartItem = state.cartItem.filter(
                (item) => item.id !== id
            )
            updateLocalStorage(state.cartItem);
        }, 
        clearCart: (state) =>{
            state.cartItem = [];
            updateLocalStorage([]);
        },

        calculateTotal: (state)=>{
            let totalQuantity = 0;
            let totalPrice = 0;
            state.cartItem.forEach((item) => {
                totalQuantity += item.quantity;
                totalPrice += item.price * item.quantity;
            });
            state.totalQuantity = totalQuantity;
            state.totalPrice = totalPrice;
        }
    }
})

export const {addtocart, incrementQty, decrementQty, removeItem, clearCart, calculateTotal} = cartSlice.actions;
export default cartSlice.reducer