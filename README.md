# VSJ is JSON Schema Validation

> :bulb: Learn more about JSON Schema at [json-schema.org][1].

## Why?

Because after using it for years, I came to acknowledge that the current
de facto standard library for JSON schema validation in JavaScript apps
-- AJV -- is clunky. I thought, "how hard could it be?" Two days later,
here we are. As it turns out, not that hard.

I primarily use JSON Schema validation for HTTP requests. For each endpoint,
I model the query parameters, path parameters, and request body I expect as
a JSON Schema, and I short-circuit processing when this validation fails.
It's one of the many stages in a multi-stage request processing pipeline.

## Features

 * lightweight and minimal -- zero dependencies
 * readable implementation -- learn from the source code
 * readable errors -- easy to see what failed and why
 * comprehensive test suite -- 100% code coverage
 * idiomatic usage -- failed validation throws an error
 * concurrency-friendly -- tightly scoped for massively parallel usage
 * fast -- highly tuned for validation performance
 * standard compliant -- IETF draft-bhutton-json-schema-validation-01 (2022-06-16)

## Installing

Install VSJ just like you would any other npm package:

```bash
npm install vsj
```

## Usage

```javascript
import { createValidator } from 'vsj';

const validate = createValidator({ type: 'number' });

// throws a validation error
validate('hello world');

// does not throw an error
validate(123);
```

[1]: https://json-schema.org/
