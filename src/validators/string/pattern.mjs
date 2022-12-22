import { ValidationError } from '../../ValidationError.mjs';

export const validateStringPattern = (schema) => (object, state) => {
  const pattern = new RegExp(schema.pattern, 'u');

  if (!pattern.test(object)) {
    state.onError(new ValidationError(state, `expected pattern ${schema.pattern}`));
  }
};

export default validateStringPattern;
