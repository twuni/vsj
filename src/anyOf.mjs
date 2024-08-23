export const anyOf = (validators = []) => (object, state) => {
  const errors = [];

  const nextState = {
    ...state,
    onError(error) {
      errors.push(error);
    }
  };

  for (let index = 0; index < validators.length; index += 1) {
    const validate = validators[index];

    validate(object, nextState);

    if (errors.length <= index) {
      return;
    }
  }

  errors.forEach(state.onError);
};

export default anyOf;
