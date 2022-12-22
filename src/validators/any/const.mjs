import { ValidationError } from '../../ValidationError.mjs';

export const validateAnyConst = (schema) => (object, state) => {
  if (object !== schema.const) {
    state.onError(new ValidationError(state, `expected ${JSON.stringify(schema.const)}`));
  }
};

export default validateAnyConst;
