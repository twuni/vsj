import { ValidationError } from '../../ValidationError.mjs';

export const validateNumberMultipleOf = (schema) => (object, state) => {
  if ((object % schema.multipleOf) !== 0) {
    state.onError(new ValidationError(state, `expected multiple of ${JSON.stringify(schema.multipleOf)}`));
  }
};

export default validateNumberMultipleOf;
