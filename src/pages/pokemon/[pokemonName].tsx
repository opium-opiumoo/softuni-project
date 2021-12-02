import { NextPage } from "next";

import { Header } from "~/collections";
import { BackgroundColor, PageWidth } from "~/components";

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
