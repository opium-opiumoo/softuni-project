import { Hamburger } from "components/Hamburger"
import { SearchInput } from "components/SearchInput"
import { Container } from "./elements"

export const SearchAndHamburger = ({...props}) => {
    return <Container {...props}>
        <SearchInput />
        <Hamburger />
    </Container>
}