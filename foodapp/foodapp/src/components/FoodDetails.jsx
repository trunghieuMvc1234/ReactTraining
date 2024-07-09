import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "6e59153f952049879a941a6109067d3b";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      debugger;
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
      </div>
      <div>
        <span>
          <strong> 🕧{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>🧑‍🤝‍🧑Servers {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</span>
        <span>{food.vegan ? "🐮 Vegan" : ""}</span>
      </div>
      <div>
        💲 <span>{food.pricePerServing} Per serving</span>
      </div>
      <div>
        <h2>Instruction</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
