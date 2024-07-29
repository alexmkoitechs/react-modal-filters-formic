import styled from "styled-components";

export const Status = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  position: relative;
  margin-right: 10px;
  align-items: center;
  border: 1px solid #000;
  justify-content: center;
  background: ${({ $backColor }) => $backColor};

  span {
    color: #fff;
  }
`;


