import { useTheme } from "../contexts/ThemeContext";

export default function ThemedCard() {
  const { theme } = useTheme();
  return <div>Card dengan tema {theme}</div>;
}
