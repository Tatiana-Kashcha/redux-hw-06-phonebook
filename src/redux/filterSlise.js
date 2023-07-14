const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/handleCangeFilter':
      return { ...state, filter: action.payload.target.value.trim() };

    default:
      return state;
  }
};

// export const handleCangeFilter = e => {
//   setFilter(e.target.value.trim());
// };

export const handleCangeFilter = e => {
  return {
    type: 'filter/handleCangeFilter',
    payload: e,
  };
};

const searchUserBook = () => {
  const normalised = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalised)
  );
};

export const searchUser = searchUserBook();