import styled from "@emotion/styled";

const StyledButton = styled.button`
  height: inherit;
  border-radius: 28px;
  background-color: var(--green);
  color: var(--navy);
  padding: 9px 27px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  :hover {
    background-color: var(--light-green);
  }

  @media only screen and (max-width: 425px) {
    margin-top: 15px;
    width: 100%;
    height: 46px;
    transform: translate(0, 0);
  }
`;

export default function Button({ data, textData }) {
  return (
    <>
      <StyledButton
        className="strong-font"
        type="submit"
        disabled={!data.email}
      >
        {textData.buttonText}
      </StyledButton>
    </>
  );
}
