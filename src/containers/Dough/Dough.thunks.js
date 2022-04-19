import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDough } from '../../services/Dough'

export const getDough = createAsyncThunk('GET_DOUGH', async () => {
  const options = await fetchDough()

  return options
})