import { substate } from '../../substate.mjs';

export const validateArrayItems = (schema) => (object, state) => {
  const validateItem = state.createValidator(schema.items);

  for (let index = 0; index < object.length; index += 1) {
    const item = object[index];

    try {
      validateItem(item, substate(state, index, '$ref'));
    } catch (error) {
      state.onError(error);
    }
  }
};

export default validateArrayItems;
