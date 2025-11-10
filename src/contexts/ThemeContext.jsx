import { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Create the context
const ThemeContext = createContext();

// 2️⃣ Create the provider component
const ThemeProvider = ({ children }) => {
  // Function to get theme value from localStorage
  const getThemeValue = () => {
    // localStorage stores strings, so we convert to boolean
    return localStorage.getItem("darkMode") == "true";
  };

  // 3️⃣ Define state
  const [darkMode, setDarkMode] = useState(getThemeValue);

  // 4️⃣ Function to toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    localStorage.setItem("darkMode", newMode);
    setDarkMode(newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 6️⃣ Context value
  const themeContextValue = {
    darkMode,
    toggleTheme,
  };

  // 7️⃣ Return the provider with children
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// 8️⃣ Export the provider as default
export default ThemeProvider;

// 9️⃣ Create a custom hook for easy access
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
