import styled from "styled-components";

export const PokeProfileWrap = styled(({ ...props }) => <div {...props} />)``;

export const PokeProfileContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PokeProfileImgWrap = styled(({ ...props }) => <div {...props} />)``;

export const PokeProfileImg = styled(({ ...props }) => <img {...props} />)`
  max-width: 450px;
`;

export const PokeProfileContent = styled(({ ...props }) => <div {...props} />)`
  margin-left: 5%;
`;

export const PokeProfileId = styled(({ ...props }) => <p {...props} />)`
  font-size: 60px;
`;

export const PokeProfileName = styled(({ ...props }) => <h3 {...props} />)`
  font-size: 100px;
  margin: 30px 0px;
`;

export const PokeProfileTypeWrap = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  padding: 20px;
  border-radius: 25px;
  max-width: fit-content;
`;

export const PokeProfileTypeIconWrap = styled(({ ...props }) => <div {...props} />)`
  width: 20px;
`;

export const PokeProfileType = styled(({ ...props }) => <p {...props} />)`
  font-size: 45px;
`;

export const AllDataContainer = styled(({ ...props }) => <div {...props} />)`
  margin-top: 10%;
`;

export const ThreeBoxContainer = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10%;
`;
