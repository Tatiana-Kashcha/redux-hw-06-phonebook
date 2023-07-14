import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addUser':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    // return data => {
    //   if (
    //     state.contacts.some(
    //       contact => contact.name.toLowerCase() === data.name.toLowerCase()
    //     )
    //   ) {
    //     alert('This name is already in the contacts list.');
    //     return;
    //   }
    // };

    case 'contacts/deleteUser':
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    default:
      return state;
  }
};

// const isDuplicateUser = contacts.some(
//   contact => contact.name.toLowerCase() === data.name.toLowerCase()
// );

// if (isDuplicateUser) {
//   alert('This name is already in the contacts list.');
//   return;
// }

// if (
//   state.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())
// ) {
//   alert('This name is already in the contacts list.');
//   return;
// }

//   setContacts(prev => [...prev, newUser]);
// };

export const addUser = data => {
  return {
    type: 'contacts/addUser',
    payload: {
      id: nanoid(),
      ...data,
    },
  };
};

export const deleteUser = id => {
  return {
    type: 'contacts/deleteUser',
    payload: id,
  };
};

// export const searchUserBook = () => {
//   const normalised = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalised)
//   );
// };

// const searchUser = searchUserBook();
