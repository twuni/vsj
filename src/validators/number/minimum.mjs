import { ValidationError } from '../../ValidationError.mjs';

export const validateNumberMinimum = (schema) => (object, state) => {
  if (object < schema.minimum) {
    state.onError(new ValidationError(state, `expected minimum of ${JSON.stringify(schema.minimum)}`));
  }
};

export default validateNumberMinimum;
