import { useState, useEffect } from 'react'

function NeonCursor() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  function handleMouseMove(e: MouseEvent) {
    setPosition({
      top: e.pageY,
      left: e.pageX,
    });
  }

  // Aquí debes escribir tu hook useEffect

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.documentElement.classList.add("no-cursor");

    return () => {
      document.documentElement.classList.remove("no-cursor");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  document.addEventListener("mousemove", handleMouseMove);
  document.documentElement.classList.add("no-cursor");

  document.documentElement.classList.remove("no-cursor");
  document.removeEventListener("mousemove", handleMouseMove);

  return (
    <img
      src="https://code.s3.yandex.net/web-code/react/cursor.svg"
      width={30}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        pointerEvents: "none",
      }}
    />
  );
}

export default NeonCursor
