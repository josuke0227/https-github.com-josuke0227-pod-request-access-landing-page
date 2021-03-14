import styled from "@emotion/styled";
import { useState } from "react";
import Joi from "joi";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

const StyledForm = styled.form`
  height: 56px;
  border-radius: 28px;
  background-color: var(--mid-gray);
  width: 427px;
  padding: 5px 5px 5px 25px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 40px 0 64px 0;

  @media only screen and (max-width: 425px) {
    width: 375px;
    height: 46px;
  }
`;

const UIWrapper = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
`;

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

const StyledInput = styled.input`
  width: 60%;
  background-color: inherit;
  border: none;
  color: var(--white);
  padding-right: 1rem;
  font-weight: 600;

  :placeholder {
    color: var(--gray);
  }

  :focus {
    outline: none;
  }

  @media only screen and (max-width: 425px) {
    margin-top: 9px;
  }
`;

const MessageWrapper = styled.div`
  margin-top: 1rem;
  color: var(--red);
  text-align: left;
  visibility: ${(props) => (props.errors === null ? "hidden" : "visible")};
`;

const StyledMobileInput = styled.input`
  color: var(--white);
  font-weight: 600;
  padding-left: 1.5rem;
  margin-top: 48px;
  width: 100%;
  height: 46px;
  border-radius: 28px;
  border: none;
  background: var(--mid-gray);

  :placeholder {
    color: var(--gray);
  }

  :focus {
    outline: none;
  }
`;

export default function EmailForm({ placeholder, textData, mobile }) {
  const [data, setData] = useState({ email: "" });
  const [errors, setErrors] = useState(null);

  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("email"),
  });

  function validate() {
    const result = schema.validate(data);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  function handleInputChange({ target }) {
    const currentData = { ...data };
    currentData.email = target.value;
    setData(currentData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = validate();
    setErrors(result);
    if (errors) return;
    console.log("submitted");
  }

  function renderedMobileForm() {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <StyledMobileInput
            placeholder={placeholder}
            value={data.email}
            onChange={handleInputChange}
            errors={errors}
          />
          <Button data={data} textData={textData} />
        </form>
        <ErrorMessage textData={textData} errors={errors} />
      </>
    );
  }

  if (mobile) return renderedMobileForm();
  else {
    return (
      <StyledForm onSubmit={handleSubmit} errors={errors}>
        <UIWrapper>
          <StyledInput
            placeholder={placeholder}
            value={data.email}
            onChange={handleInputChange}
          />
          <StyledButton
            className="strong-font"
            type="submit"
            disabled={!data.email}
          >
            {textData.buttonText}
          </StyledButton>
          <ErrorMessage textData={textData} errors={errors} />
        </UIWrapper>
      </StyledForm>
    );
  }
}
