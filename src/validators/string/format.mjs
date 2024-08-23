import { ValidationError } from '../../ValidationError.mjs';

const FORMATS = new Map();

// TODO: Implement validation for more formats

FORMATS.set('date', (object) => (/^[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9]|3[0-1])$/gu).test(object));
FORMATS.set('uri', (object) => globalThis.URL.canParse(object));
FORMATS.set('uuid', (object) => (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gu).test(object));

export const validateStringFormat = (schema) => (object, state) => {
  const format = FORMATS.get(schema.format);

  if (typeof format === 'function') {
    if (!format(object)) {
      state.onError(new ValidationError(state, `expected format ${schema.format}`));
    }
  }
};

export default validateStringFormat;
