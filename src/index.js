// @flow

import { parse, stringify } from "./query-string"

export { buildPath, setErrorClass } from "./path"

export const query = {
  parse,
  stringify
}
