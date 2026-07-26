import { useState } from 'react'
import './App.css'
import NeonCursor from "./NeoCursor.tsx";

function App() {
  const [isCustomCursor, setIsCustomCursor] = useState<boolean>(false);

  function handleChange() {
    setIsCustomCursor(!isCustomCursor);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        — Habilitar el cursor neon
      </label>

      {isCustomCursor && <NeonCursor />}
    </>
  );
}

export default App
