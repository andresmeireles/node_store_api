export default class SuperError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, SuperError.prototype);
  }
}
