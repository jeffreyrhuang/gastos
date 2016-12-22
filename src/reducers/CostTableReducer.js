import moment from 'moment';
import { SAVE_COST, SELECT_MONTH } from '../actions/types'

const INITIAL_STATE = {
  records: [],
  selectedMonth: moment().format('M-YY')
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COST:
      return Object.assign({}, state, {
        records: [
          ...state.records, action.payload
        ]
      })
    case SELECT_MONTH:
      return { ...state, selectedMonth: action.payload }
    default:
      return state;
  }
}