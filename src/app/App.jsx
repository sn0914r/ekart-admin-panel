import Providers from "./Providers";
import AppRouter from "./AppRouter";
import { Toaster } from "sonner";
import { InitAuthListener } from "../services/authListener";
import "./App.css";

const App = () => {
  InitAuthListener();

  return (
    <Providers>
      <Toaster position="bottom-right" richColors theme="light" closeButton visibleToasts={1} duration={2000} />
      <AppRouter />
    </Providers>
  );
};

export default App;
