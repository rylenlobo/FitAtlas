export const SpReducer = (state, action) => {
  if (action.type === "SELECT_FLAVOUR") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            flavour: [action.payload.flavour],
          };
        }

        return item;
      }),
    };
  }

  if (action.type === "SELECT_WEIGHT") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            weight: [action.payload.weight],
            price: [action.payload.price],
          };
        }

        return item;
      }),
    };
  }

  if (action.type === "INCREMENT_ITEM") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
      readOnly: state.readOnly.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    };
  }
  if (action.type === "DECREMENT_ITEM") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
      readOnly: state.readOnly.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    };
  }

  if (action.type === 'UPDATE_STATE') {
    return action.payload;
  } else {
    return state;
  }
  
};
