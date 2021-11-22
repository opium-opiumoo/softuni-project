import { CtaButton, Description, Headline } from "./elements"

export const HeroCta = ({...props}) => {
    return <div {...props}>
                <Headline>Gotta Catch 'Em All!</Headline>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptatibus quasi voluptate autem. Minima libero, id molestias accusantium dolorum perferendis.</Description>
                <CtaButton>
                    More information
                </CtaButton>
            </div>
}


/**
 * <Container>
 *   <Headline>...</Headline>
 *   <Description>...</Description>
 *   <CtaButton>...</CtaButton>
 *   <Slider>
 *     <Slide />
 *     <Slide />
 *   </Slider
 * 
 */