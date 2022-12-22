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
