import styled from "@emotion/styled";
import Logo from "./Logo";
import EmailForm from "./EmailForm";
import TextContentsFooter from "./TextContentsFooter";
import ResponsiveTextContentsFooter from "./ResponsiveTextContentsFooter";

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

  @media (max-width: 425px) {
    background-color: transparent;
    width: 100%;
    position: unset;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  @media (max-width: 1050px) {
    position: relative;
    background-color: transparent;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 300;
  text-align: left;
  font-size: 52px;

  @media (max-width: 425px) {
    font-size: 26px;
    text-align: center;
    line-height: 38px;
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

  @media (max-width: 425px) {
    line-height: 25px;
    font-size: 15px;
    text-align: center;
    margin: 0;
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 57px;
`;

const TitleWrapper = styled.div`
  @media (max-width: 425px) {
    margin-bottom: 1rem;
  }
`;

export default function TextContents({ textData, size }) {
  const charArr = textData.title.toUpperCase().split(" ");
  const greenText = charArr.slice(0, 3).join(" ");
  const whiteText = charArr.slice(3).join();

  const placeholder = "Email Address";

  const width = size.width;

  return (
    <Container className="bg-color">
      <TextWrapper>
        <LogoWrapper>{size.width <= 425 && <Logo />}</LogoWrapper>
        <TitleWrapper>
          <StyledH1 style={{ color: "var(--green)" }}>{greenText}</StyledH1>
          <StyledH1 style={{ color: "var(--white)" }}>{whiteText}</StyledH1>
        </TitleWrapper>
        <TextContentsFooter />
        <EmailForm placeholder={placeholder} textData={textData} size={size} />
      </TextWrapper>
    </Container>
  );
}
