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

    case 'contacts/deleteUser':
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload),
      };
    default:
      return state;
  }
};

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
