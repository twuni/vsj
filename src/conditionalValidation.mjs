import { propertyIn } from './propertyIn.mjs';

export const conditionalValidation = (schema, keywords) => {
  const validators = Object.keys(keywords).reduce((validators, keyword) => {
    if (propertyIn(schema, keyword)) {
      validators.push({ keyword, validate: keywords[keyword](schema) });
    }

    return validators;
  }, []);

  return (object, state) => {
    for (const { keyword, validate } of validators) {
      validate(object, {
        ...state,
        instanceLocation: state.instanceLocation,
        keywordLocation: `${state.keywordLocation}/${keyword}`
      });
    }
  };
};

export default conditionalValidation;
