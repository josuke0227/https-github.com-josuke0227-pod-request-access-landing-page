import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  top: -23px;
  left: 0;

  @media (max-width: 1050px) {
    top: 0;
  }
`;

export default function Logo() {
  return <StyledImage src="/assets/desktop/logo.svg" />;
}
