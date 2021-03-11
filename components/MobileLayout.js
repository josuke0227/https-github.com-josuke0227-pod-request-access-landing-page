import styled from "@emotion/styled";

const ImageModal = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: #121725;
  opacity: 0.9;
  position: fixed;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default function MobileLayout({ children }) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <StyledImage src="/assets/mobile/image-host.jpg" />
      <ImageModal></ImageModal>
      {children}
    </div>
  );
}
