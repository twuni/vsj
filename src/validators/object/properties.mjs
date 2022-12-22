import { ValidationError } from '../../ValidationError.mjs';

import { propertyIn } from '../../propertyIn.mjs';
import { substate } from '../../substate.mjs';

export const validateObjectProperties = (schema) => (object, state) => {
  for (const property of Object.keys(schema.properties)) {
    if (propertyIn(object, property)) {
      try {
        const validate = state.createValidator(schema.properties[property]);
        const nextState = substate(state, property, property);

        validate(object[property], nextState);
      } catch (error) {
        state.onError(error);
      }
    }
  }
};

export default validateObjectProperties;
