import { useState, useEffect } from 'react'

function toggleBackground(shouldShow: boolean) {
  document.body.classList.toggle("with-bg", shouldShow);
}

function Beautifier() {
  const [isBeautiful, setIsBeautiful] = useState<boolean>(false);

  // Aquí falta el efecto

  useEffect(() => {
    toggleBackground(isBeautiful);
  }, [isBeautiful]);

  function handleChange() {
    setIsBeautiful(!isBeautiful);
  }

  return (
    <label>
      <input type="checkbox" onChange={handleChange} />
      — Habilitar fondo hermoso
    </label>
  );
}

export default Beautifier
