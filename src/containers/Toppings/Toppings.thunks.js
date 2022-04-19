import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchToppings } from '../../services/Toppings'

export const getToppings = createAsyncThunk('GET_TOPPINGS', async () => {
  const options = await fetchToppings()

  return options
})