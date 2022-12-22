import { ValidationError } from '../ValidationError.mjs';

import { conditionalValidation } from '../conditionalValidation.mjs';
import { validateArrayItems } from './array/items.mjs';
import { validateArrayMaxItems } from './array/maxItems.mjs';
import { validateArrayMinItems } from './array/minItems.mjs';
import { validateArrayUniqueItems } from './array/uniqueItems.mjs';

const keywords = Object.freeze({
  items: validateArrayItems,
  maxItems: validateArrayMaxItems,
  minItems: validateArrayMinItems,
  uniqueItems: validateArrayUniqueItems
});

export const validateArray = (schema) => {
  const validate = conditionalValidation(schema, keywords);

  return (object, state) => {
    if (!Array.isArray(object)) {
      state.onError(new ValidationError(state, `expected type "array" but was ${JSON.stringify(typeof object)}`));
      return;
    }

    validate(object, state);
  };
};

export default validateArray;
