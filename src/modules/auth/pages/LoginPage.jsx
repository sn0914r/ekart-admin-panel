import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@app/store/useThemeStore";
import * as S from "./components/LoginForm.styles";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <S.LoginWrapper>
      <S.SplashSection />
      
      <S.FormSection>
        <S.ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </S.ThemeToggle>

        <LoginForm />
      </S.FormSection>
    </S.LoginWrapper>
  );
};

export default LoginPage;
