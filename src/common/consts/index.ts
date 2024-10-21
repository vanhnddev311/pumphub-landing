import moment from 'moment';

export const IDO_START_TIME = Number(moment('2024-04-11T11:00:00.000Z').format('X'));
export const LISTING_START_TIME = Number(moment('2024-05-09T13:00:00.000Z').format('X'));
export const MAINNET_START_TIME = Number(moment('2024-02-28T10:00:00.000Z').format('X'));

export const idoConfigs = {
  round1: {
    round: 1,
    name: 'Sale starts in',
    maxAllocation: 50,
    startTime: Number(moment('2024-02-25T13:00:00.000Z').format('X')),
    unlimitStartTime: Number(moment('2024-02-26T01:00:00.000Z').format('X')),
    endTime: Number(moment('2024-02-26T13:00:00.000Z').format('X')),
    function: 'whitelist_buy_entry',
  },
  round2: {
    round: 2,
    maxAllocation: 30,
    startTime: Number(moment('2024-02-26T13:00:00.000Z').format('X')),
    unlimitStartTime: Number(moment('2024-02-26T19:00:00.000Z').format('X')),
    endTime: Number(moment('2024-02-27T13:00:00.000Z').format('X')),
    function: 'buy_entry',
  },
};
