const initialState = {
  filter: '',
};

export const filterReducer = (state, action) => {
  return state;
};

export const handleCangeFilter = e => {
  setFilter(e.target.value.trim());
};

const searchUserBook = () => {
  const normalised = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalised)
  );
};

export const searchUser = searchUserBook();
