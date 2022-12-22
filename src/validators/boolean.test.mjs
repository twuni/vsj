import assert from 'node:assert/strict';
import { validateBoolean } from './boolean.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.doesNotThrow(() => validateBoolean({ type: 'boolean' })(true, state));
assert.doesNotThrow(() => validateBoolean({ type: 'boolean' })(false, state));
assert.throws(() => validateBoolean({ type: 'boolean' })('!', state));

assert.doesNotThrow(() => validateBoolean({ enum: [false], type: 'boolean' })(false, state));
assert.throws(() => validateBoolean({ enum: [false], type: 'boolean' })(true, state));

assert.doesNotThrow(() => validateBoolean({ enum: [true], type: 'boolean' })(true, state));
assert.throws(() => validateBoolean({ enum: [true], type: 'boolean' })(false, state));

assert.doesNotThrow(() => validateBoolean({ const: true, type: 'boolean' })(true, state));
assert.throws(() => validateBoolean({ const: true, type: 'boolean' })(false, state));

assert.doesNotThrow(() => validateBoolean({ const: false, type: 'boolean' })(false, state));
assert.throws(() => validateBoolean({ const: false, type: 'boolean' })(true, state));
