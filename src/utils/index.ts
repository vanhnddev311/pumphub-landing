import moment from 'moment';

export const getDiff = (withdrawTime: any) => {
  return moment(parseInt(withdrawTime)).diff(Date.now());
};

function roundDownToDecimals(number: any, decimalPlaces: number) {
  const powerOfTen = Math.pow(10, decimalPlaces);
  return Math.floor(Number(number) * powerOfTen) / powerOfTen;
}
export const formatNumber = (number: number | string = '0', infractionDigit: number = 2) => {
  let formatPrice = '';
  if (Number(number) > 0 && Number(number) < 0.01) {
    formatPrice = '< 0.01';
  } else if (Number(number) === 0) {
    formatPrice = '0.00';
  } else if (isNaN(Number(number))) {
    formatPrice = '0.00';
  } else {
    formatPrice = roundDownToDecimals(number, infractionDigit).toLocaleString('en-US') as any;
  }
  return formatPrice;
};
