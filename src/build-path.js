/* eslint-disable import/prefer-default-export */
import pathToRegexp from "path-to-regexp"
import { stringify } from "./query-string"
import { throwError } from "./error"

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
