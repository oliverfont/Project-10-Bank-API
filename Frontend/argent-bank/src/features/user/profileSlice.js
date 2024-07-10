import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk asynchrone pour récupérer le profil de l'utilisateur
export const fetchProfile = createAsyncThunk('profile/fetchProfile', async (token, thunkAPI) => {
  try {
    // Appel API pour obtenir les données du profil utilisateur
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Retourner les données du profil utilisateur
    return response.data.body;
  } catch (error) {
    // Retourner l'erreur en cas d'échec
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Thunk asynchrone pour mettre à jour le profil de l'utilisateur
export const updateProfile = createAsyncThunk('profile/updateProfile', async ({ token, profileData }, thunkAPI) => {
  try {
    // Appel API pour mettre à jour les données du profil utilisateur
    const response = await axios.put('http://localhost:3001/api/v1/user/profile', profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Retourner les données mises à jour du profil utilisateur
    return response.data.body;
  } catch (error) {
    // Retourner l'erreur en cas d'échec
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

// Création du slice de Redux pour le profil utilisateur
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {
      checking: [],
      savings: [],
      credit: []
    },
    status: 'idle', // 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Cas de récupération du profil utilisateur
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
      // Cas de mise à jour du profil utilisateur
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

// Exporter les actions et le réducteur
export const { updateTransaction } = profileSlice.actions;
export default profileSlice.reducer;
