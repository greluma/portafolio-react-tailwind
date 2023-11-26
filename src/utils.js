export const getInitialDarkMode = () => {
  const userPreferences = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storeDarkMode = localStorage.getItem("darkTheme") === "true";
  return storeDarkMode || userPreferences;
};
