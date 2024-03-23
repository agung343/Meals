import CartContextProvider from "./store/cart-context";
import UserProgressProvider from "./store/user-progress";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";

function App() {
  return (
    <>
      <UserProgressProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressProvider>
    </>
  );
}

export default App;
