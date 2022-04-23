import { createAsyncThunk } from '@reduxjs/toolkit'
import { processOrder } from '../../services/Orders'

export const postOrder = createAsyncThunk('POST_ORDER', async () => {
  const options = await processOrder()

  return options
})