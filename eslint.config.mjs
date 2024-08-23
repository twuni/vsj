import eslint from '@eslint/js';

export default Object.freeze([
  eslint.configs.all,
  {
    rules: {
      'no-magic-numbers': [
        'error',
        {
          ignore: [
            -1,
            0,
            1
          ]
        }
      ],
      'no-shadow': 'off',
      'no-ternary': 'off',
      'one-var': 'off'
    }
  }
]);
