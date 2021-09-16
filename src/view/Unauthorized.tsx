import { useForm } from "react-hook-form";
import { useAuth } from "hooks/useAuth";
import { Inputs } from "types/types";
import Button from "components/atoms/Button/Button";
import styled from "styled-components";
import { theme } from "theme/theme";
import Input from "components/atoms/Input/Input";

const Wrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
`;

const Unauthorized = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<Inputs>();

  return (
    <Wrapper onSubmit={handleSubmit(signIn)}>
      <div>
        <div>Your login/email</div>
        <Input
          {...register("login", { required: true })}
          placeholder="email"
          name="login"
          defaultValue="teacher@react.com"
        />
      </div>
      <div>
        <div>Your password</div>
        <Input
          {...register("password", { required: true })}
          placeholder="password"
          name="password"
          type="password"
          defaultValue="Hard123Hard"
        />
      </div>

      <Button type="submit" backgroundColor={theme.color.primary} color={theme.color.background}>
        Log in
      </Button>
    </Wrapper>
  );
};

export default Unauthorized;
