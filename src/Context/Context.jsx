import React, { useState, useReducer, useEffect } from "react"
import { uid } from "uid"
import img0100 from "../../public/btl_creatine_1_400x400.png"

export const GlobalStateContext = React.createContext()

//prettier-ignore
export const phcartItems = [
  {
    id: uid(),
    name: "Creatine Monohydrate",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "2000",
    quantity: 1,
    subtotal: 2000,
  },
  {
    id: uid(),
    name: "PreWorkout",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "5000",
    quantity: 1,
    subtotal: 5000,
  },
  {
    id: uid(),
    name: "Bcaa",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "900",
    quantity: 1,
    subtotal: 900,
  },
  {
    id: uid(),
    name: "Creatine Monohydrate",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "2000",
    quantity: 1,
    subtotal: 2000,
  },
  {
    id: uid(),
    name: "PreWorkout",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "5000",
    quantity: 1,
    subtotal: 5000,
  },
  {
    id: uid(),
    name: "Bcaa",
    weight: "500gm",
    img: img0100,
    flaviur: "Orange",
    price: "900",
    quantity: 1,
    subtotal: 900,
  },
]

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: [...state.items, action.payload],
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
      totalAmount: state.items.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
      totalItems: state.items.reduce((acc, curr) => acc + curr.quantity, 0),
    }
  }

  if(action.type === "SUB_TOTAL"){
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

const initialState = {
  items: phcartItems,
  totalAmount: 0,
  totalItems: 0,
}

export const GlobalStateProvider = ({ children }) => {
  const [muscle, setMuscle] = useState(" ")

  //reducer for cart
  const [state, dispatch] = useReducer(reducer, initialState)

  //to remove item from cart
  const removeEl = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const incrementItem = (id) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id })
  }

  const decrementItem = (id) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id })
  }

  useEffect(() => {
    dispatch({ type: "SUB_TOTAL" })
    dispatch({ type: "TOTAL" })
  }, [state.items])

  return (
    <GlobalStateContext.Provider
      value={{
        muscle,
        setMuscle,
        state,
        removeEl,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
