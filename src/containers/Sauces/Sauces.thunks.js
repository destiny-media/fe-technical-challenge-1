import { createAsyncThunk } from '@reduxjs/toolkit'

import { fetchSauce } from '../../services/Sauce'

export const getSauces = createAsyncThunk('GET_SAUCES', async () => {
  const options = await fetchSauce()

  return options
})
