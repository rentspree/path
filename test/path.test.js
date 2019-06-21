import chai from "chai"
import {
  buildPath,
  ParamInterpolatedError,
  setErrorClass,
  throwError,
  urlJoin
} from "../src/path"

chai.should()

class MockError extends Error {}

describe("Path module", () => {
  context("default Error", () => {
    it("should throw default error if not set otherwise", () => {
      const testFn = () => {
        throwError(new TypeError("Something"))
      }
      testFn.should.throw(ParamInterpolatedError)
    })
  })
  context("config error", () => {
    it("should throw correct error", () => {
      setErrorClass(MockError)
      const testFn = () => {
        throwError()
      }
      testFn.should.throw(MockError)
    })
  })
  context("buildPath", () => {
    it("should be able to interpolate param into path", () => {
      const param = {
        firstParam: "hello",
        secondParam: "haha"
      }
      buildPath("/path/:firstParam/with/:secondParam", param).should.equal(
        `/path/${param.firstParam}/with/${param.secondParam}`
      )
    })

    it("should not interpolate param on parameter that is not existed", () => {
      const param = {
        firstParam: "hello",
        secondParam: "haha",
        extraParam: "huhu"
      }
      buildPath("/path/:firstParam/with/:secondParam", param).should.equal(
        `/path/${param.firstParam}/with/${param.secondParam}`
      )
    })
    it("should throw error if some params is not interpolated", () => {
      const testFn = () => buildPath("/path/:firstParam", { noParam: "true" })
      testFn.should.throw(MockError)
    })
    it("should throw nice error message", () => {
      setErrorClass(ParamInterpolatedError)
      const testFn = () => buildPath("/path/:firstParam", { noParam: "true" })
      testFn.should.throw(
        'ParamInterpolatedError: Expected "firstParam" to be a string'
      )
    })
    it("should suffix passed query", () => {
      const param = {
        firstParam: "hello",
        secondParam: "haha"
      }
      const query = { q1: "imquery", q2: "yo-man" }
      buildPath(
        "/path/:firstParam/with/:secondParam",
        param,
        query
      ).should.equal(
        `/path/${param.firstParam}/with/${param.secondParam}?q1=imquery&q2=yo-man`
      )
    })
  })
  describe("urlJoin", () => {
    it("should use url-join library collectly", () => {
      urlJoin("/foo/bar/gee", "/321/123").should.equal("/foo/bar/gee/321/123")
    })
    it("should filter / when it is double and return collectly", () => {
      urlJoin("/foo/bar/gee//", "///321/123").should.equal(
        "/foo/bar/gee/321/123"
      )
    })
    it("should join param collectly", () => {
      urlJoin("/foo/bar/gee", "/321/123", "?test=12312").should.equal(
        "/foo/bar/gee/321/123?test=12312"
      )
    })
  })
})
