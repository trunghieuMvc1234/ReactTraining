export default function () {
  function handleClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <h2>lession 21 - Event Handling In React</h2>
      <button onClick={handleClick}>Click here to get message</button>
    </div>
  );
}
