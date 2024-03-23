import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { currecyFormatter } from "../util/currencyFormat";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  const { addMeal } = useContext(CartContext);

  function handleAddMealToCart() {
    addMeal(meal);
  }

  return (
    <li className="overflow-hidden bg-article text-center rounded-2xl shadow-neutral-950/30">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-80 object-cover"
          src={`http://localhost:5000/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3 className="my-3 font-bold text-2xl">{meal.name}</h3>
          <p className="inline-block bg-price text-jingga-primary text-base font-bold py-2 px-8 m-0 rounded-md">
            {currecyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <Button onClick={handleAddMealToCart}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}
