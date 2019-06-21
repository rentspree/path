import { getSubdomain, isAllowedSubdomain } from "../src/get-subdomain"

describe("Subdomain", () => {
  const subdomains = {
    APPLE: "apple",
    BOY: "boy",
    CAT: "cat",
    DOG: "dog"
  }
  describe("getSubdomain", () => {
    it("should return rentspree when a path's subdomain is www", () => {
      getSubdomain("http://www.ladprao21.com/", subdomains).should.equal(
        "rentspree"
      )
    })
    it("should return valid subdomain", () => {
      getSubdomain("http://apple.ladprao21.com/").should.equal("apple")
    })
    it("should return rentspree when a path's name is invalid", () => {
      getSubdomain("http://wow.ladprao21.com/", subdomains).should.equal(
        "rentspree"
      )
      getSubdomain("http://caaa.ladprao21.com/", subdomains).should.equal(
        "rentspree"
      )
      getSubdomain("").should.equal("rentspree", subdomains)
    })
    it("should return rentspree when a path's is null", () => {
      getSubdomain(null).should.equal("rentspree")
    })
    it("should return default subdomain", () => {
      getSubdomain("http://wow.ladprao21.com", subdomains, "www").should.equal(
        "www"
      )
    })
  })
  describe("isAllowedSubdomain", () => {
    it("should return true if subdomain is valid", () => {
      isAllowedSubdomain("boy", subdomains).should.equal(true)
    })
    it("should return false if subdomain is rentspree", () => {
      isAllowedSubdomain("rentspree", subdomains).should.equal(false)
    })
    it("should return false if subdomain is empty string", () => {
      isAllowedSubdomain("", subdomains).should.equal(false)
    })
    it("should return false if subdomain is null", () => {
      isAllowedSubdomain(null, subdomains).should.equal(false)
    })
  })
})
