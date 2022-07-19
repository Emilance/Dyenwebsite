import { createSlice } from "@reduxjs/toolkit";


 const productSlice = createSlice({
     name : "product",
     initialState:{
         products: [],
         collection:[]
     },
     reducers:{
         getProducts:(state, action) => {
            state.products.push(action.payload);
            state.collection.push(action.payload.uniqueCollection)

         }
     },
     reset:(state) =>{
         state = initialState;
     }
})

export const { getProducts, reset } = productSlice.actions;
export default productSlice.reducer ;