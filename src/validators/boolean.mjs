import { assertType } from '../assertType.mjs';
import { conditionalValidation } from '../conditionalValidation.mjs';
import { validateAnyConst } from './any/const.mjs';
import { validateAnyEnum } from './any/enum.mjs';

const keywords = Object.freeze({
  const: validateAnyConst,
  enum: validateAnyEnum
});

export const validateBoolean = (schema) => {
  const validate = conditionalValidation(schema, keywords);

  return (object, state) => {
    assertType('boolean', object, state);
    validate(object, state);
  };
};

export default validateBoolean;
