const BASE_URL = 'https://62f639b2a3bce3eed7bc2a35.mockapi.io';

export const fetchContactsAPI = () => {
  return fetch(`${BASE_URL}/contacts`)
    .then(result => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(new Error('Something was wrong'));
    })
    .then(console.log);
};

export const addContactAPI = ({ name, phone }) => {
  return fetch(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ name, phone }),
  }).then(result => {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(new Error('Something was wrong'));
  });
};

export const deleteContactAPI = id => {
  return fetch(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE',
  }).then(result => {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(new Error('Something was wrong'));
  });
};
