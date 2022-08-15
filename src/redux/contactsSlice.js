// import { createSlice } from '@reduxjs/toolkit';

// const contactInitialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// export const contactsSlise = createSlice({
//   name: 'contacts',
//   initialState: contactInitialState,
//   reducers: {
//     add: (state, action) => {
//       state.items.push(action.payload);
//     },
//     remove: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     filterChange: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { add, remove, filterChange } = contactsSlise.actions;

// Selectors

// export const getItems = state => state.contacts.items;
// export const getFilter = state => state.contacts.filter;
