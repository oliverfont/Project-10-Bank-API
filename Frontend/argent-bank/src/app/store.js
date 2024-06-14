import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/user/loginSlice';
import profileReducer from '../features/user/profileSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
    transactions: transactionsReducer,
  },
});
