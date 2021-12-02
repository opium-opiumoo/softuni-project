import styled from "styled-components";

export const Wrapper = styled(({ ...props }) => <div {...props} />)`
  padding: 35px 20px;
  border-radius: 25px;
  background: #fff;
`;

export const Header = styled(({ ...props }) => <h3 {...props} />)``;

export const ContentContainer = styled(({ ...props }) => <div {...props} />)`
  max-width: 450px;
`;

export const Description = styled(({ ...props }) => <p {...props} />)`
  margin: 20px 0px;
`;

export const DataContainer = styled(({ ...props }) => <div {...props} />)`
  margin: 20px 0px;
`;

export const DataHeader = styled(({ ...props }) => <h3 {...props} />)`
  margin-bottom: 20px;
`;

export const DataWrapper = styled(({ ...props }) => <div {...props} />)``;

export const DataRow = styled(({ ...props }) => <div {...props} />)`
  display: flex;
  justify-content: space-between;
  max-width: 60%;
  align-items: center;
  margin: 15px 0px;
`;

export const DataBold = styled(({ ...props }) => <p {...props} />)`
  font-weight: 600;
`;

export const Paragraph = styled(({ ...props }) => <p {...props} />)``;
