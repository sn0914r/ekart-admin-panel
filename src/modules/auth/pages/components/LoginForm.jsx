import { useLoginForm } from "../../hooks/ui/useLoginForm";
import { Lock } from "lucide-react";
import * as S from "./LoginForm.styles";

const LoginForm = () => {
  const { register, errors, isPending, onSubmit } = useLoginForm();

  return (
    <S.FormContainer>
          <S.LoginHeader>
            <div
              style={{
                width: 48,
                height: 48,
                background: "var(--accent)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}
            >
              <Lock size={24} color="white" />
            </div>

            <S.AdminBadge>
              {/* <S.BadgeText>EKART</S.BadgeText> */}
              <S.BadgeText>EKART | ADMIN PANEL</S.BadgeText>
            </S.AdminBadge>

            <S.LoginTitle>Welcome back</S.LoginTitle>
            <S.LoginSubtitle>Sign in to access your account</S.LoginSubtitle>
          </S.LoginHeader>

          <S.Form onSubmit={onSubmit}>
            <S.FormGroup>
              <S.Label htmlFor="email">Email address</S.Label>
              <S.Input
                id="email"
                type="email"
                placeholder="admin@ekart.com"
                autoComplete="username"
                {...register("email")}
                disabled={isPending}
              />
              {errors.email && <S.ErrorText>{errors.email.message}</S.ErrorText>}
            </S.FormGroup>

            <S.FormGroup>
              <S.Label htmlFor="password">Password</S.Label>
              <S.Input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                {...register("password")}
                disabled={isPending}
              />
              {errors.password && (
                <S.ErrorText>{errors.password.message}</S.ErrorText>
              )}
            </S.FormGroup>

            <S.SubmitButton type="submit" disabled={isPending}>
              {isPending ? "Signing in..." : "Sign in"}
            </S.SubmitButton>
          </S.Form>
    </S.FormContainer>
  );
};

export default LoginForm;
