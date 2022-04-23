import { createSlice } from '@reduxjs/toolkit'
import { postOrder } from './Checkout.thunks'

const CheckoutSlice = createSlice({
  name: 'Checkout',
  initialState: {
    form: {},
  },
  reducers: {   
    calculateTotals: (state, {payload}) => {
      const subtotal = payload.dough.price + payload.sauce.price + payload.toppings.reduce((totalTopping, topping) => totalTopping + topping.price, 0);
      const tax = (5 / 100) * subtotal;
      const total = subtotal + tax ;
      state.details = {total, subtotal, tax}
    },
    setFormProperty: (state, { payload }) => {
      if (payload.value.length > payload.max) return
      state.form = {...state.form, [payload.name]: {value: payload.value, isValid: new RegExp(payload.pattern).test(payload.value)}}
    }
  },
  extraReducers: builder => builder
    .addCase(postOrder.pending, state => {
      state.isFetching = true
    })
    .addCase(postOrder.fulfilled, (state, { payload }) => {
      state.options = payload
      state.isFetching = false
    })

})

export default CheckoutSlice.reducer
export const {
  calculateTotals,
  setFormProperty,
} = CheckoutSlice.actions