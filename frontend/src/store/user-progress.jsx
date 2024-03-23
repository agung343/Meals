import { createContext, useState } from "react";

export const UserProgress = createContext({
  progress: "",
  showCart: () => {},
  closeCart: () => {},
  showCheckout: () => {},
  closeCheckout: () => {},
});

export default function UserProgressProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function closeCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function closeCheckout() {
    setUserProgress("");
  }

  const contextValue = {
    progress: userProgress,
    showCart,
    closeCart,
    showCheckout,
    closeCheckout,
  };

  return (
    <UserProgress.Provider value={contextValue}>
      {children}
    </UserProgress.Provider>
  );
}
