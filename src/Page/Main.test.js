import { render } from "@testing-library/react"
import React from "react"
import Main from "./Main"

test("test render Main", ()=>{
  const status="All"

  const element = render(<Main/>)
  expect(element.getByText(status)).toBeInTheDocument();
})