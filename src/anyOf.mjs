export const anyOf = (validators) => (object, state, onError) => {
  const errors = [];

  for (const validate of validators) {
    try {
      validate(object, { ...state });
      return;
    } catch (error) {
      errors.push(error);
    }
  }

  errors.forEach(onError);
};

export default anyOf;
