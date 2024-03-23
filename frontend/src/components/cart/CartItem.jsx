import { currecyFormatter } from "../../util/currencyFormat";

export default function CartItem({ cart, onAddMeal, onRemoveMeal }) {
  return (
    <li className="flex justify-between items-center my-2 mx-0">
      <p className="m-0">{cart.name} - {cart.quantity} * {currecyFormatter.format(cart.price)} </p>

      <p className="flex gap-4 items-center">
        <button
          onClick={onRemoveMeal}
          className="flex justify-center items-center cursor-pointer text-[1rem] w-6 h-6 rounded-[50%] border-none bg-price text-jingga-primary hover:bg-article hover:text-jingga-secondary active:bg-article active:text-jingga-secondary"
        >
          -
        </button>
        <span>{cart.quantity}</span>
        <button
          onClick={onAddMeal}
          className="flex justify-center items-center cursor-pointer text-[1rem] w-6 h-6 rounded-[50%] border-none bg-price text-jingga-primary hover:bg-article hover:text-jingga-secondary active:bg-article active:text-jingga-secondary"
        >
          +
        </button>
      </p>
    </li>
  );
}
