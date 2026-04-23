import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useAuthStore } from "../store/authStore";
import { logger } from "../utils/logger";

const InitAuthListener = () => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      logger.info("Auth state changed", { user });
    });

    return () => unsubscribe();
  }, [setUser]);
};

export { InitAuthListener };
