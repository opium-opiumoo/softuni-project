import { NextPage } from "next";
import { useRouter } from "next/router";

import { Header, CatalogSearch } from "~/collections";
import { BackgroundColor, PageWidth } from "~/components";
import { PokeSearchProvider } from "~/context";

const CatalogPage: NextPage = () => {
  const { asPath } = useRouter();

  const currentPath = asPath.substring(1);

  return (
    <>
      <BackgroundColor page={currentPath}>
        <PageWidth>
          <PokeSearchProvider>
            <Header />
            <CatalogSearch />
          </PokeSearchProvider>
        </PageWidth>
      </BackgroundColor>
    </>
  );
};

export default CatalogPage;
