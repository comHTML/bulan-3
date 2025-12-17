import useCounterWithToggle from "../hooks/useCounterWithToggle";

function CounterComponent() {
  const { count, increment, show, toggleShow } = useCounterWithToggle();

  return (
    <div>
      <button onClick={toggleShow}>Toggle Counter</button>
      {show && (
        <>
          <p>Count: {count}</p>
          <button onClick={increment}>Tambah</button>
        </>
      )}
    </div>
  );
}

export default CounterComponent;
