import { useState } from 'react';

function GoodDeeds() {
  /* crea un hook para la variable deeds  */
  const [deeds, setDeeds] = useState<string[]>([]);
  const [newDeed, setNewDeed] = useState<string>("");

  function handleAddTask() {
    // Aquí debes usar el setter para el hook que crearas
   if (!newDeed.trim()) return;

    setDeeds([...deeds, newDeed]);
    setNewDeed("");
  }

  return (
    <>
      <h3>Mis buenas acciones</h3>
      <input
        type="text"
        value={newDeed}
        onChange={(e) => setNewDeed(e.target.value)}
      />
      <button onClick={handleAddTask}>+</button>
      <ul>
        {deeds.map((deed, i) => (
          <li key={i}>{deed}</li>
        ))}
      </ul>
    </>
  );
}

export default GoodDeeds
