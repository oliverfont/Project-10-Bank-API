import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload.message || 'Login failed';
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
