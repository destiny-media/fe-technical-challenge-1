import { createSlice } from '@reduxjs/toolkit'
import { getDough } from './Dough.thunks'

const DoughSlice = createSlice({
  name: 'Dough',
  initialState: {
    options: [],
    selection: {},
    isFetching: false,
  },
  reducers: {   
    selectDough: (state, { payload }) => {
      state.selection = payload
    }
  },
  extraReducers: builder => builder
    .addCase(getDough.pending, state => {
      state.isFetching = true
    })
    .addCase(getDough.fulfilled, (state, { payload }) => {
      state.options = payload
      state.isFetching = false
    })

})

export default DoughSlice.reducer
export const {
  selectDough,
} = DoughSlice.actions