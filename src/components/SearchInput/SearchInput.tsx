import { Container } from "./elements"
import { SearchInput as HeaderSearchInput, SearchSubmit } from "./elements"

export const SearchInput = () => {
    return (
        <Container>
            <HeaderSearchInput />
            <SearchSubmit />
        </Container>
    )
    
}