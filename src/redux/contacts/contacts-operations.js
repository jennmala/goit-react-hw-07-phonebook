import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contacts-actions';

const BASE_URL = 'https://62f639b2a3bce3eed7bc2a35.mockapi.io';

export const add = (name, phone) => dispatch => {
  dispatch(addContactRequest());
  fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, phone }),
  })
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(new Error('Something was wrong'));
    })
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const remove = id => dispatch => {
  dispatch(removeContactRequest());
  return fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(new Error('Something was wrong'));
    })
    .then(data => dispatch(removeContactSuccess(data.id)))
    .catch(error => dispatch(removeContactError(error)));
};
