import {
  CatalogContainer,
  FilterContainer,
  Option,
  PokeCatalogContainer,
  PokedexContainer,
  PokedexIdRange,
  PokedexInput,
  PokedexLabel,
  SearchBarCatalog,
  SingleFilterContainer,
  SingleFilterSelect,
  SortSelectBox,
  SortSelectBoxSelect,
  UpperFilterContainer,
} from "./elements";

import { useContext, useEffect } from "react";

import { PokeSearchContext } from "context/PokeSearchContext";
import { PokeCard } from "components/PokemonCard";
import { PokemonClient } from "pokenode-ts";

export const CatalogSearch = () => {
  const { pokemons } = useContext(PokeSearchContext);

  // const SearchChangeHandler = (e) => {
  //   console.log(e.target.value);

  //   useEffect(() => {
  //     const getPokemon = async () => {
  //       const api = new PokemonClient();

  //       const result = await api
  //         .getPokemonByName(e.target.value)
  //         .then((response) => console.log(response.data));
  //     };

  //     getPokemon();
  //   }, []);
  // };

  return (
    <CatalogContainer>
      <SearchBarCatalog placeholder="Search your Pokemon!" />
      <UpperFilterContainer>
        <SortSelectBox>
          <SortSelectBoxSelect name="sort">
            <Option value="ascending" selected>
              Ascending
            </Option>
            <Option value="descending" selected>
              Descending
            </Option>
          </SortSelectBoxSelect>
        </SortSelectBox>
        <PokedexIdRange>
          <PokedexContainer>
            <PokedexLabel for="low-range">from</PokedexLabel>
            <PokedexInput type="text" name="low-range" />
          </PokedexContainer>
          <PokedexContainer>
            <PokedexLabel for="high-range">from</PokedexLabel>
            <PokedexInput type="text" name="high-range" />
          </PokedexContainer>
        </PokedexIdRange>
      </UpperFilterContainer>
      <FilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="type">
            <Option value="" disabled selected>
              Type
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="weaknessess">
            <Option value="" disabled selected>
              Weaknesses
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="abilities">
            <Option value="" disabled selected>
              Abilities
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="height">
            <Option value="" disabled selected>
              Height
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="weight">
            <Option value="" disabled selected>
              Weight
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
      </FilterContainer>
      <PokeCatalogContainer>
        {pokemons.map((x) => (
          <PokeCard
            PokeImgSrc={x.sprites.front_shiny}
            PokeId={x.id}
            PokeName={x.name}
            PokeType={x.name}
          ></PokeCard>
        ))}
      </PokeCatalogContainer>
    </CatalogContainer>
  );
};
