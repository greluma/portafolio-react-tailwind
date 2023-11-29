const stringToBoolean = (str) => {
  return str === "true";
};

export const getInitialDarkMode = () => {
  const userPreferences = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storeDarkMode = stringToBoolean(localStorage.getItem("darkTheme"));
  return storeDarkMode === null ? userPreferences : storeDarkMode;
};
