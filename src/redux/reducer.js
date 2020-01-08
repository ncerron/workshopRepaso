const initialState = {
  properties: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_PROPERTIES":
      return { ...state, properties: action.properties };
    default:
      return state;
  }
};
