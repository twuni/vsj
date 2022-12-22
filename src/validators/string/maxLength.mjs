import { ValidationError } from '../../ValidationError.mjs';

export const validateStringMaxLength = (schema) => (object, state) => {
  if (schema.maxLength < object.length) {
    state.onError(new ValidationError(state, `expected maximum length of ${JSON.stringify(schema.maxLength)}`));
  }
};

export default validateStringMaxLength;
