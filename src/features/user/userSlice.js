import { createSlice } from "@reduxjs/toolkit";

const themes = {
  winter: "winter",
  sunset: "sunset",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);

  return theme;
};

const initialState = {
  user: { userName: "codding addict" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },

    logoutUser: (state) => {
      console.log("logout");
    },

    toggleTheme: (state) => {
      const { winter, sunset } = themes;
      state.theme = state.theme === sunset ? winter : sunset;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice;
