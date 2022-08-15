import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  filterChange,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, action) => {
    state.push(action.payload);
  },
  [removeContactSuccess]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filter = createReducer('', {
  [filterChange]: (state, action) => action.payload,
});

const loading = createReducer(false, {
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
