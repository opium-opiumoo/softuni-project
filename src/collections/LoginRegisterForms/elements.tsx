import styled from "styled-components";

export const LoginPageContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transition: 0.3s ease all;
  max-width: 1250px;
  margin: auto;
  width: 100%;
  padding: 95px 0px 40px 0px !important;
`;

export const LoginSection = styled(({ ...props }) => <div {...props} />)`
  width: 35%;
`;

export const Header = styled(({ ...props }) => <h1 {...props} />)`
  margin-bottom: 17.5px;
`;

export const LoginSectionContent = styled(({ ...props }) => <div {...props} />)``;

export const ResetPassword = styled(({ ...props }) => <div {...props} />)`
  display: none;
`;

export const LoginFormContainer = styled(({ ...props }) => <div {...props} />)``;

export const LoginForm = styled(({ ...props }) => <form {...props} />)``;

export const FormInput = styled(({ ...props }) => <input {...props} />)`
  display: block;
  width: 100%;
  margin-bottom: 19.44444px;
  padding: 14px;
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
  max-width: 100%;
  line-height: 1.2;
  border-radius: 0;
`;

export const ButtonContainer = styled(({ ...props }) => <div {...props} />)`
  color: #000;
  margin: 0 0 19.44444px;
`;

export const Button = styled(({ ...props }) => <input {...props} />)`
  display: inline-block;
  width: auto !important;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 0;
  padding: 8px 15px;
  background-color: #000 !important;
  color: #fff !important;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: normal;
  font-size: 14px;
  padding: 15px 60px !important;
  font-weight: 600;
  transition: 0.3s ease all;

  &:hover {
    color: #000 !important;
    background: #fff !important;
  }
`;

export const RecoverPasswordContainer = styled(({ ...props }) => <div {...props} />)`
  display: none;
`;

export const Paragraph = styled(({ ...props }) => <p {...props} />)``;

export const FormHolder = styled(({ ...props }) => <div {...props} />)``;

export const CancelButton = styled(({ ...props }) => <button {...props} />)`
  outline: 0;
  opacity: 1;
  text-transform: capitalize;
  border: 0;
  background: 0 0;
  text-decoration: underline;
`;

export const RegisterForm = styled(({ ...props }) => <form {...props} />)``;

export const FormContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
`;

export const FormContainerHalf = styled(({ ...props }) => <div {...props} />)``;

export const ClearDiv = styled(({ ...props }) => <div {...props} />)``;
