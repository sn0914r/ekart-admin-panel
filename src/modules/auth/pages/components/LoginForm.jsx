import { useLoginForm } from "../../hooks/ui/useLoginForm";
import { Monitor } from "lucide-react";
import * as S from "./LoginForm.styles";

const LoginForm = () => {
  const { register, errors, isPending, onSubmit } = useLoginForm();

  return (
    <S.LoginWrapper>
      <S.LoginCard>
        <S.LoginHeader>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: "var(--accent)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Monitor size={24} color="white" />
            </div>
          </div>
          <S.LoginTitle>Welcome back</S.LoginTitle>
          <S.LoginSubtitle>Sign in to access the eKart admin panel</S.LoginSubtitle>
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
      </S.LoginCard>
    </S.LoginWrapper>
  );
};

export default LoginForm;
