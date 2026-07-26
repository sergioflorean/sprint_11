import { useState, useEffect } from "react";
import "./App.css";

function playSound(fileName: string) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function Time() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    playSound("gong.mp3");
  }, []);

  useEffect(() => {
    let rafId: number;

    const tick = () => {
      const date = new Date();

      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    playSound("tick.mp3");
  }, [seconds]);

  return (
    <h2>
      {hours}:{minutes}:{seconds}:{milliseconds}
    </h2>
  );
}

function App() {
  const [isTimeShown, setIsTimeShown] = useState(false);

  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange} />
        — Habilitar tiempo
      </label>

      {isTimeShown && <Time />}
    </>
  );
}

export default App;