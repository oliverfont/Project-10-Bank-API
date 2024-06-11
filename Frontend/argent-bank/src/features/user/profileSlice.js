import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk('user/fetchProfile', async (token, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateProfile = createAsyncThunk('user/updateProfile', async ({ token, profileData }, thunkAPI) => {
  try {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', profileData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  }
});

export default profileSlice.reducer;
