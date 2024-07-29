import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  input {
    border: 1px solid #c4c4c4;
  }
`;

export const ButtonsSection = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;

  button {
    margin-right: 15px;
  }
`;