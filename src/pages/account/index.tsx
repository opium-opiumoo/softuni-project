import { AccountDetails } from "collections/AccountDetails";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Header } from "~/collections";
import { BackgroundColor, PageWidth } from "~/components";

const AccountPage: NextPage = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.substring(1);

  return (
    <>
      <BackgroundColor page={currentPath}>
        <PageWidth>
          <Header />
          <AccountDetails />
        </PageWidth>
      </BackgroundColor>
    </>
  );
};

export default AccountPage;
