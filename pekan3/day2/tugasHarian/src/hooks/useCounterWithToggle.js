import useCounter from "./useCounter";
import useToggle from "./useToggle";

function useCounterWithToggle() {
  const { count, increment } = useCounter();
  const [show, toggleShow] = useToggle(true);

  return { count, increment, show, toggleShow };
}

export default useCounterWithToggle;
