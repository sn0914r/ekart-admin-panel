import { useAuthForm } from "./useLoginForm";
import { Monitor } from "lucide-react";
import {
  LoginWrapper,
  LoginCard,
  LoginHeader,
  LoginTitle,
  LoginSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorText,
  SubmitButton,
} from "./LoginPage.styles";

const LoginPage = () => {
  const { register, errors, isPending, onSubmit } = useAuthForm();

  return (
    <LoginWrapper>
      <LoginCard>
        <LoginHeader>
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
          <LoginTitle>Welcome back</LoginTitle>
          <LoginSubtitle>Sign in to access the eKart admin panel</LoginSubtitle>
        </LoginHeader>

        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@ekart.com"
              {...register("email")}
              disabled={isPending}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              disabled={isPending}
            />
            {errors.password && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </FormGroup>

          <SubmitButton type="submit" disabled={isPending}>
            {isPending ? "Signing in..." : "Sign in"}
          </SubmitButton>
        </Form>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginPage;
