import assert from 'node:assert/strict';
import { createValidator } from '../index.mjs';
import { validateObject } from './object.mjs';

const state = { createValidator, depth: 0, instanceLocation: '', keywordLocation: '', onError(error) { throw error; } };

assert.throws(() => validateObject({ type: 'object' })([], state));
assert.doesNotThrow(() => validateObject({ type: 'object' })({}, state));

assert.throws(() => validateObject({ minProperties: 1, type: 'object' })({}, state));
assert.doesNotThrow(() => validateObject({ minProperties: 1, type: 'object' })({ test: true }, state));
assert.doesNotThrow(() => validateObject({ maxProperties: 1, type: 'object' })({ test: true }, state));
assert.throws(() => validateObject({ maxProperties: 1, type: 'object' })({ test: true, fail: true }, state));

assert.doesNotThrow(() => validateObject({ required: ['test'], type: 'object' })({ test: true }, state));
assert.throws(() => validateObject({ required: ['test'], type: 'object' })({}, state));

assert.doesNotThrow(() => validateObject({ properties: { test: { type: 'boolean' } }, type: 'object' })({ test: true }, state));
assert.throws(() => validateObject({ properties: { test: { type: 'boolean' } }, type: 'object' })({ test: '!' }, state));

assert.doesNotThrow(() => validateObject({ dependentRequired: { child: ['parent'] }, type: 'object' })({ child: true, parent: true }, state));
assert.throws(() => validateObject({ dependentRequired: { child: ['parent'] }, type: 'object' })({ child: true }, state));
assert.doesNotThrow(() => validateObject({ dependentRequired: { child: ['parent'] }, type: 'object' })({ parent: true }, state));
