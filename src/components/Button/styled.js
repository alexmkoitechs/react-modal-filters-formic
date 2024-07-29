import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  color: #fff;
  cursor: pointer;
  min-width: 70px;
  min-height: 30px;
  font-size: 14px;
  transition: opacity .3s ease-in-out;
  opacity: ${({ disabled }) => (!disabled ? '1' : '.5')};
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  cursor: ${({ disabled }) => (!disabled ? 'pointer' : 'no-drop')};
  
  &:hover {
    opacity: ${({ disabled }) => (!disabled ? '.8' : '.5')};
  }
  
  ${({$backgroundColor}) => {
    switch ($backgroundColor) {
      case `primary`:
        return `background: #08c`;
      case `secondary`:
        return `background: #17bd17`;
      case `warning`:
        return `background: #f50`;
      default:
        return `background: #d9dbe0`;
    }
  }}
`;