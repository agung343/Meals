import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { UserProgress } from "../store/user-progress";
import Button from "./UI/Button";

export default function Header() {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgress);
  const totalCartItems = items.reduce((totalNumberItems, item) => {
    return totalNumberItems + item.quantity;
  }, 0);

  function handleShowCart() {
    showCart();
  }
  return (
    <header className="flex justify-between items-center py-12 px-[10%]">
      <div className="flex gap-4 items-center">
        <img
          src="./logo.jpg"
          className="w-16 h-16 object-contain rounded-3xl border-2 border-solid border-jingga-primary"
        />
        <h1>React Meal App</h1>
      </div>
      <p>
        <Button
          textOnly
          cssClasses="text-2xl font-['Lato']"
          onClick={handleShowCart}
        >
          Cart ({totalCartItems})
        </Button>
      </p>
    </header>
  );
}
