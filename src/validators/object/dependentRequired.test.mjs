import { validateObjectDependentRequired } from './dependentRequired.mjs';
import assert from 'node:assert/strict';

assert.throws(() => validateObjectDependentRequired({ dependentRequired: { child: ['parent'] } })({ child: true }, { onError(error) { throw error; } }));
assert.doesNotThrow(() => validateObjectDependentRequired({ dependentRequired: { child: ['parent'] } })({ child: true, parent: true }, { onError(error) { throw error; } }));
assert.doesNotThrow(() => validateObjectDependentRequired({ dependentRequired: { child: ['parent'] } })({ parent: true }, { onError(error) { throw error; } }));
