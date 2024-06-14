import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: {
    checking: [
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$5.00', balance: '$2,082.79', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$10.00', balance: '$2,087.79', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$2,097.79', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$2,117.79', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$2,147.79', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$2,187.79', type: 'Electronic', category: '_', notes: '' },
    ],
    savings: [
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$10.00', balance: '$10,928.42', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$10,948.42', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$10,978.42', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$11,018.42', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$11,068.42', type: 'Electronic', category: '_', notes: '' },
    ],
    credit: [
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$20.00', balance: '$164.30', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$30.00', balance: '$194.30', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$40.00', balance: '$234.30', type: 'Electronic', category: '_', notes: '' },
      { date: 'June 20th, 2020', description: 'Golden Sun Bakery', amount: '$50.00', balance: '$284.30', type: 'Electronic', category: '_', notes: '' },
    ],
  },
  status: 'idle',
  error: null
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    updateTransaction: (state, action) => {
      const { accountType, index, updatedTransaction } = action.payload;
      state.transactions[accountType][index] = updatedTransaction;
    }
  }
});

export const { updateTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
