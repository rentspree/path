import _ from "lodash"

export const isAllowedSubdomain = (subdomain = "www", subdomains = {}) => {
  return Object.values(subdomains).includes(subdomain)
}

export const getSubdomain = (
  url = "",
  subdomains = {},
  defaultSub = "rentspree"
) => {
  if (_.isNil(url) || _.isEmpty(url)) return "rentspree"
  const fullPath = url.replace(/http[s]?:\/\//, "")
  let subdomain = fullPath.slice(0, fullPath.indexOf("."))

  subdomain =
    _.isNil(subdomain) || _.isEmpty(subdomain) ? defaultSub : subdomain

  if (!_.isEmpty(subdomains)) {
    return isAllowedSubdomain(subdomain, subdomains) ? subdomain : defaultSub
  }

  return subdomain
}
