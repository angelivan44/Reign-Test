import { render } from "@testing-library/react"
import React from "react"
import Search from "./Search"

test("test render Search", ()=>{
  const setQuery=()=>{}
  const text = "Select your news"

  const element = render(<Search 
    setQuery={setQuery}
    />)
  expect(element.getByText(text)).toBeInTheDocument();
})