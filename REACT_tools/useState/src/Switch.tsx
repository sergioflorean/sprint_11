import { useState } from "react";

type SwitchProps = {
  title: string;
  color: string;
};

function Switch(props: SwitchProps) {

  const [isActive, setIsActive] = useState(false);
  
  function handleClick() {

      setIsActive(previousState => !previousState);
    
  }

  const className = `switch ${props.color} ${isActive ? "on" : "off"}`;

  return (
    <>
      <div className={className}>
        <button className="img" onClick={handleClick} />
        <h3>{props.title}</h3>
      </div>
    </>
  );
}

export default Switch;
