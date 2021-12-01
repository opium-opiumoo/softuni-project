import { PokemonWideContainer, PokeCard } from "~/components";
import {
  AccountActions,
  AccountButton,
  AllPokeContainer,
  AllPokeHeader,
  AllPokeWrapper,
  BigHeader,
  Container,
  DetailsHeader,
  DetailsParagraph,
  DetailsWrapper,
  ProfileDetailsWrapper,
  ProfileImg,
  ProfileImgWrapper,
  ProfileWrapper,
  StyledAccountDetails,
  TopPokemons,
} from "./elements";

export const AccountDetails = () => {
  return (
    <StyledAccountDetails>
      <BigHeader>Account Details & Top Pokemons</BigHeader>
      <Container>
        <ProfileWrapper>
          <ProfileImgWrapper>
            <ProfileImg
              src="images/1630428974688-ash-ketchum-smiling-1165117-1280x0.jpeg"
              alt="profile pic"
            />
          </ProfileImgWrapper>
          <ProfileDetailsWrapper>
            <DetailsHeader>slavipm</DetailsHeader>
            <DetailsWrapper>
              <DetailsParagraph>Date of Birth:</DetailsParagraph>
              <DetailsParagraph>20 Jul 2000</DetailsParagraph>
            </DetailsWrapper>
            <DetailsWrapper>
              <DetailsParagraph>Owned Pokemons:</DetailsParagraph>
              <DetailsParagraph>5</DetailsParagraph>
            </DetailsWrapper>
            <DetailsWrapper>
              <DetailsParagraph>Favourite Pokemon:</DetailsParagraph>
              <DetailsParagraph>Charizard</DetailsParagraph>
            </DetailsWrapper>
            <AccountActions>
              <AccountButton>Edit Profile</AccountButton>
              <AccountButton>Delete Profile</AccountButton>
            </AccountActions>
          </ProfileDetailsWrapper>
        </ProfileWrapper>
        <TopPokemons>
          <PokemonWideContainer
            pokeId={"#004"}
            pokeName={"Charmander"}
            pokeIcon={""}
            pokeTypeText={"Fire"}
            pokeImgSrc={"images/clipart449009.png"}
          />
        </TopPokemons>
      </Container>
      <AllPokeContainer>
        <AllPokeHeader>Your Pokemons</AllPokeHeader>
        <AllPokeWrapper>
          <PokeCard
            PokeId="387"
            PokeImgSrc="images/clipart2509238.png"
            PokeName="Turtwig"
            PokeType="Grass"
          />
        </AllPokeWrapper>
      </AllPokeContainer>
    </StyledAccountDetails>
  );
};
