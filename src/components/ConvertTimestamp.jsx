import dayjs from 'dayjs';

const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

// Convert unix utc timestamp data to standard format with Day.js
const ConvertTimestamp = (time, timezone) => {
  const convertedTimestamp = dayjs
    .utc(time * 1000) // converted to milliseconds
    .utcOffset(
      timezone != null
        ? timezone / 3600 // converted to hours
        : 0
    );
  return convertedTimestamp;
}

export default ConvertTimestamp;
