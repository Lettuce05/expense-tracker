import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  view: 'overview'
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setView: (state, payload) => {
      state.view = payload.payload;
    }
  },
});

console.log(transactionsSlice);

export const { setView } = transactionsSlice.actions;
export default transactionsSlice.reducer;