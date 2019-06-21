import { ParamInterpolatedError, setErrorClass, throwError } from "../src/error"

class MockError extends Error {}

describe("Error module", () => {
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
})
