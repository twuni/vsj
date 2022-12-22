import { ValidationError } from '../../ValidationError.mjs';

export const validateArrayMinItems = (schema) => (object, state) => {
  if (object.length < schema.minItems) {
    state.onError(new ValidationError(state, `expected minimum length of ${JSON.stringify(schema.minItems)}`));
  }
};

export default validateArrayMinItems;
