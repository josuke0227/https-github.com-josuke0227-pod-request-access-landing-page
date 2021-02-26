import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -52px;

  @media (max-width: 1050px) {
    left: 0;
    bottom: 0;
  }
`;

export default function DotsBg() {
  return <StyledImage src="/assets/desktop/bg-pattern-dots.svg" />;
}
