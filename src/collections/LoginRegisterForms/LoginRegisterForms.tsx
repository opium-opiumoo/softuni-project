import LoginPage from "pages/login";
import {
  Button,
  ButtonContainer,
  FormInput,
  Header,
  LoginForm,
  LoginFormContainer,
  LoginSection,
  LoginSectionContent,
  RecoverPasswordContainer,
  ResetPassword,
  Paragraph,
  FormHolder,
} from "./elements";

export const LoginRegisterForms = () => {
  return (
    <LoginPage>
      <LoginSection>
        <Header>{/* header text */}</Header>
        <LoginSectionContent>
          <ResetPassword>{/* Reset password text */}</ResetPassword>
          <LoginFormContainer>
            <LoginForm>
              <FormInput
                autocomplete="email"
                type="email"
                name="customer[email]"
                aria-label="Email"
                placeholder="Email"
                autocorrect="off"
                autocapitalize="off"
                autofocus=""
              />
              <FormInput
                autocomplete="on"
                type="password"
                value=""
                aria-label="Password"
                placeholder="Password"
              />
              <ButtonContainer>
                <Button type="submit" value="LOGIN"></Button>
              </ButtonContainer>
              <ButtonContainer>Forgot your password?</ButtonContainer>
            </LoginForm>
          </LoginFormContainer>
        </LoginSectionContent>
        <RecoverPasswordContainer>
          <Paragraph>{/* insert email recover password message for user */}</Paragraph>
          <FormHolder>
            <FormInput
              autocomplete="email"
              type="email"
              value=""
              name="email"
              aria-label="Email"
              placeholder="Email"
              autocorrect="off"
              autocapitalize="off"
            />
            <ButtonContainer>
              <Button type="submit" value="Submit"></Button>
            </ButtonContainer>
          </FormHolder>
        </RecoverPasswordContainer>
      </LoginSection>
    </LoginPage>
  );
};
