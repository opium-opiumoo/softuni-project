import { NextPage } from "next";
import { BackgroundColor, PageWidth } from "~/components";
import { Header } from "~/collections";
import { LoginRegisterForms } from "collections/LoginRegisterForms";

const LoginPage: NextPage = () => {
  return (
    <>
      <BackgroundColor>
        <PageWidth>
          <Header />
          <LoginRegisterForms />
        </PageWidth>
      </BackgroundColor>
    </>
  );
};

export default LoginPage;
