import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  transform: translateY(-50%);
  left: 0;

  @media only screen and (max-width: 1050px) {
    transform: translateY(100%);
  }

  @media only screen and (max-width: 425px) {
    position: static;
    transform: translateY(0);
    margin-top: 62px;
  }
`;

export default function Logo() {
  return <StyledImage src="/assets/desktop/logo.svg" />;
}
