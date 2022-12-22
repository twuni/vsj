import { ValidationError } from '../ValidationError.mjs';

export const validateNull = () => (object, state) => {
  if (object !== null) {
    state.onError(new ValidationError(state, 'expected null'));
  }
};

export default validateNull;
