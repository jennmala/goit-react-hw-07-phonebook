import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

import { Container, MainTitle, Title } from './App.styled';

export const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>

      <Form />

      <Title>Contacts</Title>

      <Filter />

      <Contacts />
    </Container>
  );
};
