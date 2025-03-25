import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export function UseTheme(){
    return useContext(ThemeContext);
}