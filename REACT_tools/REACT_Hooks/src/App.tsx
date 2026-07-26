import { useState } from 'react';
import './App.css';

function App() {
    /* ... */const [isKnockout, setIsKnockout] = useState<boolean>(false);

    function handleClick() {
      setIsKnockout(true);
    }

  return (
    <>
      <div>
        {!isKnockout ? (
          <>
            <span>🤨</span>
            <button onClick={handleClick}>Hook!</button>
          </>
        ) : (
          <span>🥴</span>
        )}
        <span>🥊</span>
      </div>
    </>
  )
}

export default App
