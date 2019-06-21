/**
 * Default error class
 * @class ParamInterpolatedError
 */
export class ParamInterpolatedError extends Error {
  constructor(typeError) {
    super(`ParamInterpolatedError: ${typeError.message}`)
    this.name = "ParamInterpolatedError"
    this.stack = typeError.stack
  }
}

let ERROR_KLASS = ParamInterpolatedError

/**
 * Set the Error class which would be thrown when buildPath function failed
 * @param {Class} error an Error class which would be thrown
 * @example
 * // if you set
 * setErrorClass(SomeClass)
 * // when the buildPath function failed it will throw something like this
 * throw new SomeClass()
 */
export const setErrorClass = error => {
  ERROR_KLASS = error
}

export const throwError = e => {
  throw new ERROR_KLASS(e)
}
