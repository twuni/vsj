import { ValidationError } from './ValidationError.mjs';

export const assertOneOf = (expected, object, state) => {
  if (!expected.includes(object)) {
    state.onError(new ValidationError(state, `expected one of: ${JSON.stringify(expected)}`));
  }
};

export default assertOneOf;
