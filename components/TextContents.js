import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  width: 723px;
  height: 509px;
  bottom: 0;
  left: 0;
`;

export default function TextContents() {
  return <Wrapper className="bg-color">This is TextWindow!</Wrapper>;
}
