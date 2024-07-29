import { noNeededFilterValues } from '../constants';

import Status from '../components/Status';

export const getModifiedCardData = (cardData) => {
  const {
    id,
    area,
    city,
    price,
    rooms,
    floor,
    vipped,
    photos,
    floors,
    featured,
    updatedAt,
    paidDaily,
    hasRepair,
    isBusiness,
    hasMortgage,
  } = cardData;
  
  const localPrice = price.value.toLocaleString();
  const priceSuffix  = paidDaily ? '/day' : paidDaily !== null ? '/month' : '';
  const realtyParamsArr = [
    rooms && `${rooms} rooms`, 
    area.value && ` ${area.value} ${area.units}`, 
    floor && floors && ` ${floor}/${floors} floor`,
  ];
  const statusIcons = [
    {
      symbol: 'V',
      value: vipped,
      color: '#e5b80b',
      tooltip: 'Vipped',
    },
    {
      symbol: 'P',
      value: featured,
      color: '#13265c',
      tooltip: 'Premium',
    },
    {
      symbol: 'R',
      value: hasRepair,
      color: '#4c4c4c',
      tooltip: 'Repair',
    },
   {
      symbol: 'M',
      color: '#ff4d6d',
      value: hasMortgage,
      tooltip: 'Mortgage',
    },
  ];

  const linkUrl = `/items/${id}`;
  const photoUrl = photos[0].thumbnail;
  const daysAgo = Math.floor(
    (Date.parse(new Date()) - Date.parse(new Date(updatedAt)))
    / (24 * 60 * 60 * 1000)
  );
  const updatedDate = `updated ${daysAgo} days ago`;
  const modifiedPrice = `${localPrice} ${price.currency} ${priceSuffix}`;
  const realtyParams = realtyParamsArr.filter(param => !!param).toString();
  const statuses = statusIcons.map(status => (<Status data={status} key={id + status.color} />));

  return {
    city,
    linkUrl,
    photoUrl,
    statuses,
    isBusiness,
    updatedDate,
    realtyParams,
    modifiedPrice,
  }
}

export const getFilteredRealtyData = (activeFilters, data) => {
  const {
    city,
    rooms,
    leased,
    areaTo,
    priceTo,
    floorTo,
    areaFrom,
    paidDaily,
    floorFrom,
    priceFrom}
  = activeFilters; 

  if (Object.keys(activeFilters).length === 0) return data;

  const filteredData = data.filter(item => {
    const modifiedRooms = rooms?.map(item => Number(item));
    const modifiedLeased = leased && leased === 'true';
    const modifiedPaidDaily = paidDaily && paidDaily === 'true';

    // all normal boolean items
    for (let key in activeFilters) {
      if (typeof activeFilters[key] === "boolean" && (activeFilters[key] !== item[key])) return false;
    }

    // other items
    if (city && city !== item.city.name) return false;
    if (priceFrom && priceFrom > item.price.value) return false;
    if (priceTo && priceTo < item.price.value) return false;
    if (areaFrom && areaFrom > item.area.value) return false;
    if (areaTo && areaTo < item.area.value) return false;
    if (item.floor !== null && floorFrom && floorFrom > item.floor) return false;
    if (item.floor !== null && floorTo && floorTo < item.floor) return false;
    if (item.rooms !== null && rooms && !modifiedRooms.includes(item.rooms)) return false;
    if (item.leased !== null && leased && modifiedLeased === item.leased) return false;
    if (item.paidDaily !== null && paidDaily && modifiedPaidDaily !== item.paidDaily) return false;
    
    return true;
  });

  return filteredData;
};


export const getUsedFilters = (filters) => Object.keys(filters).reduce((acc, key) => {
  if (!noNeededFilterValues.includes(filters[key]) && filters[key]?.length !== 0) {
    acc[key] = filters[key];
  }
  return acc;
}, {});