export const propertyIn = (object, property) => Object.prototype.hasOwnProperty.call(object, property);

export default propertyIn;
