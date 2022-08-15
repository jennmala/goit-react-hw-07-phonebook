import { useSelector, useDispatch } from 'react-redux';

import { Item, Name, Number, DeleteBtn } from './Contacts.styled';
import { fetchContacts, remove } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const loading = useSelector(state => state.contacts.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {loading && <h1>loading ... </h1>}
      {visibleContacts?.length ? (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => (
            <Item key={id}>
              <Name>
                {name}: <Number>{phone}</Number>
              </Name>
              <DeleteBtn type="button" onClick={() => dispatch(remove(id))}>
                Delete
              </DeleteBtn>
            </Item>
          ))}
        </ul>
      ) : (
        <p>There are no contacts</p>
      )}
    </>
  );
};
