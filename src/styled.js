import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const FiltersButton = styled.div`
  z-index: 1;
  margin: 40px 0;
`;

export const Cards = styled.div`
  z-index: 1;
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;