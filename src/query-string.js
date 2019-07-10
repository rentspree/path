import qs from "qs"
import isEmpty from "lodash.isempty"
/** @module query */

/**
 * This method parse a query string into object
 * @param {String} str the string to parse
 * @returns {Object} the query object parsed from query string
 * @example
 * // returns {str1: "hello", str2: "hola"}
 * parse("?str1=hello&str2=hola")
 * @example
 * // returns {name: "John", lastName: "Doe"}
 * parse("name=John&lastName=Doe")
 * @memberof query
 */
export const parse = (str = "") =>
  !isEmpty(str) ? qs.parse(str.replace(/^\?/, "")) : {}

/**
 * This method stringify object into query string
 * @param {Object} obj the object to be stringify
 * @returns {String} the stringified query result
 * @example
 * // returns "?name=John&lastName=Doe"
 * stringify({name: "John", lastName: "Doe"})
 * @memberof query
 */
export const stringify = (obj = {}) =>
  !isEmpty(obj) ? `?${qs.stringify(obj)}` : ""
