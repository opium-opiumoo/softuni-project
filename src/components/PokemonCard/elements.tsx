import styled from "styled-components";

export const Wrapper = styled(({ ...props }) => <div {...props} />)`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  border-radius: 25px;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin-top: 100px;
`;

export const PokeCardImg = styled(({ ...props }) => <img {...props} />)`
  margin-top: -90px;
  margin-bottom: 60px;
  max-width: 80px;
`;

export const PokeCardTextWrap = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokeCardId = styled(({ ...props }) => <p {...props} />)`
  margin-bottom: 30px;
`;

export const PokeCardName = styled(({ ...props }) => <h5 {...props} />)`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const PokeCardTypeWrap = styled(({ ...props }) => <div {...props} />)``;

export const PokeCardType = styled(({ ...props }) => <div {...props} />)`
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;
