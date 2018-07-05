// @flow

import { buildPath, setErrorClass } from "./path"
import { parse, stringify } from "./query-string"

export default {
  buildPath,
  setErrorClass,
  query: {
    parse,
    stringify
  }
}
