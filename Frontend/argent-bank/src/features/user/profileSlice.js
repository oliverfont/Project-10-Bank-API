import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (token, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const updateProfile = createAsyncThunk('profile/updateProfile', async ({ token, profileData }, thunkAPI) => {
  try {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.body;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      checking: [],
      savings: [],
      credit: []
    },
    status: 'idle',
    error: null,
  },
  reducers: {
    updateTransaction: (state, action) => {
      const { accountType, index, updatedTransaction } = action.payload;
      if (state.profile[accountType]) {
        state.profile[accountType][index] = updatedTransaction;
      }
    },
  },
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
        state.error = action.payload.message || 'Failed to fetch profile';
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
        state.error = action.payload.message || 'Failed to update profile';
      });
  },
});

export const { updateTransaction } = profileSlice.actions;

export default profileSlice.reducer;
