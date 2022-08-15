import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormWrap, FormLabel, Input, AddBtn } from './Form.styled';
import { addContact, getItems } from 'redux/contacts';

export const Form = () => {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
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
    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={onInputChange}
        />
      </FormLabel>

      <AddBtn type="submit">Add contact</AddBtn>
    </FormWrap>
  );
};
