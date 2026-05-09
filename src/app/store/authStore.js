import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isHydrated: false,

      setAuth: (user, token) =>
        set({
          user,
          accessToken: token,
        }),

      updateToken: (token) => set({ accessToken: token }),

      logout: () =>
        set({
          user: null,
          accessToken: null,
        }),

      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: "auth-admin-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
