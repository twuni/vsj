import { ValidationError } from '../../ValidationError.mjs';

import { propertyIn } from '../../propertyIn.mjs';

export const validateObjectRequired = (schema) => (object, state) => {
  for (const property of schema.required) {
    if (!propertyIn(object, property)) {
      state.onError(new ValidationError(state, `missing required property: ${property}`));
    }
  }
};

export default validateObjectRequired;
