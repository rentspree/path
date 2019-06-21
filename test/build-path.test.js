import mongoose from "mongoose"
import chai from "chai"
import { buildPath } from "../src/build-path"
import { ParamInterpolatedError, setErrorClass } from "../src/error"

chai.should()
const { ObjectId } = mongoose.Types

describe("buildPath", () => {
  it("should be able to interpolate param into path", () => {
    const param = { firstParam: "hello", secondParam: "haha" }
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
    testFn.should.throw(ParamInterpolatedError)
  })
  it("should throw nice error message", () => {
    setErrorClass(ParamInterpolatedError)
    const testFn = () => buildPath("/path/:firstParam", { noParam: "true" })
    testFn.should.throw(
      'ParamInterpolatedError: Expected "firstParam" to be a string'
    )
  })
  it("should suffix passed query", () => {
    const param = { firstParam: "hello", secondParam: "haha" }
    const query = { q1: "imquery", q2: "yo-man" }
    buildPath("/path/:firstParam/with/:secondParam", param, query).should.equal(
      `/path/${param.firstParam}/with/${param.secondParam}?q1=imquery&q2=yo-man`
    )
  })
  it("should be able to receive ObjectId as path params", () => {
    const idString = "56cb91bdc3464f14678934ca"
    const pIdString = "56cb91bdc3464f14678934cb"
    const id1 = ObjectId(idString)
    const id2 = ObjectId(pIdString)
    const param = { id1, id2 }
    buildPath(
      "http://www.testdomain.com/:id1/rent/:id2/ref",
      param
    ).should.equal(
      `http://www.testdomain.com/${idString}/rent/${pIdString}/ref`
    )
  })
})
