import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  removeContact,
} from './contacts-operations';
import { filterChange } from './contacts-actions';
// import {
// fetchContactRequest,
// fetchContactSuccess,
// fetchContactError,
// addContactRequest,
// addContactSuccess,
// addContactError,
// filterChange,
// removeContactRequest,
// removeContactSuccess,
// removeContactError,
// } from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => action.payload,
  [addContact.fulfilled]: (state, action) => {
    state.push(action.payload);
  },
  [removeContact.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
});

const filter = createReducer('', {
  [filterChange]: (state, action) => action.payload,
});

// const error = createReducer(null, {});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

// ============================================= without thunk

// const items = createReducer([], {
//   [fetchContactSuccess]: (state, action) => action.payload,
//   [addContactSuccess]: (state, action) => {
//     state.push(action.payload);
//   },
//   [removeContactSuccess]: (state, action) =>
//     state.filter(item => item.id !== action.payload),
// });

// const filter = createReducer('', {
//   [filterChange]: (state, action) => action.payload,
// });

// // const error = createReducer(null, {});

// const loading = createReducer(false, {
//   [fetchContactRequest]: () => true,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [removeContactRequest]: () => true,
//   [removeContactSuccess]: () => false,
//   [removeContactError]: () => false,
// });

// ===============================================================

export default combineReducers({
  items,
  filter,
  loading,
});
