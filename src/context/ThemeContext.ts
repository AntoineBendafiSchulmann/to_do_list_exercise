import { createContext } from "react";
import { ThemeContextProps } from "../types/ThemeContextProps";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  toggleTheme: () => {},
});
