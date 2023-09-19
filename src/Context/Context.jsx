import React, { useState, useReducer, useEffect } from "react"
import { uid } from "uid"
import img0100 from "../../public/btl_creatine_1_400x400.png"
import { reducer } from "../utils/Reducer"
export const GlobalStateContext = React.createContext()

//prettier-ignore
export const phcartItems = [
  {
    id: uid(),
    name: "Creatine Monohydrate",
    weight: "500gm",
    img: img0100,
    desc: "Creatine is stored in the muscle as creatine phosphate. Those familiar know ATP, cellular energy, is adenosine triphosphate. There’s something special about those phosphates. When they are clipped off the parent molecule, they release a ton of energy. The cell is able to harvest this energy and put it to work. In the muscle, this powers muscle contractions.",
    flavour: "Orange",
    price: "2000",
    quantity: 1,
    subtotal: 2000,
    rating: 5,
  },
  {
    id: uid(),
    name: "PreWorkout",
    weight: "500gm",
    img: img0100,
    flavour: "Orange",
    price: "5000",
    quantity: 1,
    subtotal: 5000,
  },
  {
    id: uid(),
    name: "Bcaa",
    weight: "500gm",
    img: img0100,
    flavour: "Orange",
    price: "900",
    quantity: 1,
    subtotal: 900,
  },
  {
    id: uid(),
    name: "Creatine Monohydrate",
    weight: "500gm",
    img: img0100,
    flavour: "Orange",
    price: "2000",
    quantity: 1,
    subtotal: 2000,
  },
  {
    id: uid(),
    name: "PreWorkout",
    weight: "500gm",
    img: img0100,
    flavour: "Grape",
    price: "5000",
    quantity: 1,
    subtotal: 5000,
  },
  {
    id: uid(),
    name: "Bcaa",
    weight: "500gm",
    img: img0100,
    flavour: "Orange",
    price: "900",
    quantity: 1,
    subtotal: 900,
  },
]

let initialState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
}

export const GlobalStateProvider = ({ children }) => {
  const [muscle, setMuscle] = useState(" ")

  //reducer for cart
  const [state, dispatch] = useReducer(reducer, initialState)

  //add item to cart
  const addToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item })
  }

  //to remove item from cart
  const removeEl = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const incrementItem = (id) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id })
    dispatch({ type: "SUB_TOTAL" })
  }

  const decrementItem = (id) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id })
    dispatch({ type: "SUB_TOTAL" })
  }

  const selectFlavour = (id, flavour) => {
    dispatch({ type: "SELECT_FLAVOUR", payload: { id, flavour } })
  }

  useEffect(() => {
    console.log(state.items)
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
        addToCart,
        selectFlavour,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
