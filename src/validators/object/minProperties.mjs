import { ValidationError } from '../../ValidationError.mjs';

export const validateObjectMinProperties = (schema) => (object, state) => {
  if (Object.keys(object).length < schema.minProperties) {
    state.onError(new ValidationError(state, `expected minimum property count: ${JSON.stringify(schema.minProperties)}`));
  }
};

export default validateObjectMinProperties;
