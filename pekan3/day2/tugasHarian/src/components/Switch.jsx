import useToggle from "../hooks/useToggle";

function Switch() {
  const [on, toggleOn] = useToggle(false);

  return (
    <button onClick={toggleOn}>
      Switch: {on ? "ON" : "OFF"}
    </button>
  );
}

export default Switch;
