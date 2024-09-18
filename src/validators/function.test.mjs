import assert from 'node:assert/strict';
import { validateFunction } from './function.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.doesNotThrow(() => validateFunction()(() => true, state));
assert.throws(() => validateFunction()('!', state));
