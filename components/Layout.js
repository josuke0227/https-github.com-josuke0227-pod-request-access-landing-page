import styled from "@emotion/styled";

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 10.5rem;
  background-color: var(--navy);

  @media only screen and (max-width: 1050px) {
    padding-left: 3rem;
    align-items: flex-start;
  }

  @media only screen and (max-width: 425px) {
    text-align: center;
    display: block;
    background-image: url("/assets/mobile/image-host.jpg");
    background-size: cover;
  }
`;

export default function Layout({ children }) {
  return <Container className="bg-color">{children}</Container>;
}
