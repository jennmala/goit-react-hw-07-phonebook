import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterChange,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (state, action) => action.payload,
  [addContactSuccess]: (state, action) => {
    state.push(action.payload);
  },
  [removeContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [filterChange]: (state, action) => action.payload,
});

// const error = createReducer(null, {});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
