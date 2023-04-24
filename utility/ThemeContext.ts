import { createContext } from "react";

interface ThemeContextValue {
    theme: "dark" | "light";
    setTheme: (theme: "dark" | "light") => void;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "dark", setTheme: () => { } });

export default ThemeContext;