import assert from 'node:assert/strict';
import { validateNumber } from './number.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.throws(() => validateNumber({ type: 'number' })('!', state));
assert.doesNotThrow(() => validateNumber({ type: 'number' })(1, state));

assert.throws(() => validateNumber({ minimum: 1, type: 'number' })(0, state));
assert.doesNotThrow(() => validateNumber({ minimum: 1, type: 'number' })(1, state));
assert.doesNotThrow(() => validateNumber({ maximum: 1, type: 'number' })(1, state));
assert.throws(() => validateNumber({ maximum: 1, type: 'number' })(2, state));

assert.throws(() => validateNumber({ exclusiveMinimum: 1, type: 'number' })(1, state));
assert.doesNotThrow(() => validateNumber({ exclusiveMinimum: 1, type: 'number' })(2, state));
assert.doesNotThrow(() => validateNumber({ exclusiveMaximum: 1, type: 'number' })(0, state));
assert.throws(() => validateNumber({ exclusiveMaximum: 1, type: 'number' })(1, state));

assert.throws(() => validateNumber({ multipleOf: 2, type: 'number' })(1, state));
assert.doesNotThrow(() => validateNumber({ multipleOf: 2, type: 'number' })(2, state));
