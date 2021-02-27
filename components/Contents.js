import styled from "@emotion/styled";
import DotsBg from "./DotsBg";
import HostImage from "./HostImage";
import Logo from "./Logo";
import TextContents from "./TextContents";
import useWindowSize from "../hooks/useWindowSize";

const Wrapper = styled.div`
  background-color: coral;
  position: relative;
  width: 100%;
  text-align: end;

  @media (max-width: 1050px) {
    height: 100%;
  }
`;

export default function Contents({ textData }) {
  const size = useWindowSize();

  return (
    <Wrapper>
      <Logo />
      <HostImage size={size} />
      <TextContents textData={textData} />
      <DotsBg />
    </Wrapper>
  );
}
