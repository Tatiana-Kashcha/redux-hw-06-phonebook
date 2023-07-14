import { nanoid } from 'nanoid';

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

export const handleCangeFilter = e => {
  setFilter(e.target.value.trim());
};
