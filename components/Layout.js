import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function Layout({ children }) {
  return <Container className="bg-color">{children}</Container>;
}
