const countryList = require('../constants/countries');

const ConvertCountryCode = (countryCode) => {
  return countryList[countryCode];
}

export default ConvertCountryCode
