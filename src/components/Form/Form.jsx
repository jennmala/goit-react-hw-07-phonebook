import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { FormWrap, FormLabel, Input, AddBtn } from './Form.styled';
import { add, getItems } from 'redux/contacts/contacts-operations';

export const Form = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSumit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const sameContact = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (sameContact) {
      alert(name + ' is already in contacts.');
      return;
    }

    dispatch(add(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormWrap onSubmit={onFormSumit}>
      <FormLabel htmlFor="">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </FormLabel>

      <FormLabel htmlFor="">
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </FormLabel>

      <AddBtn type="submit">Add contact</AddBtn>
    </FormWrap>
  );
};
