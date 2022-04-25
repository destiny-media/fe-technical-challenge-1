import { createAsyncThunk } from '@reduxjs/toolkit'
import { processOrder } from '../../services/Orders'

export const postOrder = createAsyncThunk('POST_ORDER', async (form) => {
  const options = await processOrder(form)

  return options
})