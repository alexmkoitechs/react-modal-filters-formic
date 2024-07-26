import Status from '../Status';

import * as Styled from "./styled";

const Card = ({ cardData }) => {
  const {
    city,
    area,
    price,
    rooms,
    floor,
    photos,
    vipped,
    floors,
    featured,
    paidDaily,
    hasRepair,
    hasMortgage,
  } = cardData;

  const localPrice = price.value.toLocaleString();
  const priceSuffix  = paidDaily ? '/day' : paidDaily !== null ? '/month' : '';
  const realtyParamsArr = [
    rooms && `${rooms} rooms`, 
    area.value && ` ${area.value} ${area.units}`, 
    floor && floors && ` ${floor}/${floors} floor`,
  ];
  const realtyParams = realtyParamsArr.filter(param => !!param).toString();
  const statusIcons = [
    {
      value: vipped,
      symbol: 'V',
      color: 'black',
    },
    {
      value: featured,
      symbol: 'P',
      color: 'red',
    },
    {
      value: hasRepair,
      symbol: 'P',
      color: 'grey',
    },
   {
      value: hasMortgage,
      symbol: 'P',
      color: 'green',
    },
  ];

  const statuses = statusIcons.map(status => (<Status data={status}/>));

  console.log('paidDaily', paidDaily)
  console.log('priceSuffix', priceSuffix)

  
  return (
    <Styled.Card>
      <Styled.Image>
        <img src={photos[0].thumbnail} alt='realty preview' />
      </Styled.Image>
      <Styled.Data>
        <Styled.Price>
          {localPrice}
          <span>
            {price.currency}
          </span>
          {priceSuffix}
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
      </Styled.Data>


    </Styled.Card>
  );
}

export default Card;
