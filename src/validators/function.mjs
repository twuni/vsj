import { assertType } from '../assertType.mjs';

export const validateFunction = () => (object, state) => {
  assertType('function', object, state);
};
