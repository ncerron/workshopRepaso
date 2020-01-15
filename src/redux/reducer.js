const initialState = {
  properties: [],
  propertySelected: {},
  property: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_PROPERTIES":
      return {
        ...state,
        properties: action.properties
      };
    case "SELECTED_PROPERTY":
      return {
        ...state,
        propertySelected: action.property
      };
    case "DELETE_PROPERTY":
      return {
        ...state,
        properties: state.properties.filter(item => item !== action.property)
      };

    case "UPDATE_PROPERTY":
      return {
        ...state,
        property: action.property
      };

    default:
      return state;
  }
};
