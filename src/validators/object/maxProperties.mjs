import { ValidationError } from '../../ValidationError.mjs';

export const validateObjectMaxProperties = (schema) => (object, state) => {
  if (schema.maxProperties < Object.keys(object).length) {
    state.onError(new ValidationError(state, `expected maximum property count: ${JSON.stringify(schema.maxProperties)}`));
  }
};

export default validateObjectMaxProperties;
