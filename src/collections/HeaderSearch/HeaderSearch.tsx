import { SearchSVG } from "components/SearchSVG";
import { StyledHeaderSearch } from "./elements";

export const HeaderSearch = ({ ...props }) => {
  return (
    <StyledHeaderSearch {...props}>
      <input placeholder="Search" type="text" />
      <SearchSVG />
    </StyledHeaderSearch>
  );
};
