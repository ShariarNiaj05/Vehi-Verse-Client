import { createContext, useState } from "react";
export const ThemeContext = createContext(null)

const ThemeProviders = ({children}) => {
    const [theme, setTheme] = useState(null);
    const toggleTheme = () => {
        (current => current === 'light' ? 'bg-black' : 'bg-')
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
            {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProviders;