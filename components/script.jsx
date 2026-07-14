const root = ReactDOM.createRoot(document.getElementById("root"));

function Animal(props) {
  // obtener la hora actual en horas
  const hours = new Date().getHours();
  // comprueba si es de noche
  const isNight = hours > 19 || hours < 6;
  // dependiendo de la hora del día, los diferentes animales deben estar dormidos o despiertos
  const isSleeping =
    (isNight && !props.isNocturnal) || (!isNight && props.isNocturnal);

  return (
    <div className="animal">
      <div className="icon">{isSleeping ? "💤" : props.icon}</div>
      <div className="info">
        <h3>{props.name}</h3>
        <span>Altura: {props.height}</span>
      </div>
    </div>
  );
}

root.render(
  <>
    <h2>Africa</h2>
    <Animal icon="🦒" name="Jirafa" height="5.2 metros" isNocturnal={false} />
    <Animal
      icon="🦔"
      name="Erizo"
      height="15.2 centímetros"
      isNocturnal={true}
    />
    <Animal
      icon="🦨"
      name="Zorrillo"
      height="Demasiado maloliente para medirlo"
      isNocturnal={true}
    />
  </>,
);
