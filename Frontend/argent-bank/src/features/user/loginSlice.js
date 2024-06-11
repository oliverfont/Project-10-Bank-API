import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
    const { token } = response.data.body;
    localStorage.setItem('token', token);
    return { token };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message || 'Failed to login';
        state.isAuthenticated = false;
      });
  },
});

export const { logout, setIsAuthenticated } = loginSlice.actions;

export default loginSlice.reducer;
