import { BackgroundColor, PageWidth } from "~/components";
import { Header } from "~/collections";
import { NextPage } from "next";
import { Hero } from "~/sections";
const HomePage: NextPage = () => {
  return (
    <BackgroundColor>
      <PageWidth>
        <Header />
        <Hero />
      </PageWidth>
    </BackgroundColor>
  );
};

export default HomePage;
