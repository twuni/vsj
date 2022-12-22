import { ValidationError } from '../../ValidationError.mjs';

export const validateArrayMaxItems = (schema) => (object, state) => {
  if (schema.maxItems < object.length) {
    state.onError(new ValidationError(state, `expected maximum length of ${JSON.stringify(schema.maxItems)}`));
  }
};

export default validateArrayMaxItems;
