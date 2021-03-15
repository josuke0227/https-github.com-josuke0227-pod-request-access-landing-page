import styled from "@emotion/styled";
import EmailForm from "./EmailForm";
import Logo from "./Logo";
import TextContentsFooter from "./TextContentsFooter";

const Container = styled.div`
  background-color: var(--navy);
  position: absolute;
  width: 723px;
  height: 509px;
  bottom: 0;
  left: 0;

  @media only screen and (max-width: 1050px) {
    width: 87%;
    top: 25%;
  }

  @media only screen and (max-width: 425px) {
    padding: 0 20px;
    background: var(--screen);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
}
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  @media only screen and (max-width: 1050px) {
    position: relative;
  }

  @media only screen and (max-width: 425px) {
    position: static;
    transform: translateY(0);
    margin-top: 57px;
    line-height: 38px;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 300;
  text-align: left;
  font-size: 52px;

  @media only screen and (max-width: 425px) {
    font-size: 27px;
    text-align: center;
  }
`;

const StyledParagraph = styled.p`
  font-weight: 300;
  text-align: left;
  color: var(--light-gray);
  font-size: 18px;
  width: 61%;
  line-height: 28px;
  margin-top: 24px;

  @media only screen and (max-width: 425px) {
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    margin: 16px auto 33px;
    width: 85%;
  }
`;

const TitleWrapper = styled.div``;

export default function TextContents({ textData, size }) {
  const charArr = textData.title.toUpperCase().split(" ");
  const greenText = charArr.slice(0, 3).join(" ");
  const whiteText = charArr.slice(3).join();

  const placeholder = "Email Address";

  const mobile = size.width <= 425;

  return (
    <Container className="bg-color">
      {size.width <= 425 && <Logo />}
      <TextWrapper>
        <TitleWrapper>
          <StyledH1 style={{ color: "var(--green)" }}>{greenText}</StyledH1>
          <StyledH1 style={{ color: "var(--white)" }}>{whiteText}</StyledH1>
        </TitleWrapper>
        <StyledParagraph>{textData.text}</StyledParagraph>
        <TextContentsFooter size={size} />
        <EmailForm
          placeholder={placeholder}
          textData={textData}
          mobile={mobile}
        />
      </TextWrapper>
    </Container>
  );
}
