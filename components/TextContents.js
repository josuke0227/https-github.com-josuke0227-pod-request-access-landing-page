import styled from "@emotion/styled";

const Container = styled.div`
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

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const StyledH1 = styled.h1`
  font-weight: 300;
  text-align: left;
  font-size: 52px;
`;

export default function TextContents({ textData }) {
  const charArr = textData.title.toUpperCase().split(" ");
  const greenText = charArr.slice(0, 3).join(" ");
  const whiteText = charArr.slice(3).join();

  return (
    <Container className="bg-color">
      <TextWrapper>
        <StyledH1 className="tx-primary title-font tx-title">
          {greenText}
        </StyledH1>
        <StyledH1 className="tx-primary title-font">{whiteText}</StyledH1>
      </TextWrapper>
    </Container>
  );
}
