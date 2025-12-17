import useLocalStorage from "../hooks/useLocalStorage";

function ThemePreference() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div>
      <p>Tema: {theme}</p>
      <button
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        Ganti Tema
      </button>
    </div>
  );
}

export default ThemePreference;
