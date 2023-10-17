export const SpReducer = (state, action) => {
  if (action.type === "SET_DATA") {
    return {
      ...state,
      productData: [action.payload.data],
      readOnly: [action.payload.data],
    }
  }
  if (action.type === "SELECT_FLAVOUR") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        return {
          ...item,
          flavour: [action.payload.flavour],
        }
      }),
    }
  }

  if (action.type === "SELECT_WEIGHT") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        return {
          ...item,
          weight: [action.payload.weight],
          price: [action.payload.price],
        }
      }),
    }
  }

  if (action.type === "INCREMENT_ITEM") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }),
      readOnly: state.readOnly.map((item) => {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }),
    }
  }
  if (action.type === "DECREMENT_ITEM") {
    return {
      ...state,
      productData: state.productData.map((item) => {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      }),
      readOnly: state.readOnly.map((item) => {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      }),
    }
  }
}
