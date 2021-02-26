import styled from "@emotion/styled";

const StyledImage = styled.img`
  position: absolute;
  right: 0;
  bottom: -52px;
`;

export default function DotsBg() {
  return <StyledImage src="/assets/desktop/bg-pattern-dots.svg" />;
}
