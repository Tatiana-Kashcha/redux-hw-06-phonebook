import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    default:
      return state;
  }
};

export const addUser = data => {
  const newUser = {
    id: nanoid(),
    ...data,
  };

  const isDuplicateUser = contacts.some(
    contact => contact.name.toLowerCase() === data.name.toLowerCase()
  );

  if (isDuplicateUser) {
    alert('This name is already in the contacts list.');
    return;
  }

  setContacts(prev => [...prev, newUser]);
};

export const deleteUser = id => {
  setContacts(contacts.filter(el => el.id !== id));
};
