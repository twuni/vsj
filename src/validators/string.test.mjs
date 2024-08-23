import assert from 'node:assert/strict';
import { validateString } from './string.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

const assertValid = (schema, object) => assert.doesNotThrow(() => validateString(schema)(object, state));

const assertInvalid = (schema, object) => assert.throws(() => validateString(schema)(object, state));

assertValid({ type: 'string' }, '');

assertInvalid({ minLength: 1, type: 'string' }, '');
assertValid({ minLength: 1, type: 'string' }, '!');

assertValid({ maxLength: 1, type: 'string' }, '!');
assertInvalid({ maxLength: 1, type: 'string' }, 'Hi');

assertValid({ pattern: '^A', type: 'string' }, 'Ah');
assertInvalid({ pattern: '^A', type: 'string' }, 'Ha');

assertValid({ format: 'uri', type: 'string' }, 'data:text/plain;');

assertValid({ format: 'uuid', type: 'string' }, 'abcd1234-abcd-abcd-abcd-abcd12345678');

assertValid({ format: 'date', type: 'string' }, '0000-01-01');
assertValid({ format: 'date', type: 'string' }, '9999-01-01');
assertValid({ format: 'date', type: 'string' }, '2024-12-01');
assertValid({ format: 'date', type: 'string' }, '2024-12-31');

assertInvalid({ format: 'date', type: 'string' }, '2024-08-32');
assertInvalid({ format: 'date', type: 'string' }, '2024-00-31');
assertInvalid({ format: 'date', type: 'string' }, '2024-13-31');
assertInvalid({ format: 'date', type: 'string' }, '2024-13-32');
