import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  transition: opacity .2s ease;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => +$isOpen};
  z-index: ${({ $isOpen }) => $isOpen ? '5' : '0'};
`;

export const ContentContainer = styled.div`
  width: 400px;
  display: flex;
  background: #fff;
  position: relative;
  border: 1px solid #000;
  flex-direction: column;
  transition: opacity .5s ease;
  opacity: ${({ $isOpen }) => +$isOpen};
`;

export const Header = styled.div`
  text-align: right;
  padding: 0 20px;

  span {
    zoom: 2;
    cursor: pointer;
  }
`;
