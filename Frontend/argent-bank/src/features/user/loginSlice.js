import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk asynchrone pour gérer la connexion de l'utilisateur
export const login = createAsyncThunk('user/login', async (userData, thunkAPI) => {
  try {
    // Appel API pour la connexion
    const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);
    const { token } = response.data.body;
    // Stocker le jeton JWT dans le stockage local
    localStorage.setItem('token', token);
    return { token };
  } catch (error) {
    // Retourner le message d'erreur
    return thunkAPI.rejectWithValue(error.response.data.message || 'An error occurred');
  }
});

// Thunk asynchrone pour gérer la déconnexion de l'utilisateur
export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  // Supprimer le jeton JWT du stockage local
  localStorage.removeItem('token');
  return {};
});

// Création du slice de Redux pour la connexion
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {},
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
        state.error = action.payload || 'Failed to login';
        state.isAuthenticated = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export default loginSlice.reducer;
