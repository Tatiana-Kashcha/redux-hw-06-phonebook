import { useSelector } from 'react-redux';
import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';

// import PropTypes from 'prop-types';
// export const ContactList = ({ data, deleteUser }) => {
const usersContacts = useSelector(state => state.contacts);

const searchUserBook = () => {
  const normalised = filter.toLowerCase();
  return usersContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalised)
  );
};

export const ContactList = () => {
  const searchUser = searchUserBook();
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

// return (
//   <s.List>
//     {data.map(user => (
//       <s.ListItems key={user.id}>
//         <ContactListItems user={user} deleteUser={deleteUser} />
//       </s.ListItems>
//     ))}
//   </s.List>
// );

// ContactList.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   deleteUser: PropTypes.func.isRequired,
// };
