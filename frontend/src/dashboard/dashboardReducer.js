const INITIAL_STATE = { summary: { debt:0, credit: 0} }

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case 'BILLING_SUMMARY_FETCHED':
        return { ...state, summary: action.payload.data }
      break;
    default:
      return state
  }
}
