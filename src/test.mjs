import './validators/array.test.mjs';
import './validators/boolean.test.mjs';
import './validators/integer.test.mjs';
import './validators/null.test.mjs';
import './validators/number.test.mjs';
import './validators/object.test.mjs';
import './validators/string.test.mjs';

import assert from 'node:assert/strict';
import { createValidator } from './index.mjs';

const validate = createValidator({
  properties: {
    body: {
      type: [
        'object',
        'string'
      ]
    },
    params: {
      type: 'object'
    },
    query: {
      type: 'object'
    }
  },
  required: [
    'body',
    'params',
    'query'
  ],
  type: 'object'
});

assert.doesNotThrow(() => validate({ body: {}, params: {}, query: {} }));
assert.doesNotThrow(() => validate({ body: '', params: {}, query: {} }));
assert.throws(() => validate({ body: true, params: {}, query: {} }));
assert.throws(() => validate({ body: {}, params: true, query: {} }));
