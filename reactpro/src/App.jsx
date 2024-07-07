import ConditionComponent from "./components/ConditionComponent";
import ConditionComponent1 from "./components/ConditionComponent1";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Fruit1s from "./components/Fruit1s";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Hello1 from "./components/Hello1";
import Message from "./components/Message";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Hieu",
    message: "Hi there",
  };
  return (
    <div className="App">
      <Hello1 name="Rob" message="Hi there" />
      <Hello
        name="Rob"
        message="Hi there"
        seatNumbers={seatNumbers}
        person={person}
      />
      <Fruits />
      <ConditionComponent />
      <ConditionComponent1 />
      <Fruit1s />
      <Message />
      <Counter />
      <Form />
    </div>
  );
}

export default App;
