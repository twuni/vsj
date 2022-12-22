import { ValidationError } from '../ValidationError.mjs';

import { assertType } from '../assertType.mjs';
import { conditionalValidation } from '../conditionalValidation.mjs';
import { validateObjectDependentRequired } from './object/dependentRequired.mjs';
import { validateObjectMaxProperties } from './object/maxProperties.mjs';
import { validateObjectMinProperties } from './object/minProperties.mjs';
import { validateObjectProperties } from './object/properties.mjs';
import { validateObjectRequired } from './object/required.mjs';

const keywords = Object.freeze({
  dependentRequired: validateObjectDependentRequired,
  maxProperties: validateObjectMaxProperties,
  minProperties: validateObjectMinProperties,
  properties: validateObjectProperties,
  required: validateObjectRequired
});

export const validateObject = (schema) => {
  const validate = conditionalValidation(schema, keywords);

  return (object, state) => {
    assertType('object', object, state);

    if (Array.isArray(object)) {
      state.onError(new ValidationError(state, 'expected type "object" but was "array"'));
      return;
    }

    validate(object, state);
  };
};

export default validateObject;
