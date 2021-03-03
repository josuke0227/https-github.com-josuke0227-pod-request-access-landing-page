import styled from "@emotion/styled";

const StyledHostImage = styled.img`
  top: 0;
  right: 0;

}`;

export default function HostImage({ size }) {
  const filePath = size.width <= 1050 ? "tablet" : "desktop";

  return <StyledHostImage src={`/assets/${filePath}/image-host.jpg`} />;
}
