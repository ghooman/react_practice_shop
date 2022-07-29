import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js'




let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    addCount(state, action) {
      let Num = state.findIndex((e) => e.id === action.payload)
      state[Num].count++
    },
    minCount(state, action) {
      let Num = state.findIndex((e) => e.id === action.payload)
      state[Num].count--
    },
    addItem(state, action) { 
      state.push(action.payload)
    },
    setItem(state, action) {
      let Num = state.findIndex((e) => e.id === action.payload)
      state[Num].count++
    }
  }
})

export let { addCount, addItem, minCount, setItem } = cart.actions



export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
}) 