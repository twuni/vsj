import { ValidationError } from '../../ValidationError.mjs';

import { propertyIn } from '../../propertyIn.mjs';

export const validateObjectDependentRequired = (schema) => (object, state) => {
  for (const dependent of Object.keys(schema.dependentRequired)) {
    if (propertyIn(object, dependent)) {
      const dependencies = schema.dependentRequired[dependent];

      for (const dependency of dependencies) {
        if (!propertyIn(object, dependency)) {
          state.onError(new ValidationError(state, `${JSON.stringify(dependent)} property missing codependency: ${JSON.stringify(dependency)}`));
        }
      }
    }
  }
};

export default validateObjectDependentRequired;
