import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk('user/signup', async (userDetails) => {
  const response = await axios.post('http://localhost:3001/user/signup', userDetails);
  return response.data;
});

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    user: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default signupSlice.reducer;
