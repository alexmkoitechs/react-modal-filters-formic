import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Cards = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
`;