import * as Styled from "./styled";

const Status = ({ data }) => {
  if (!data.value) return null;
  
  return (
    <Styled.Status $backColor={data.color}>
      <span>
        {data.symbol}
      </span>
    </Styled.Status>)
}

export default Status;
