import { render } from "@testing-library/react"
import React from "react"
import Tab from "./Tab"

test("test render Tab", ()=>{
  const status="All"
  const content = "All"

  const element = render(<Tab 
    status={status}
    content={content}
    />)
  expect(element.getByText(content)).toBeInTheDocument();
})