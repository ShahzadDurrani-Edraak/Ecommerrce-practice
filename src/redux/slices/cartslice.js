import { createSlice , createSelector} from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers:{
        addItem:(state, action) => {
            state.push(action.payload);
        },
        deleteItem:(state, action) => {
            const itemId    =   action.payload;
            state.cart  =   state.cart.findIndex((obj) => obj.id === itemId);
        }
    }
})

export const getItemSelector = createSelector( 
    state=> state.cart, 
    state => state
    )
export const {addItem, deleteItem} = cartSlice.actions
export default cartSlice.reducer;