import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  transform: translateY(-50%);
  left: 0;

  @media (max-width: 1050px) {
    transform: translateY(100%);
  }
`;

export default function Logo() {
  return <StyledImage src="/assets/desktop/logo.svg" />;
}
