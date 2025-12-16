import { useTheme } from "../contexts/ThemeContext";

export default function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Ganti Tema ({theme})
    </button>
  );
}
