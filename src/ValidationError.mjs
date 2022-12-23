export const ValidationError = function ValidationError(context, message) {
  this.name = this.constructor.name;
  this.stack = '';

  this.instanceLocation = context.instanceLocation;
  this.keywordLocation = context.keywordLocation;
  this.message = message;

  return this;
};

ValidationError.prototype = new Error();
ValidationError.prototype.constructor = ValidationError;

export default ValidationError;

