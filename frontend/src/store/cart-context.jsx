/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addMeal: (meal) => {},
  removeMeal: (id) => {},
  clearMeal: () => {}
});

function cartReducer(state, action) {
  if (action.type === "ADD_MEAL") {
    const existingCartMealIndex = state.items.findIndex(
      (meal) => meal.id === action.meal.id
    );

    const updatedMeals = [...state.items];

    if (existingCartMealIndex > -1) {
      const existingMeal = updatedMeals[existingCartMealIndex];
      const updateExistingMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity + 1,
      };
      updatedMeals[existingCartMealIndex] = updateExistingMeal;
    } else {
      updatedMeals.push({
        ...action.meal,
        quantity: 1,
      });
    }

    console.log(updatedMeals)

    return {
      ...state,
      items: updatedMeals,
    };
  }

  if (action.type === "REMOVE_MEAL") {
    const existingCartMealIndex = state.items.findIndex(
      (meal) => meal.id === action.id
    );

    const updatedMeals = [...state.items];

    const existingMeal = updatedMeals[existingCartMealIndex];

    if (existingMeal.quantity === 1) {
      updatedMeals.splice(existingCartMealIndex, 1);
    } else if (existingMeal.quantity > 1) {
      const updateExistingMeal = {
        ...existingMeal,
        quantity: existingMeal.quantity - 1,
      };
      updatedMeals[existingCartMealIndex] = updateExistingMeal;
    }
    return {
      ...state,
      items: updatedMeals,
    };
  }

  if (action.type === "CLEAR_MEAL") {
    return {
      ...state,
      items: []
    }
  }

  return state
}

export default function CartContextProvider({ children }) {
  const [cartValue, dispatch] = useReducer(cartReducer, { items: [] });

  function addMeal(meal) {
    dispatch({type: "ADD_MEAL", meal})
  }

  function removeMeal(id) {
    dispatch({type: "REMOVE_MEAL", id})
  }

  function clearMeal() {
    dispatch({type: "CLEAR_MEAL"})
  }

  const contextValue = {
    items: cartValue.items,
    addMeal,
    removeMeal,
    clearMeal
  }

  return <CartContext.Provider value={contextValue}>
    {children}
  </CartContext.Provider>
}
