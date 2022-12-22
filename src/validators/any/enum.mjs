import { assertOneOf } from '../../assertOneOf.mjs';

export const validateAnyEnum = (schema) => (object, state) => {
  assertOneOf(schema.enum, object, state);
};

export default validateAnyEnum;
