// import { createSelector } from '@reduxjs/toolkit';

export const selectCatalogPage = state => state.adverts.items;

export const selectCatalogAll = state => state.adverts.itemsAll;

export const selectCountPage = state => state.adverts.page;

export const selectFavorites = state => state.favorites.favorites;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectError = state => state.adverts.error;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.name.toLowerCase())
//     );
//   }
// );
