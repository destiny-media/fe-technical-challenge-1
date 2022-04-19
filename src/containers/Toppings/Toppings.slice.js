import { createSlice } from '@reduxjs/toolkit'
import { getToppings } from './Toppings.thunks'

const ToppingsSlice = createSlice({
  name: 'Toppings',
  initialState: {
    options: [],
    selection: [],
    isFetching: false,
  },
  extraReducers: builder => builder
    .addCase(getToppings.pending, state => {
      state.isFetching = true
    })
    .addCase(getToppings.fulfilled, (state, { payload }) => {
      state.options = payload
      state.isFetching = false
    })
})

export default ToppingsSlice.reducer