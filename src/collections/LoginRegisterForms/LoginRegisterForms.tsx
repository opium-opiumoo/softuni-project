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
  CancelButton,
  RegisterForm,
  FormContainer,
  FormContainerHalf,
  ClearDiv,
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
            <CancelButton>{/* add cancel button text */}</CancelButton>
          </FormHolder>
        </RecoverPasswordContainer>
      </LoginSection>
      <LoginSection>
        <Header>{/* add register text */}</Header>
        <LoginFormContainer>
          <RegisterForm>
            <FormContainer>
              <FormContainerHalf>
                <FormInput
                  autocomplete="given-name"
                  type="text"
                  name="customer[first_name]"
                  aria-label="First Name"
                  placeholder="First Name"
                  autocapitalize="words"
                  autofocus=""
                />
              </FormContainerHalf>
              <FormContainerHalf>
                <FormInput
                  autocomplete="family-name"
                  type="text"
                  name="customer[last_name]"
                  aria-label="Last Name"
                  placeholder="Last Name"
                  autocapitalize="words"
                />
              </FormContainerHalf>
            </FormContainer>
            <ClearDiv>
              <ClearDiv>
                <FormInput
                  autocomplete="email"
                  type="email"
                  name="customer[email]"
                  aria-label="Email"
                  placeholder="Email"
                  autocorrect="off"
                  autocapitalize="off"
                />
              </ClearDiv>
              <ClearDiv>
                <FormInput
                  autocomplete="on"
                  type="password"
                  name="customer[password]"
                  aria-label="Password"
                  placeholder="Password"
                />
              </ClearDiv>
            </ClearDiv>
            <ClearDiv>
              <Button type="submit" value="Create account" />
            </ClearDiv>
          </RegisterForm>
        </LoginFormContainer>
      </LoginSection>
    </LoginPage>
  );
};
