import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/user/loginSlice';
import signupReducer from '../features/user/signupSlice';
import profileReducer from '../features/user/profileSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    profile: profileReducer,
  },
});
