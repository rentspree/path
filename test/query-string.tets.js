import chai from "chai"
import { parse, stringify } from "../src/query-string"

chai.should()

describe("Query String", () => {
  describe("#parse", () => {
    it("should get an empty object when send an empty query string", () => {
      parse("").should.be.deep.equal({})
    })
    it("should get data when send a query string", () => {
      const result = parse("?page=1&filter%5Bstatus%5D=all&search=")
      const expected = {
        page: "1",
        filter: {
          status: "all"
        },
        search: ""
      }
      result.should.be.deep.equal(expected)
    })
  })
  describe("#stringify", () => {
    it("should get an empty string to when send an empty object", () => {
      const result = stringify({})

      result.should.equal("")
    })
    it("should get a query string to when send an object", () => {
      const result = stringify({
        page: "1",
        filter: {
          status: "all"
        },
        search: ""
      })

      result.should.equal("?page=1&filter%5Bstatus%5D=all&search=")
    })
  })
})
