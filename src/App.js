import { useState } from "react";
import styles from "./styles.module.css";
function App() {
  const [text, setText] = useState("Lorem ipsum dolor sit amet.");

  return (
    <div className={styles.appContainer}>
      <h1>Title Generator</h1>
      <input
        placeholder="Ingrese texto a generar"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className={styles.lucida}>{text} (Fuente: Lucida CALLIGRAPHY)</p>
    </div>
  );
}

export default App;
