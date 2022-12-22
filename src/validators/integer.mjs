import { ValidationError } from '../ValidationError.mjs';

import { validateNumber } from './number.mjs';

export const validateInteger = (schema) => {
  const validate = validateNumber(schema);

  return (object, state) => {
    if (!Number.isInteger(object)) {
      state.onError(new ValidationError(state, 'expected integer'));
      return;
    }

    validate(object, state);
  };
};

export default validateInteger;
