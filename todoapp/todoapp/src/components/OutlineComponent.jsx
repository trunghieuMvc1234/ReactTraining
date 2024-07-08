import "../css/style.css";
import styles from "./inlinecomponent.module.css";

export default function OutlineComponent() {
  return (
    <div>
      <h2>lession 34: Todo App Part 8 CSS Modules For Styling</h2>
      <h3 className="outline-header">This is an outline component </h3>
      <h2>lession 35: Todo App Part 8 CSS Modules For Styling</h2>
      <h3 className={styles.header}>Inline Component </h3>
    </div>
  );
}
