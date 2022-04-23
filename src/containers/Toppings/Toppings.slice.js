import { createSlice } from '@reduxjs/toolkit'
import { getToppings } from './Toppings.thunks'

const ToppingsSlice = createSlice({
  name: 'Toppings',
  initialState: {
    options: [],
    selection: [],
    isFetching: false,
  },
  reducers: {   
    selectToppings: (state, { payload }) => {
      const selectionMap = new Map(state.selection)
      selectionMap.has(payload.id) ? selectionMap.delete(payload.id) : selectionMap.set(payload.id, payload)
      state.selection = Array.from(selectionMap)
    }
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
export const {
  selectToppings,
} = ToppingsSlice.actions