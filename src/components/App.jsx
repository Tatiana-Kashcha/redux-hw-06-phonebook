// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as s from './App.styled';

// const STORAGE_KEY = 'contact-list';

const App = () => {
  const users = useSelector(state => state.contacts.length);

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      {users > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList data={searchUser} deleteUser={deleteUser} />
        </>
      )}
    </s.Container>
  );
};

export default App;

// const [contacts, setContacts] = useState(() => {
//   return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
// });

// useEffect(() => {
//   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
// }, [contacts]);

// return (
//   <s.Container>
//     <h1>Phonebook</h1>
//     <ContactForm addUser={addUser} />
//     {contacts.length > 0 && (
//       <>
//         <h2>Contacts</h2>
//         <Filter filter={filter} handleCangeFilter={handleCangeFilter} />
//         <ContactList data={searchUser} deleteUser={deleteUser} />
//       </>
//     )}
//   </s.Container>
// );
