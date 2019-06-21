import { parseSubdomain } from "../src/parse-subdomain"

describe("parseUrl", () => {
  let subdomain
  let host
  let path
  beforeEach(() => {
    subdomain = "rentspree"
    host = "https://www.rentspree.com"
    path = "/dashboard"
  })

  it("should return url with subdomain", () => {
    subdomain = "caa"
    parseSubdomain(subdomain, host, path).should.equal(
      "https://caa.rentspree.com/dashboard"
    )
  })
  it("should return correct url when subdomain is undefined", () => {
    parseSubdomain(undefined, host, path).should.equal(
      "https://www.rentspree.com/dashboard"
    )
  })
  it("should return correct url when subdomain is www", () => {
    host = "https://xyz.rentspree.com"
    parseSubdomain("www", host, path).should.equal(
      "https://xyz.rentspree.com/dashboard"
    )
  })
  it("should return correct url when subdomain is rentspree", () => {
    parseSubdomain("rentspree", host, path).should.equal(
      "https://www.rentspree.com/dashboard"
    )
  })
  it("should return correct url with many path", () => {
    parseSubdomain("rentspree", host, path, "/property", "123").should.equal(
      "https://www.rentspree.com/dashboard/property/123"
    )
    parseSubdomain("abc", host, "a", "/b", "c").should.equal(
      "https://abc.rentspree.com/a/b/c"
    )
  })
})
