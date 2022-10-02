import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './features/transactions/transactionsSlice';
import screenManagerReducer from './features/screenManager/screenManagerSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    screenManager: screenManagerReducer
  },
});