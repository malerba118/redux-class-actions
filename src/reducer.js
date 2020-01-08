import { IncrementByAction, IncrementAction } from './actions'

export default (state = 0, action) => {
  switch (action.type) {
    case String(IncrementAction):
      return state + 1;
    case String(IncrementByAction):
      return state + action.amount;
    default:
      return state;
  }
};
