import { createSlice } from '@reduxjs/toolkit'
import { getSauces } from './Sauces.thunks'

const SaucesSlice = createSlice({
  name: 'Sauces',
  initialState: {
    options: [],
    selection: {},
    isFetching: false,
  },
  reducers: {   
    selectSauce: (state, { payload }) => {
      state.selection = payload
    }
  }, extraReducers: builder => builder
    .addCase(getSauces.pending, state => {
      state.isFetching = true
    })
    .addCase(getSauces.fulfilled, (state, { payload }) => {
      state.options = payload
      state.isFetching = false
    })
})

export default SaucesSlice.reducer
export const {
  selectSauce,
} = SaucesSlice.actions