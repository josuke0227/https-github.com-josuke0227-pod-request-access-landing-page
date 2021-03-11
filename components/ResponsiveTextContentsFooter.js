import styled from "@emotion/styled";
import { useRef, useEffect, useState } from "react";

const ImageWrapper = styled.img`
  width: ${(props) => props.optimalScale}%;
`;
// width: ${(props) => 100 - props.optimalScale * 100}%;

export default function ResponsiveTextContentsFooter() {
  const [optimalScale, setOptimalScale] = useState();
  const imageElementNum = 4;
  const margin = 10; //pixel
  const imageLength = 428 - imageElementNum - 1 * margin;
  console.log(imageLength);

  useEffect(() => {
    const imageWrapperElementWidth = document.getElementById("imageWrapper")
      .clientWidth;
    const optimisedImageScale =
      100 - (imageWrapperElementWidth / imageLength) * 100;
    if (optimisedImageScale >= 100) return;
    console.log(optimisedImageScale.toFixed(2));

    setOptimalScale(optimisedImageScale.toFixed(2));
    // return () => {
    //   cleanup;
    // };
  }, []);

  return (
    <div id="imageWrapper">
      <ImageWrapper
        src="/assets/desktop/spotify.svg"
        style={{ marginRight: `${margin}px` }}
        optimalScale={optimalScale}
      />
      <ImageWrapper
        src="/assets/desktop/apple-podcast.svg"
        style={{ marginRight: `${margin}px` }}
        optimalScale={optimalScale}
      />
      <ImageWrapper
        src="/assets/desktop/google-podcasts.svg"
        style={{ marginRight: `${margin}px` }}
        optimalScale={optimalScale}
      />
      <ImageWrapper
        src="/assets/desktop/pocket-casts.svg"
        optimalScale={optimalScale}
      />
    </div>
  );
}
