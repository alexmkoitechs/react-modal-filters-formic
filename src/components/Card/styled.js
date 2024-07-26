import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  margin: 0 15px 15px 0;
  flex-direction: column;
  border: 1px solid #c4c4c4;
`;

export const Image = styled.div`
  width: 100%;
  height: 180px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Data = styled.div`
  padding: 15px;
`;

export const Price = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: bold;

  span {
    margin-left: 10px;
  }
`;

export const City = styled.div`
  margin-top: 5px;
`;

export const Params = styled.div`
  margin-top: 5px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Statuses = styled.div`
  display: flex;
`;

export const Status = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  background: ${({ backColor }) => backColor};
`;


