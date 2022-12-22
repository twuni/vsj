import assert from 'node:assert/strict';
import { createValidator } from '../index.mjs';
import { validateArray } from './array.mjs';

const state = { createValidator, depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.throws(() => validateArray({ type: 'array' })({}, state));
assert.doesNotThrow(() => validateArray({ type: 'array' })([], state));

assert.throws(() => validateArray({ minItems: 1, type: 'array' })([], state));
assert.doesNotThrow(() => validateArray({ minItems: 1, type: 'array' })(['!'], state));
assert.doesNotThrow(() => validateArray({ maxItems: 1, type: 'array' })(['!'], state));
assert.throws(() => validateArray({ maxItems: 1, type: 'array' })(['!', '?'], state));

assert.doesNotThrow(() => validateArray({ items: { type: 'string' }, type: 'array' })(['!'], state));
assert.throws(() => validateArray({ items: { type: 'number' }, type: 'array' })(['!'], state));

assert.throws(() => validateArray({ type: 'array', uniqueItems: true })(['!', '!'], state));
assert.doesNotThrow(() => validateArray({ type: 'array', uniqueItems: true })(['!', '?'], state));
assert.doesNotThrow(() => validateArray({ type: 'array', uniqueItems: false })(['!', '!'], state));
