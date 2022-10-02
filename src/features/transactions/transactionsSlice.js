import { createSlice } from '@reduxjs/toolkit';

const testData = [
  {
    id: 1,
    category: 'Home',
    name: 'Home Depot',
    date: new Date().toString(),
    amount: -100.25,
    note: 'test note'
  },
  {
    id: 2,
    category: 'Food',
    name: 'McDonalds',
    date: new Date().toString(),
    amount: -500,
    note: 'test note'
  },
  {
    id: 3,
    category: 'Entertainment',
    name: 'AMC',
    date: new Date().toString(),
    amount: -35.65,
    note: 'test note'
  },
  {
    id: 4,
    category: 'Home',
    name: 'Best Buy',
    date: new Date().toString(),
    amount: -100.25,
    note: 'test note'
  },
  {
    id: 5,
    category: 'Food',
    name: 'Metro Pizza',
    date: new Date().toString(),
    amount: -500,
    note: 'test note'
  },
  {
    id: 6,
    category: 'Entertainment',
    name: 'UNLV Tickets',
    date: new Date().toString(),
    amount: -35.65,
    note: 'test note'
  },
]

const initialState = {
  // transactions: [],
  transactions: testData,
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


export const { setView } = transactionsSlice.actions;
export default transactionsSlice.reducer;