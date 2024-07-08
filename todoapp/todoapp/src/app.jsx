import Header from "./components/Header";
import InlineComponent from "./components/InlineComponent";
import OutlineComponent from "./components/OutlineComponent";
import Todo from "./components/Todo";
import Todo1 from "./components/Todo1";

export function App() {
  return (
    <div>
      {/* <Todo1 />
      <InlineComponent />
      <OutlineComponent /> */}
      <Header />
      <Todo />
    </div>
  );
}
