import { NextPage } from "next";
import { BackgroundColor, PageWidth } from "~/components";
import { Header } from "~/collections";

const PokemonPage: NextPage = () => {
  return (
    <>
      <BackgroundColor>
        <PageWidth>
          <Header />
        </PageWidth>
      </BackgroundColor>
    </>
  );
};

export default PokemonPage;
