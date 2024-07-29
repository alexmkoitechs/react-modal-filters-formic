export const REACT_APP_API_URL='https://dummyjson.com/c/9bcf-df6d-464b-9df1';

export const formInitialValues = {
  city: '',
  rooms: [],
  areaTo: '',
  priceTo: '',
  floorTo: '',
  areaFrom: '',
  floorFrom: '',
  priceFrom: '',
  leased: null,
  vipped: false,
  featured: false,
  paidDaily: null,
  hasRepair: false,
  isBusiness: false,
  hasMortgage: false,
};

export const formMainData = [
  {labelText: 'City', type: 'text', name: 'city'},
  {labelText: 'Price from', type: 'number', name: 'priceFrom'},
  {labelText: 'Price to', type: 'number', name: 'priceTo'},
  {labelText: 'Area from', type: 'number', name: 'areaFrom'},
  {labelText: 'Area to', type: 'number', name: 'areaTo'},
  {labelText: 'Floor from', type: 'number', name: 'floorFrom'},
  {labelText: 'Floor to', type: 'number', name: 'floorTo'},
  {labelText: 'Business', type: 'checkbox', name: 'isBusiness'},
  {labelText: 'Mortgage', type: 'checkbox', name: 'hasMortgage'},
  {labelText: 'Repair', type: 'checkbox', name: 'hasRepair'},
  {labelText: 'VIP', type: 'checkbox', name: 'vipped'},
  {labelText: 'Premium', type: 'checkbox', name: 'featured'},
];

const roomsData = {
  name: 'rooms',
  labelText: 'Rooms',
  data: [
    { itemLabel: 1, type: 'checkbox', value: '1' },
    { itemLabel: 2, type: 'checkbox', value: '2' },
    { itemLabel: 3, type: 'checkbox', value: '3' },
    { itemLabel: 4, type: 'checkbox', value: '4' },
  ]
};

const leasedData = {
  name: 'leased',
  labelText: 'Sale or Rent',
  data: [
    { itemLabel: 'Sale', type: 'radio', value: 'true' },
    { itemLabel: 'Rent', type: 'radio', value: 'false' },
  ]
};

const paidDailyData = {
  name: 'paidDaily',
  labelText: 'Daily rent',
  data: [
    { itemLabel: 'Yes', type: 'radio', value: 'true' },
    { itemLabel: 'No', type: 'radio', value: 'false' },
  ]
};

export const inputsGroupData = [
  roomsData,
  leasedData,
  paidDailyData,
];

export const noNeededFilterValues = ['', false, null];