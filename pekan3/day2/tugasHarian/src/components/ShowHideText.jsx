import useToggle from "../hooks/useToggle";

function ShowHideText() {
  const [show, toggleShow] = useToggle(false);

  return (
    <div>
      <button onClick={toggleShow}>
        {show ? "Sembunyikan" : "Tampilkan"}
      </button>
      {show && <p>Ini teks yang bisa disembunyikan</p>}
    </div>
  );
}

export default ShowHideText;
