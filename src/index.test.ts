import test from "tape"

import { sum } from "./index"

test("main", t => {
  t.equal(
    typeof sum,
    "function",
    "given [exported sum] should [return a function]"
  )

  t.end()
})
