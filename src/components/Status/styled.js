import styled from "styled-components";

export const Status = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  background: ${({ backColor }) => backColor};
`;


