import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAll, fetchCampersPage } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const catalogSlice = createSlice({
  name: 'adverts',
  initialState: {
    items: [],
    itemsAll: [],
    isLoading: false,
    error: null,
    page: 1,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampersAll.pending, handlePending)
      .addCase(fetchCampersAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.itemsAll = action.payload;
      })
      .addCase(fetchCampersAll.rejected, handleRejected)
      .addCase(fetchCampersPage.pending, handlePending)
      .addCase(fetchCampersPage.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        // state.page = action.payload.page;
        state.items = action.payload;
      })
      .addCase(fetchCampersPage.rejected, handleRejected);
  },
  reducers: {
    nextPage: state => {
      state.page = state.page + 1;
    },
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const { nextPage } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
