import styled from "styled-components";

export const CatalogContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px !important;
  margin: auto;
  width: 100%;
  padding: 0 55px;
  transition: 0.3s ease all;
`;

export const SearchBarCatalog = styled(({ ...props }) => <input {...props} />)`
  font-size: 30px;
  width: 100%;
  border-radius: 35px;
  margin-bottom: 40px;
  padding: 30px 0px 20px 20px;
  font-weight: 400;
`;

export const UpperFilterContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
`;

export const SortSelectBox = styled(({ ...props }) => <div {...props} />)``;

export const SortSelectBoxSelect = styled(({ ...props }) => <select {...props} />)`
  font-size: 20px;
  padding: 15px 20px 10px 30px;
  border: none;
  background: transparent;
  display: flex;
`;

export const PokedexIdRange = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const PokedexContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  align-items: center;
`;

export const PokedexLabel = styled(({ ...props }) => <label {...props} />)`
  margin-right: 10px;
  margin-left: 10px;
  font-size: 20px;
`;

export const PokedexInput = styled(({ ...props }) => <input {...props} />)`
  font-size: 20px;
  width: 120px;
  padding: 15px 20px 10px 30px;
  border-radius: 15px;
`;

export const FilterContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SingleFilterContainer = styled(({ ...props }) => <div {...props} />)`
  padding: 15px 60px 15px 20px;
  border: 1px solid #000;
  background: #fff;
  border-radius: 15px;
`;

export const SingleFilterSelect = styled(({ ...props }) => <select {...props} />)`
  border: none;
  background: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const PokeCatalogContainer = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 100px;
`;

export const Option = styled(({ ...props }) => <option {...props} />)``;
