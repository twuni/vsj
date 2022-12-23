import assert from 'node:assert/strict';
import { validateNull } from './null.mjs';

const state = { depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.doesNotThrow(() => validateNull({ type: 'null' })(null, state));
assert.throws(() => validateNull({ type: 'null' })('!', state));
