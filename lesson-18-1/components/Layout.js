import Drawer from "../components/Drawer";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Drawer />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

