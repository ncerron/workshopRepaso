const initialState = {
  properties: [],
  search: [],
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

    case "ADD_PROPERTY":
      return {
        ...state,
        properties: [...state.properties, action.property]
      };

    case "DELETE_PROPERTY":
      return {
        ...state,
        properties: state.properties.filter(item => item !== action.property)
      };

    case "UPDATE_PROPERTY":
      /*  return {
        ...state,
        properties: state.properties.map(p =>
          p.id === action.property.id ? (p = action.property) : p
        )
      }; */

      return state.properties.map((item, index) => {
        if (index !== action.property.id) {
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...state,
          ...action.property
        };
      });

    case "SEARCH_PROPERTIES":
      return {
        ...state,
        search: action.properties,
      };

    default:
      return state;
  }
};
