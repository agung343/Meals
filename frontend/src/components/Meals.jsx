import { useState, useEffect } from "react";

import MealItem from "./MealItem";

export default function Meals() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function getMeals() {
            const response = await fetch("http://localhost:5000/meals")

            if (!response.ok) {
                return;
            }

            const resData = await response.json()

            setMeals(resData)
        }

        getMeals()
    }, [])
    return (<>
        <ul className="w-[90%] max-w-5xl list-none my-8 mx-auto p-4 gap-4 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
            {meals.map(item => (
                <MealItem key={item.id} meal={item} />
            ))}
        </ul>
    </>)
}