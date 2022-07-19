import { createSlice } from "@reduxjs/toolkit";


 const userSlice = createSlice({
     name : "user",
     initialState:{
         user: ""
     },
     reducers:{
         logInUser:(state, action) => {
            state.user =(action.payload);
         }
     },
     reset:(state) =>{
         state = initialState;
     }
})

export const { logInUser, reset } =userSlice.actions;
export default userSlice.reducer ;