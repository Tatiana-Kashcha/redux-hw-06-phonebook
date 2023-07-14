import { useSelector } from 'react-redux';
import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';

export const ContactList = () => {
  const users = useSelector(state => state.contactsUser.contacts);
  const filter = useSelector(state => state.filterUser.filter);
  console.log(filter);

  // const searchUserBook = () => {
  //   // const normalised = filter.toLowerCase();
  //   return users.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };
  const searchUser = users;

  return (
    <s.List>
      {searchUser.map(user => (
        <s.ListItems key={user.id}>
          <ContactListItems user={user} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
