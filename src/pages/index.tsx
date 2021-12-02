import { NextPage } from "next";
import { useRouter } from "next/router";

import { Header } from "~/collections";
import { BackgroundColor, PageWidth } from "~/components";
import { Hero } from "~/sections";
const HomePage: NextPage = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.substring(1);

  return (
    <BackgroundColor page={currentPath}>
      <PageWidth>
        <Header />
        <Hero />
      </PageWidth>
    </BackgroundColor>
  );
};

export default HomePage;
