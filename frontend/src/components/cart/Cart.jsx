import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { UserProgress } from "../../store/user-progress";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

export default function Cart() {
  const { items, addMeal, removeMeal } = useContext(CartContext);
  const { progress, closeCart, showCheckout } = useContext(UserProgress);

  const totalMealsPrice = items.reduce((totalPrice, meal) => {
    return totalPrice + meal.quantity * meal.price;
  }, 0);

  function handleShowCheckout() {
    showCheckout();
    console.log(progress)
  }

  function handleCloseCart() {
    closeCart();
    console.log(progress)
  }

  return (
    <>
      <Modal
        onOpen={progress === "cart"}
        onClose={progress === "cart" ? handleCloseCart : null}
      >
        <h2 className="my-4 mx-0">Your Cart Meals</h2>
        <ul className="p-0 my-2 m-0 list-none">
          {items.map((item) => (
            <CartItem
              key={item.id}
              cart={item}
              onAddMeal={() => addMeal(item)}
              onRemoveMeal={() => removeMeal(item.id)}
            />
          ))}
        </ul>
        <p className="flex justify-end my-8 text-lg font-bold text-stone-700">
          {totalMealsPrice}
        </p>
        <p className="modal-actions">
          <Button
            onClick={handleCloseCart}
            textOnly
            cssClasses="text-article hover:text-price active:text-price"
          >
            Close
          </Button>
          {items.length > 0 && (
            <Button onClick={handleShowCheckout}>Checkout</Button>
          )}
        </p>
      </Modal>
    </>
  );
}
