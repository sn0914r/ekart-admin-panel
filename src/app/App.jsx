import Providers from "./Providers";
import AppRouter from "./AppRouter";
import { Toaster } from "sonner";
import { useThemeStore } from "./store/useThemeStore";
import "./App.css";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <Providers>
      <Toaster position="bottom-right" richColors theme={theme} closeButton visibleToasts={1} duration={2000} />
      <AppRouter />
    </Providers>
  );
};

export default App;
