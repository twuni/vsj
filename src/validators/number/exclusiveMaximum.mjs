import { ValidationError } from '../../ValidationError.mjs';

export const validateNumberExclusiveMaximum = (schema) => (object, state) => {
  if (schema.exclusiveMaximum <= object) {
    state.onError(new ValidationError(state, `expected exclusive maximum of ${JSON.stringify(schema.exclusiveMaximum)}`));
  }
};

export default validateNumberExclusiveMaximum;
