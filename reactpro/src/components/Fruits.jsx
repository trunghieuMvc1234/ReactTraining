import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana"];
  const fruit1s = [
    {
      name: "Apple",
      price: 10,
    },
    {
      name: "Mango",
      price: 11,
    },
    {
      name: "Banana",
      price: 12,
    },
  ];
  return (
    <div>
      <h2>
        lession 13 - Rendering Arrays Or Lists In React
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </h2>
      <h2>
        lession 14 - Rendering Array Of Objects In React
        <ul>
          {fruit1s.map((fruit) => (
            <li key={fruit.name}>
              {fruit.name} {fruit.price}
            </li>
          ))}
        </ul>
      </h2>
      <h2>
        lession 15 - Rendering Components Inside A Loop
        <ul>
          {fruit1s.map((fruit) => (
            <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
          ))}
        </ul>
      </h2>
    </div>
  );
}
