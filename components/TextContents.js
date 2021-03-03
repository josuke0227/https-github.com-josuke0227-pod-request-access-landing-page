import styled from "@emotion/styled";
import EmailForm from "./EmailForm";
import TextContentsFooter from "./TextContentsFooter";

const Container = styled.div`
  background-color: var(--navy);
  position: absolute;
  width: 723px;
  height: 509px;
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

const StyledParagraph = styled.p`
  font-weight: 300;
  text-align: left;
  color: var(--light-gray);
  font-size: 18px;
  width: 61%;
  line-height: 28px;
  margin-top: 24px;
`;

export default function TextContents({ textData }) {
  const charArr = textData.title.toUpperCase().split(" ");
  const greenText = charArr.slice(0, 3).join(" ");
  const whiteText = charArr.slice(3).join();

  const placeholder = "Email Address";

  return (
    <Container className="bg-color">
      <TextWrapper>
        <div>
          <StyledH1 style={{ color: "var(--green)" }}>{greenText}</StyledH1>
          <StyledH1 style={{ color: "var(--white)" }}>{whiteText}</StyledH1>
        </div>
        <StyledParagraph>{textData.text}</StyledParagraph>
        <EmailForm placeholder={placeholder} textData={textData} />
        <TextContentsFooter />
      </TextWrapper>
    </Container>
  );
}
