import styled from "@emotion/styled";

const IconWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;

  @media (max-width: 425px) {
    margin-top: 33px;
  }
`;

export default function TextContentsFooter({ mobile }) {
  return (
    <IconWrapper>
      <img
        className="min-height"
        style={mobile && { transform: "scale(0.58) translateX(-20%)" }}
        src="/assets/desktop/spotify.svg"
      />
      <img
        className={`${mobile ? "" : "ml-large"} min-height`}
        style={mobile && { transform: "scale(0.58) translateX(-30%)" }}
        src="/assets/desktop/apple-podcast.svg"
      />
      <img
        className={`${mobile ? "" : "ml-large"} min-height`}
        style={mobile && { transform: "scale(0.58) translateX(-30%)" }}
        src="/assets/desktop/google-podcasts.svg"
      />
      <img
        className={`${mobile ? "" : "ml-small"} min-height `}
        style={mobile && { transform: "scale(0.58) translateX(-58%)" }}
        src="/assets/desktop/pocket-casts.svg"
      />
    </IconWrapper>
  );
}
