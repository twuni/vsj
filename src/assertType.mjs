import { ValidationError } from './ValidationError.mjs';

export const assertType = (expected, object, state) => {
  const actual = typeof object;

  if (actual !== expected) {
    state.onError(new ValidationError(state, `expected type ${JSON.stringify(expected)} but was ${JSON.stringify(actual)}`));
  }
};

export default assertType;
