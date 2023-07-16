const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/handleCangeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export const handleCangeFilter = text => {
  return {
    type: 'filter/handleCangeFilter',
    payload: text,
  };
};
