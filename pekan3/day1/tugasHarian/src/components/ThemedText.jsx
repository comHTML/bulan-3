import { useTheme } from "../contexts/ThemeContext";

export default function ThemedText() {
  const { theme } = useTheme();
  return <p>Tema aktif: {theme}</p>;
}
