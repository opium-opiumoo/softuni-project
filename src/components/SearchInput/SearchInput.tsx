import { Container } from "components/Hamburger/elements"
import { SearchInput as HeaderSearchInput, SearchSubmit } from "./elements"

export const SearchInput = () => {
    return (
        <Container>
            <HeaderSearchInput />
            <SearchSubmit />
        </Container>
    )
    
}