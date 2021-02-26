import styled from "@emotion/styled";

const StyledHostImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
}`;

export default function HostImage() {
  return <StyledHostImage src="/assets/desktop/image-host.jpg" />;
}
