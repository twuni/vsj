import assert from 'node:assert/strict';
import { validateInteger } from './integer.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.throws(() => validateInteger({ type: 'integer' })(1.23, state));
assert.doesNotThrow(() => validateInteger({ type: 'integer' })(1, state));
