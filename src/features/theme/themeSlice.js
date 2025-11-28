import { createSlice } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "darkMode",
  initialState: localStorage.getItem("darkMode") == "true",
  reducers: {
    toggleTheme: (state) => {
      const newMode = !state;
      localStorage.setItem("darkMode", newMode);
      document.documentElement.classList[newMode ? "add" : "remove"]("dark");
      return newMode;
    },
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;


