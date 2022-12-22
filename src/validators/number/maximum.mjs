import { ValidationError } from '../../ValidationError.mjs';

export const validateNumberMaximum = (schema) => (object, state) => {
  if (schema.maximum < object) {
    state.onError(new ValidationError(state, `expected maximum of ${JSON.stringify(schema.maximum)}`));
  }
};

export default validateNumberMaximum;
