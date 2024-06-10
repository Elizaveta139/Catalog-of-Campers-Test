import { createSlice } from '@reduxjs/toolkit';

const favotiteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item._id !== action.payload._id);
    },
  },
});

export const { addFavorite, removeFavorite } = favotiteSlice.actions;
export const favotiteReducer = favotiteSlice.reducers;
