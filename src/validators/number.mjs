import { assertType } from '../assertType.mjs';
import { conditionalValidation } from '../conditionalValidation.mjs';
import { validateAnyConst } from './any/const.mjs';
import { validateAnyEnum } from './any/enum.mjs';
import { validateNumberExclusiveMaximum } from './number/exclusiveMaximum.mjs';
import { validateNumberExclusiveMinimum } from './number/exclusiveMinimum.mjs';
import { validateNumberMaximum } from './number/maximum.mjs';
import { validateNumberMinimum } from './number/minimum.mjs';
import { validateNumberMultipleOf } from './number/multipleOf.mjs';

const keywords = Object.freeze({
  const: validateAnyConst,
  enum: validateAnyEnum,
  exclusiveMaximum: validateNumberExclusiveMaximum,
  exclusiveMinimum: validateNumberExclusiveMinimum,
  maximum: validateNumberMaximum,
  minimum: validateNumberMinimum,
  multipleOf: validateNumberMultipleOf
});

export const validateNumber = (schema) => {
  const validate = conditionalValidation(schema, keywords);

  return (object, state) => {
    assertType('number', object, state);
    validate(object, state);
  };
};
