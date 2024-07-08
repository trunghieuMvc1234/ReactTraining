import "../css/style.css";
const header = { color: "blue" };

export default function InlineComponent() {
  return (
    <div>
      <h2>lession 33: Todo App Part 6 Inline Styling In React Components</h2>
      <h3 style={header}>Inline Component</h3>
      <h2>lession 34: TodoApp Part 7 CSS Stylesheets To Style Components</h2>
      <h3 className="inline-header">Inline Component</h3>
    </div>
  );
}
