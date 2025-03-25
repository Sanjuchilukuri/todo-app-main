import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({});

export default function ThemeContextProvider({children}){
    const [currentTheme, SetTheme] = useState('dark');

    const toggleTheme = () => {
        SetTheme( prevTheme => {
            const newTheme = prevTheme == "light"?"dark":"light";
            return newTheme;
        });
    }

    return(
        <ThemeContext.Provider value={{currentTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}