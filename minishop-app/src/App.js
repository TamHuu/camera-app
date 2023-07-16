import React from "react";
import { CustomRouter } from "./route";
import styles from "./app.module.css";
function App() {
  return (
    <div className={styles.body}>
      <CustomRouter />
    </div>
  );
}

export default App;
