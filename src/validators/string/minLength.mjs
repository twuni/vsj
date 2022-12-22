import { ValidationError } from '../../ValidationError.mjs';

export const validateStringMinLength = (schema) => (object, state) => {
  if (object.length < schema.minLength) {
    state.onError(new ValidationError(state, `expected minimum length of ${JSON.stringify(schema.minLength)}`));
  }
};

export default validateStringMinLength;
