import styled from "@emotion/styled";

const IconWrapper = styled.div`
  text-align: left;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 425px) {
    justify-content: space-around;
  }
`;

export default function TextContentsFooter({ size }) {
  const mobile = size.width <= 425;

  return (
    <IconWrapper>
      <img
        className="min-height"
        style={mobile ? { width: "56px" } : null}
        src="/assets/desktop/spotify.svg"
      />
      <img
        className={`${mobile ? "" : "ml-large"} min-height`}
        style={mobile ? { width: "45px" } : null}
        src="/assets/desktop/apple-podcast.svg"
      />
      <img
        className={`${mobile ? "" : "ml-large"} min-height`}
        style={mobile ? { width: "73px" } : null}
        src="/assets/desktop/google-podcasts.svg"
      />
      <img
        className={`${mobile ? "" : "ml-small"} min-height `}
        style={mobile ? { width: "77px" } : null}
        src="/assets/desktop/pocket-casts.svg"
      />
    </IconWrapper>
  );
}
