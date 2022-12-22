export const substate = (state, instanceLocation, keywordLocation) => ({
  ...state,
  depth: state.depth + 1,
  instanceLocation: `${state.instanceLocation}/${instanceLocation}`,
  keywordLocation: `${state.keywordLocation}/${keywordLocation}`
});

export default substate;
