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
      <p className={styles.segoe}>{text} (Fuente: Segoe SCRIPT)</p>
      <p className={styles.monotype}>{text} (Fuente: Monotype CORSIVA)</p>
      <p className={styles.kghappy}>{text} (Fuente: KG Happy)</p>
      <p className={styles.msreference}>{text} (Fuente: MS Reference Sans)</p>
      <p className={styles.itc}>{text} (Fuente: ITC Avant Garde Gothic)</p>
      <p className={styles.palatino}>{text} (Fuente: PALATINO Linotype)</p>
      <p className={styles.mvboli}>{text} (Fuente: MV Boli)</p>
      <p className={styles.impact}>{text} (Fuente: IMPACT)</p>
      <p className={styles.javanese}>{text} (Fuente: Javanese TEXT)</p>
    </div>
  );
}

export default App;
