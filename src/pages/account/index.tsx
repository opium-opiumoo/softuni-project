import { useRouter } from "next/router";
import { NextPage } from "next";
import { BackgroundColor, PageWidth } from "~/components";
import { Header } from "~/collections";

const AccountPage: NextPage = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.substring(1);

  return (
    <>
      <BackgroundColor page={currentPath}>
        <PageWidth>
          <Header />
        </PageWidth>
      </BackgroundColor>
    </>
  );
};

export default AccountPage;
