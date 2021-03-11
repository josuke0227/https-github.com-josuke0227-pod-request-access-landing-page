import styled from "@emotion/styled";
import DotsBg from "./DotsBg";
import HostImage from "./HostImage";
import Logo from "./Logo";
import TextContents from "./TextContents";
import useWindowSize from "../hooks/useWindowSize";

const Wrapper = styled.div`
  background-color: inheirt;
  position: relative;
  width: 100%;
  height: 640px;
  text-align: end;

  @media (max-width: 1050px) {
    height: 100%;
  }

  @media (max-width: 425px) {
    padding: 24px;
    display: flex;
    align-items: center;
    position: absolute;
  }
`;

export default function Contents({ textData }) {
  const size = useWindowSize();

  return (
    <>
      <Wrapper>
        {size.width > 425 && <Logo />}
        <HostImage size={size} />
        <TextContents textData={textData} size={size} />
        <DotsBg />
      </Wrapper>
    </>
  );
}
