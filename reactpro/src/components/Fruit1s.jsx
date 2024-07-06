import Fruit1 from "./Fruit1";

export default function Fruit1s() {
  const fruit1s = [
    {
      name: "Apple",
      price: 10,
      soldout: false,
    },
    {
      name: "Mango",
      price: 11,
      soldout: false,
    },
    {
      name: "Banana",
      price: 12,
      soldout: true,
    },
  ];
  return (
    <div>
      <h2>lession 19 - Conditionally Rendering List Items</h2>
      <h2>lession 20 - Conditionally Rendering A Message Using Ternary</h2>
      <ul>
        {fruit1s.map((fruit) => (
          <Fruit1
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
