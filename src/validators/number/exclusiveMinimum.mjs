import { ValidationError } from '../../ValidationError.mjs';

export const validateNumberExclusiveMinimum = (schema) => (object, state) => {
  if (object <= schema.exclusiveMinimum) {
    state.onError(new ValidationError(state, `expected exclusive minimum of ${JSON.stringify(schema.exclusiveMinimum)}`));
  }
};

export default validateNumberExclusiveMinimum;
