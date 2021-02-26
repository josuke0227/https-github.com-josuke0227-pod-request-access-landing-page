import styled from "@emotion/styled";
import DotsBg from "./DotsBg";
import HostImage from "./HostImage";
import Logo from "./Logo";
import TextContents from "./TextContents";

const Wrapper = styled.div`
  height: 640px;
  width: 1275px;
  background-color: coral;
  display: inline-block;
  position: relative;
`;

export default function Contents() {
  return (
    <Wrapper>
      <Logo />
      <HostImage />
      <TextContents />
      <DotsBg />
    </Wrapper>
  );
}
