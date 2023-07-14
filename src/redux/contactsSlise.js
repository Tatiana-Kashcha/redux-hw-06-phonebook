import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addUser':
      return data => {
        if (
          state.some(
            contact => contact.name.toLowerCase() === data.name.toLowerCase()
          )
        ) {
          alert('This name is already in the contacts list.');
          return;
        }
        prev => [...prev, action.payload];
      };

    case 'contacts/deleteUser':
      return state.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};

// export const addUser = data => {
//   const newUser = {
//     id: nanoid(),
//     ...data,
//   };

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

// export const deleteUser = id => {
//   setContacts(contacts.filter(el => el.id !== id));
// };

export const deleteUser = id => {
  return {
    type: 'contacts/deleteUser',
    payload: id,
  };
};
