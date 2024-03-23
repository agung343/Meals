import { useContext, useState } from "react";
import { CartContext } from "../../store/cart-context";
import { UserProgress } from "../../store/user-progress";
import { currecyFormatter } from "../../util/currencyFormat";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    "postal-code": "",
    city: "",
  });

  const { items, clearMeal } = useContext(CartContext);
  const { progress, closeCheckout } = useContext(UserProgress);

  const cartTotalPrice = items.reduce((totalPrice, item) => {
    return totalPrice + item.price * item.quantity;
  }, 0);

  function handleChange(e, name) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: e.target.value,
      };
    });
  }

  function closeCheckoutHandle() {
    closeCheckout();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const customer = {
      name: formData.name,
      email: formData.email,
      street: formData.street,
      "postal-code": formData["postal-code"],
      city: formData.city,
    };

    const order = {
      order: {
        items: items,
        customer: customer,
      },
    };

    console.log(order);
    clearMeal();
    closeCheckout();
  }

  return (
    <Modal onOpen={progress === "checkout"} onClose={closeCheckoutHandle}>
      <form onSubmit={handleSubmit}>
        <h2 className="my-4 mx-0 font-bold text-xl uppercase">
          Fill Your Order
        </h2>
        <p>Total Bill: {currecyFormatter.format(cartTotalPrice)}</p>

        <Input
          id="name"
          label="Full Name"
          type="text"
          onChange={(e) => handleChange(e, "name")}
          value={formData.name}
        />
        <Input
          id="email"
          label="Email Address"
          type="email"
          onChange={(e) => handleChange(e, "email")}
          value={formData.email}
        />
        <Input
          id="street"
          label="Street"
          type="text"
          onChange={(e) => handleChange(e, "street")}
          value={formData.street}
        />

        <p className="flex justify-start gap-4">
          <Input
            id="postal-code"
            label="Postal Code"
            type="text"
            onChange={(e) => handleChange(e, "postal-code")}
            value={formData["postal-code"]}
          />
          <Input
            id="city"
            label="City"
            type="text"
            onChange={(e) => handleChange(e, "city")}
            value={formData.city}
          />
        </p>
        <p className="modal-actions">
          <Button
            onClick={handleChange}
            textOnly
            cssClasses="text-article hover:text-price active:text-price"
          >
            Cancel
          </Button>
          <Button type="submit">Order</Button>
        </p>
      </form>
    </Modal>
  );
}
