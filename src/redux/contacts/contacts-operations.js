import { createAsyncThunk } from '@reduxjs/toolkit';

// import {
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   removeContactRequest,
//   removeContactSuccess,
//   removeContactError,
// } from './contacts-actions';

const BASE_URL = 'https://62f639b2a3bce3eed7bc2a35.mockapi.io';

// ======================================== thunk absrtaction

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/contacts`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }) => {
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ name, phone }),
    });
    const data = await response.json();
    return data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
);

// ======================================== acync await

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   const response = await fetch(`${BASE_URL}/contacts`);

//   try {
//     if (response.ok) {
//       const data = await response.json();
//       dispatch(fetchContactSuccess(data));
//     } else {
//       return Promise.reject(new Error('Something was wrong'));
//     }
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// export const addContact = (name, phone) => async dispatch => {
//   dispatch(addContactRequest());
//   const response = await fetch(`${BASE_URL}/contacts`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({ name, phone }),
//   });

//   try {
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(addContactSuccess(data));
//       } else {
//         return Promise.reject(new Error('Something was wrong'));
//       }
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
// }

// export const removeContact = id => async dispatch => {
//   dispatch(removeContactRequest());
//   const response = await fetch(`${BASE_URL}/contacts/${id}`, {
//     method: 'DELETE',
//   });

//   try {
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(removeContactSuccess(data.id));
//       } else {
//         return Promise.reject(new Error('Something was wrong'));
//       }
//     } catch (error) {
//       dispatch(removeContactError(error));
//     }
// };

// ============================================== then

// export const fetchContacts = () => dispatch => {
//     dispatch(fetchContactRequest());
//     return fetch(`${BASE_URL}/contacts`)
//         .then(result => {
//             if (result.ok) {
//             return result.json();
//             }
//             return Promise.reject(new Error('Something was wrong'));
//         })
//         .then(data => dispatch(fetchContactSuccess(data)))
//         .catch(error => dispatch(fetchContactError(error)));
// }

// export const addContact = (name, phone) => dispatch => {
//     dispatch(addContactRequest());
//     fetch(`${BASE_URL}/contacts`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({ name, phone }),
//     })
//       .then(result => {
//         if (result.ok) {
//           return result.json();
//         }
//         return Promise.reject(new Error('Something was wrong'));
//       })
//       .then(data => dispatch(addContactSuccess(data)))
//       .catch(error => dispatch(addContactError(error)));
//   };

// export const removeContact = id => dispatch => {
//     dispatch(removeContactRequest());
//     return fetch(`${BASE_URL}/contacts/${id}`, {
//       method: 'DELETE',
//     })
//       .then(result => {
//         if (result.ok) {
//           return result.json();
//         }
//         return Promise.reject(new Error('Something was wrong'));
//       })
//       .then(data => dispatch(removeContactSuccess(data.id)))
//       .catch(error => dispatch(removeContactError(error)));
//   };
