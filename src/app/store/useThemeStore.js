import { create } from "zustand";

export const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("theme") || "dark";

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return {
    theme: savedTheme,
    isDark: savedTheme === "dark",
    toggleTheme: () =>
      set((state) => {
        const nextTheme = state.theme === "light" ? "dark" : "light";
        const isDark = nextTheme === "dark";

        if (isDark) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }

        localStorage.setItem("theme", nextTheme);

        return { theme: nextTheme, isDark };
      }),
  };
});
