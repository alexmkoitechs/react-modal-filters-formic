import { getModifiedCardData } from '../../helpers';

import * as Styled from "./styled";

const Card = ({ cardData }) => {
  const {
    city,
    linkUrl,
    statuses,
    photoUrl,
    isBusiness,
    updatedDate,
    realtyParams,
    modifiedPrice
  } = getModifiedCardData(cardData);

  return (
    <Styled.Card>
      <a href={linkUrl}>

      <Styled.Image>
        <img src={photoUrl} alt='realty preview' />
      </Styled.Image>

      <Styled.Data>
        <Styled.Price>
          {modifiedPrice}
        </Styled.Price>
        <Styled.City>
          {city.name}
        </Styled.City>
        <Styled.Params>
          {realtyParams}
        </Styled.Params>
        <Styled.Statuses>
          {statuses}
        </Styled.Statuses>
        <Styled.Business>
          {isBusiness && 'Business'}
        </Styled.Business>
        <Styled.Date>
          {updatedDate}
        </Styled.Date>
      </Styled.Data>
      </a>

    </Styled.Card>
  );
}

export default Card;
