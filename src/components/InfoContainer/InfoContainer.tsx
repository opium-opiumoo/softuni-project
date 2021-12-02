import React from "react";

import {
  ContentContainer,
  DataBold,
  DataContainer,
  DataHeader,
  DataRow,
  DataWrapper,
  Description,
  Header,
  Paragraph,
  Wrapper,
} from "./elements";

interface InfoContainerProps {
  title: string;
  description: string;
  subtitle: string;
  pokemonData: {
    title: string;
    value: string;
  }[];
}

export const InfoContainer: React.FC<InfoContainerProps> = ({
  title,
  description,
  subtitle,
  pokemonData,
}) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <ContentContainer>
        <Description>{description}</Description>
        <DataContainer>
          <DataHeader>{subtitle}</DataHeader>
          <DataWrapper>
            <DataRow>
              <DataBold></DataBold>
              <Paragraph></Paragraph>
            </DataRow>
          </DataWrapper>
        </DataContainer>
      </ContentContainer>
    </Wrapper>
  );
};
