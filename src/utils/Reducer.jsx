import { GlobalStateContext } from "../Context/Context"
import cart from "../Pages/CartPage/CartPage"

export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    if (state.items.find((item) => item.id === action.payload.id)) {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity < 5 ? item.quantity + 1 : item.quantity,
            }
          }
          return item
        }),
      }
    }

    return {
      ...state,
      items: [...state.items, action.payload],
    }
  }
  if (action.type === "SELECT_FLAVOUR") {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            userSelected: action.payload.flavour,
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
    }
  }

  if (action.type === "TOTAL") {
    return {
      ...state,
      totalAmount: state.items.reduce((acc, curr) => acc + curr.subtotal, 0),
      totalItems: state.items.reduce((acc, curr) => acc + curr.quantity, 0),
    }
  }

  if (action.type === "SUB_TOTAL") {
    return {
      ...state,
      items: state.items.map((item) => {
        return {
          ...item,
          subtotal: item.price * item.quantity,
        }
      }),
    }
  }
}
