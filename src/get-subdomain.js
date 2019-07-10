import isEmpty from "lodash.isempty"
import isNil from "lodash.isnil"

export const isAllowedSubdomain = (subdomain = "www", subdomains = {}) => {
  return Object.values(subdomains).includes(subdomain)
}

export const getSubdomain = (
  url = "",
  subdomains = {},
  defaultSub = "rentspree"
) => {
  if (isNil(url) || isEmpty(url)) return "rentspree"
  const fullPath = url.replace(/http[s]?:\/\//, "")
  let subdomain = fullPath.slice(0, fullPath.indexOf("."))

  subdomain = isNil(subdomain) || isEmpty(subdomain) ? defaultSub : subdomain

  if (!isEmpty(subdomains)) {
    return isAllowedSubdomain(subdomain, subdomains) ? subdomain : defaultSub
  }

  return subdomain
}
