import React, { useState, useReducer, useEffect } from "react";
import { uid } from "uid";
import img0100 from "../../public/btl_creatine_1_400x400.png";
import { reducer } from "../utils/Reducer";
export const GlobalStateContext = React.createContext();
import cloneDeep from "lodash/cloneDeep";

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

export const GlobalStateProvider = ({ children }) => {
  const [muscle, setMuscle] = useState(" ");

  const getCartData = ()=>{
    let localCart = localStorage.getItem("cartItem");
    if (localCart == []) {
      return []; 
    } else {
      return JSON.parse(localCart);
    }
  }

  let initialState = {
    items: getCartData(),
    readOnly: getCartData(),
    totalAmount: 0,
    totalItems: 0,
  };
  //reducer for cart
  const [state, dispatch] = useReducer(reducer, initialState);

  // add item to cart
  const addToCart = (
    id,
    name,
    img,
    flavour,
    price,
    quantity,
    weight,
    type,
    supplement
  ) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        name,
        img,
        flavour,
        price,
        quantity,
        weight,
        type,
        supplement,
      },
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(state.items));
  }, [state.items])
  

  //to remove item from cart
  const removeEl = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const incrementItem = (id) => {
    dispatch({ type: "INCREMENT_ITEM", payload: id });
  };

  const decrementItem = (id) => {
    dispatch({ type: "DECREMENT_ITEM", payload: id });
  };

  const selectFlavour = (id, flavour) => {
    dispatch({ type: "SELECT_FLAVOUR", payload: { id, flavour } });
  };

  const selectWeight = (id, weight, price) => {
    dispatch({ type: "SELECT_WEIGHT", payload: { id, weight, price } });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL" });
  }, [state.items]);

  const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
  }

  return (
    <GlobalStateContext.Provider
      value={{
        muscle,
        setMuscle,
        state,
        removeEl,
        incrementItem,
        decrementItem,
        selectFlavour,
        selectWeight,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
