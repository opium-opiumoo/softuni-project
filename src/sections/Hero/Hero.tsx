import { SearchAndHamburger } from "collections/SearchAndHamburger"
import { PageWidth } from "~/components"
import { Container, HeroCta } from "./elements"

export const Hero = () => {
    return <Container>
        <PageWidth>
            <SearchAndHamburger />
            <HeroCta />
        </PageWidth>
    </Container>
}