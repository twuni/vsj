import { assertOneOf } from '../assertOneOf.mjs';
import { assertType } from '../assertType.mjs';
import { conditionalValidation } from '../conditionalValidation.mjs';
import { validateAnyConst } from './any/const.mjs';
import { validateAnyEnum } from './any/enum.mjs';
import { validateStringFormat } from './string/format.mjs';
import { validateStringMaxLength } from './string/maxLength.mjs';
import { validateStringMinLength } from './string/minLength.mjs';
import { validateStringPattern } from './string/pattern.mjs';

const keywords = Object.freeze({
  const: validateAnyConst,
  enum: validateAnyEnum,
  format: validateStringFormat,
  maxLength: validateStringMaxLength,
  minLength: validateStringMinLength,
  pattern: validateStringPattern
});

export const validateString = (schema) => {
  const validate = conditionalValidation(schema, keywords);

  return (object, state) => {
    assertType('string', object, state);
    validate(object, state);
  };
};

export default validateString;
