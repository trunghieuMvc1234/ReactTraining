import styles from "./innerContainer.module.css";

export default function InnterContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
