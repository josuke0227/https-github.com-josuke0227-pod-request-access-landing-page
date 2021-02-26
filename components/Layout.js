import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10rem;

  @media (max-width: 1050px) {
    padding-left: 3rem;
    align-items: flex-start;
  }
`;

export default function Layout({ children }) {
  return <Container className="bg-color">{children}</Container>;
}
