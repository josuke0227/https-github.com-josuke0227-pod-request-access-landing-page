import styled from "@emotion/styled";

const IconWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
`;

export default function TextContentsFooter() {
  return (
    <IconWrapper>
      <img className="min-height" src="/assets/desktop/spotify.svg" />
      <img
        className="ml-large min-height"
        src="/assets/desktop/apple-podcast.svg"
      />
      <img
        className="ml-large min-height"
        src="/assets/desktop/google-podcasts.svg"
      />
      <img
        className="ml-small min-height"
        src="/assets/desktop/pocket-casts.svg"
      />
    </IconWrapper>
  );
}
