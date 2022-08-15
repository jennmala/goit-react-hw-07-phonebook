import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { createReducer, createAction } from '@reduxjs/toolkit';

// import { contactsSlise } from './contactsSlice';
import { contactsReducer } from './contacts';

// export const addContact = createAction('contacts/add');
// export const removeContact = createAction('contacts/remove');
// export const changeFilter = createAction('contacts/filter');

// const contactsReducer = createReducer(
//   {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
//   {
//     [addContact]: (state, action) => { state.items.push(action.payload) },
//     [removeContact]: (state, action) => { state.items = state.items.filter((item) => item.id !== action.payload) },
//     [changeFilter]: (state, action) => { state.filter = action.payload },
//   }
// );

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
