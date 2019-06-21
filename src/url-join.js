/* eslint-disable import/prefer-default-export */
import urlJoinLib from "url-join"

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
