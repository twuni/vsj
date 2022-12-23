export const anyOf = (validators = []) => (object, state) => {
  const errors = [];

  const nextState = {
    ...state,
    onError(error) {
      errors.push(error);
    }
  };

  for (let i = 0; i < validators.length; i++) {
    const validate = validators[i];

    validate(object, nextState);

    if (errors.length <= i) {
      return;
    }
  }

  errors.forEach(state.onError);
};

export default anyOf;
