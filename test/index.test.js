import chai from "chai"
import sayHello from "../src"

chai.should()

describe("sayHello", () => {
  it("firstTest", () => {
    sayHello().should.equal("Hello, Haz!")
    sayHello("foo").should.equal("Hello, foo!")
  })
})
