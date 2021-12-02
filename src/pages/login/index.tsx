import { NextPage } from "next";

import { Header, LoginRegisterForms } from "~/collections";
import { BackgroundColor, PageWidth } from "~/components";

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
