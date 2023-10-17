export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let { id, name, img, flavour, price, quantity, weight, type, supplement } =
      action.payload

    let cartProduct = {
      id: id + flavour + weight,
      name: name,
      img: img,
      flavour: flavour,
      price: price,
      quantity: quantity,
      weight: weight,
      type: type,
      supplement: supplement,
    }

    if (state.items.find((item) => item.id === cartProduct.id)) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === cartProduct.id) {
            return {
              ...item,
              quantity:
                item.quantity < 5
                  ? item.quantity + cartProduct.quantity > 5
                    ? 5
                    : item.quantity + cartProduct.quantity
                  : item.quantity,
            }
          }
          return item
        }),
      }
    }

    return {
      ...state,
      items: [...state.items, cartProduct],
    }
  }

  if (action.type === "SELECT_FLAVOUR") {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            flavour: [action.payload.flavour],
          }
        }

        return item
      }),
    }
  }

  if (action.type === "SELECT_WEIGHT") {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            weight: [action.payload.weight],
            price: [action.payload.price],
          }
        }

        return item
      }),
    }
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      readOnly: state.readOnly.filter((item) => item.id !== action.payload),
    }
  }
  if (action.type === "INCREMENT_ITEM") {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            subtotal: item.price * item.quantity,
          }
        }
        return item
      }),
      readOnly: state.readOnly.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      }),
    }
  }
  if (action.type === "DECREMENT_ITEM") {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      }),
      readOnly: state.readOnly.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      }),
    }
  }

  if (action.type === "TOTAL") {
    return {
      ...state,
      totalAmount: state.items.reduce(
        (acc, curr) => acc + parseInt(curr.price) * curr.quantity,
        0
      ),
      totalItems: state.items.reduce((acc, curr) => acc + curr.quantity, 0),
    }
  }

  if (action.type === "SUB_TOTAL") {
    return {
      ...state,
      items: state.items.map((item) => {
        return {
          ...item,
          total: item.price[0] * item.quantity,
        }
      }),
    }
  }

  if(action.type === "CLEAR_CART"){
    return{
      ...state,
      items:[],
    }
  }
}
