import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: absolute;
  width: 45rem;
  height: 31.8rem;
  bottom: 0;
  left: 0;

  @media (max-width: 1050px) {
    width: 87%;
    top: 25%;
  }
`;

export default function TextContents() {
  return <Wrapper className="bg-color">This is TextWindow!</Wrapper>;
}
