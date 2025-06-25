import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => setDarkMode(prev => !prev)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            <div className={darkMode ? 'theme-dark' : 'theme-light'}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)