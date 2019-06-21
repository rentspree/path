import { urlJoin } from "../src/url-join"

describe("urlJoin", () => {
  it("should use url-join library correctly", () => {
    urlJoin("/foo/bar/gee", "/321/123").should.equal("/foo/bar/gee/321/123")
  })
  it("should filter / when it is double and return correctly", () => {
    urlJoin("/foo/bar/gee//", "///321/123").should.equal("/foo/bar/gee/321/123")
  })
  it("should join param correctly", () => {
    urlJoin("/foo/bar/gee", "/321/123", "?test=12312").should.equal(
      "/foo/bar/gee/321/123?test=12312"
    )
  })
})
