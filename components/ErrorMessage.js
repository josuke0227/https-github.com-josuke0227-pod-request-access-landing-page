import styled from "@emotion/styled";

const MessageWrapper = styled.div`
  margin-top: 1rem;
  color: var(--red);
  text-align: left;

  @media only screen and (max-width: 425px) {
    margin-top: 15px;
    padding-left: 1rem;
  }
`;

export default function ErrorMessage({ errors, textData }) {
  return (
    errors !== null && (
      <MessageWrapper errors={errors}>{textData.warningMessage}</MessageWrapper>
    )
  );
}
