import styled from "styled-components";
import { HeroCta as BaseHeroCta } from "~/collections";

export const Container = styled(({...props}) => <div {...props} />)`
    background-color: #f87f73;
    background-image: -webkit-linear-gradient(280deg,#B8C470 0%,#B8C470 50%,#FFF 50%,#FFF 60%);
    background-image: linear-gradient( 280deg,#B8C470 0%,#B8C470 50%,#FFF 50%,#FFF 60%);
    width: 100%;
    height: 100vh;
`

export const HeroCta = styled(({...props}) => <BaseHeroCta {...props} />)`
    
`