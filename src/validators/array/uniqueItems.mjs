import { ValidationError } from '../../ValidationError.mjs';

export const validateArrayUniqueItems = (schema) => (object, state) => {
  if (!schema.uniqueItems) {
    return;
  }

  const seen = new Set();

  for (const item of object) {
    if (seen.has(item)) {
      state.onError(new ValidationError(state, 'expected items to be unique'));
      return;
    }

    seen.add(item);
  }
};

export default validateArrayUniqueItems;
