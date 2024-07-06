export default function Fruit1({ name, price, soldout }) {
  return (
    <>
      {price > 10 ? (
        <h2>
          <li>
            {name} {price} {soldout ? "soldout" : ""}
          </li>
        </h2>
      ) : (
        ""
      )}
    </>
  );
}
