import styled from "styled-components";

export const Card = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  margin: 0 15px 15px 0;
  flex-direction: column;
  border: 1px solid #c4c4c4;

  a:-webkit-any-link {
    color: #000;
    cursor: pointer;
    text-decoration: none;
  }
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
  display: flex;
  padding: 15px;
  flex-direction: column;
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
  margin-top: 10px;
`;

export const Business = styled.div`
  height: 20px;
  font-size: 18px;
  margin-top: 10px;
`;

export const Date = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;