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

export const CatalogSearch = () => {
  return (
    <CatalogContainer>
      <SearchBarCatalog />
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
          <SingleFilterSelect name="type">
            <Option value="" disabled selected>
              Type
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="type">
            <Option value="" disabled selected>
              Type
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="type">
            <Option value="" disabled selected>
              Type
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
        <SingleFilterContainer>
          <SingleFilterSelect name="type">
            <Option value="" disabled selected>
              Type
            </Option>
          </SingleFilterSelect>
        </SingleFilterContainer>
      </FilterContainer>
      <PokeCatalogContainer></PokeCatalogContainer>
    </CatalogContainer>
  );
};
