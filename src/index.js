// @flow

import { parse, stringify } from "./query-string"

export { buildPath, setErrorClass, urlJoin } from "./path"

export const query = {
  parse,
  stringify
}
