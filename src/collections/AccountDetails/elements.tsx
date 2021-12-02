import styled from "styled-components";

export const StyledAccountDetails = styled(({ ...props }) => <div {...props} />)`
  transition: 0.3s ease all;
  max-width: 1250px;
  margin: auto;
  width: 100%;
  padding: 0 55px;
`;

export const BigHeader = styled(({ ...props }) => <h2 {...props} />)`
  font-size: 60px;
`;

export const Container = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: space-between;
  padding: 50px 0px 100px 0px;
`;

export const ProfileWrapper = styled(({ ...props }) => <div {...props} />)`
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background: #fff;
  width: 35%;
`;

export const ProfileImgWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
`;

export const ProfileImg = styled(({ ...props }) => <img {...props} />)`
  max-width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

export const ProfileDetailsWrapper = styled(({ ...props }) => <div {...props} />)`
  padding: 40px 0px 40px 20px;
`;

export const DetailsHeader = styled(({ ...props }) => <h3 {...props} />)`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const DetailsWrapper = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  margin-bottom: 15px;
`;

export const DetailsParagraph = styled(({ ...props }) => <p {...props} />)`
  &:last-child {
    margin-left: 20px;
  }
`;

export const AccountActions = styled(({ ...props }) => <div {...props} />)``;

export const AccountButton = styled(({ ...props }) => <button {...props} />)``;

export const TopPokemons = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const AllPokeContainer = styled(({ ...props }) => <div {...props} />)``;

export const AllPokeHeader = styled(({ ...props }) => <h3 {...props} />)`
  font-size: 60px;
`;

export const AllPokeWrapper = styled(({ ...props }) => <div {...props} />)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 100px;
`;
