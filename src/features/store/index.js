import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../store/reducer'

export const store = configureStore({
  reducer: {
    cats: catReducer,
  },
});
