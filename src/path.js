import pathToRegexp from "path-to-regexp"
import urlJoinLib from "url-join"
import { stringify } from "./query-string"
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

export const throwError = e => {
  throw new ERROR_KLASS(e)
}

/**
 * Build path from path regexp and params and optionally append query suffix to the path
 * @param {String} path the path regex
 * @param {Object} params the params to interpolate in path
 * @param {Object} [query] the query object to be converted to string
 * @returns {String | null} the built path
 * @example
 * // return /api/user/123456?name=John&lastName=Doe
 * buildPath("/api/user/:id", {id: "123456"}, {name: "John", lastName: "Doe"}
 * @example
 * // return /content/post/this-is-a-good-post
 * buildPath("/content/post/:slug", {slug: "this-is-a-good-post"})
 */
export const buildPath = (path, params, query) => {
  const toPath = pathToRegexp.compile(path)
  try {
    if (query) {
      // concatenate with query
      return toPath(params) + stringify(query)
    }
    return toPath(params)
  } catch (e) {
    if (e instanceof TypeError) {
      throwError(e)
    } else {
      throw e
    }
  }
  return null
}

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

/**
 * Build URL from URL-JOIN library
 * @param {String} args all path what you need to join
 * @returns {String} the built path
 * @example
 * // return /api/user/123456?name=John&lastName=Doe
 * urlJoin("/api/user/123456", "?name=John&lastName=Doe")
 * @example
 * // return /content/post/this-is-a-good-post
 * urlJoin("/content/post///", "//this-is-a-good-post")
 */
export const urlJoin = (...args) => {
  return urlJoinLib(args)
}
