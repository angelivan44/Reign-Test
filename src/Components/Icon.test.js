import { render , screen } from "@testing-library/react"
import React from "react"
import Icon from "./Icon"

test("test render element", ()=>{
  const type = "reactjs"

  const element = render(<Icon data-testid="icon" type={type}/>)
  const newElement = screen.getByTestId("icon")
  expect(newElement).toBeInTheDocument();
})