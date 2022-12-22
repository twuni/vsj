export const MultipleErrors = function MultipleErrors(children) {
  this.name = this.constructor.name;
  this.stack = '';

  this.errors = children;
  this.message = JSON.stringify(children);

  return this;
};

MultipleErrors.prototype = new Error();
MultipleErrors.prototype.constructor = MultipleErrors;

export default MultipleErrors;

