import styled from "styled-components";

export const Container = styled(({...props}) => <div {...props} />)`
    width: 60px;
    height: 45px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
`

export const Bar = styled(({...props}) => <span {...props} />)`
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: #d3531a;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;

    &:nth-child(1) {
        top: 0px;
    }

    &:nth-child(2) {
        top: 18px;
    }

    &:nth-child(3) {
        top: 18px;
    }

    &:nth-child(4) {
        top: 36px;
    }
`