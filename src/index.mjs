import { MultipleErrors } from './MultipleErrors.mjs';

import { anyOf } from './anyOf.mjs';
import { defaultState } from './defaults.mjs';
import { validateArray } from './validators/array.mjs';
import { validateBoolean } from './validators/boolean.mjs';
import { validateInteger } from './validators/integer.mjs';
import { validateNull } from './validators/null.mjs';
import { validateNumber } from './validators/number.mjs';
import { validateObject } from './validators/object.mjs';
import { validateString } from './validators/string.mjs';

const byType = Object.freeze({
  array: validateArray,
  boolean: validateBoolean,
  integer: validateInteger,
  null: validateNull,
  number: validateNumber,
  object: validateObject,
  string: validateString
});

export const createValidator = (schema) => {
  const validate = Array.isArray(schema.type) ? anyOf(schema.type.map((type) => byType[type](schema))) : byType[schema.type](schema);

  return (object, state = defaultState(createValidator)) => {
    const errors = [];

    validate(object, {
      onError(error) {
        errors.push(error);
      },
      ...state
    });

    if (errors.length > 1) {
      throw new MultipleErrors(errors);
    }

    if (errors.length > 0) {
      throw errors[0];
    }
  };
};

export default createValidator;
