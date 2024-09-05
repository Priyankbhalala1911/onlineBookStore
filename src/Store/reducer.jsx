import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addBookCart: [],
    totalQunity: 0
}

const bookCart = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addBook: (state, action) => {
            let find = state.addBookCart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.addBookCart[find].quantity +=1
            } else {
                state.addBookCart.push(action.payload)
            }
            state.totalQunity +=1

        },
        removeBook:(state,action)=>{
            state.totalQunity -=1
            state.addBookCart = state.addBookCart.filter((item)=>item.id !== action.payload);
        }
    }
})
export default bookCart;
export const { addBook, removeBook} = bookCart.actions;
