/* eslint-disable import/prefer-default-export, no-plusplus */
import { urlJoin } from "./url-join"

// parseUrl with subdomain
export const parseSubdomain = (...args) => {
  const subdomain = args[0]
  const host = args[1]

  let url = host
  if (subdomain && subdomain !== "www" && subdomain !== "rentspree") {
    url = host.replace("www", subdomain)
  }
  for (let i = 2; i < args.length; i++) {
    url = urlJoin(url, args[i])
  }
  return url
}
