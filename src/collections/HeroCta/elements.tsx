import styled from "styled-components";

export const Headline = styled(({...props}) => <h1 {...props} />)`
    font-size: 3.8rem;
`

export const Description = styled(({...props}) => <p {...props} />)`
    font-size: 1.4rem;
`

export const CtaButton = styled(({...props}) => <a {...props} />)`
    padding: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    background: #000;
    color: #fff;
`