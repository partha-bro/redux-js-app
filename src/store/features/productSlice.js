import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Object.freeze method is use to don't change the value at any cost [like enum data type (JS does not support it)]
export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
})

const initialState = {
    data: [],
    status: STATUS.IDLE
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending, (state,action)=>{
            state.status = STATUS.LOADING
        }).addCase(fetchProducts.fulfilled, (state,action)=>{
            state.data = action.payload
            state.status = STATUS.IDLE
        }).addCase(fetchProducts.rejected, (state,action)=>{
            state.status = STATUS.ERROR
        })
    }
})

// export const { setProducts,setStatus } = productSlice.actions
export default productSlice.reducer

// Thunks
/*  It is a middleware of redux, that means "a piece of code that does some delayed work".
    It is a function and always return a async function with two arguments ( dispatch, getState ).
    Thunk middleware is already present in toolkit, so no need to configure, But in redux it must be configure in store
*/

/* Pre-Build Thunk middleware use */
export const fetchProducts = createAsyncThunk('products/fetch', async ()=>{
    const response = await axios.get('https://fakestoreapi.com/productss')
    const jsonData = await response.data
    return jsonData
})        // first argument is identifier/ just name & second argument is async function


/* Manual Create Thunk Middleware */
// export function fetchProducts() {
//     return async function fetchproductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUS.LOADING))
//         try {
//             const response = await axios.get('https://fakestoreapi.com/products')
//             const jsonData = await response.data
//             dispatch(setProducts(jsonData))
//             dispatch(setStatus(STATUS.IDLE))
//         } catch (error) {
//             console.log(`Thunk Error: ${error}`);
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }
// }