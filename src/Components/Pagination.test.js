import { render } from "@testing-library/react"
import React from "react"
import Pagination from "./Pagination"

test("test render Pagination", ()=>{
  const page = "1"
  const setPage=(data)=>{data}
  const status = "All"
  const favoritePage = "2"


  const element = render(<Pagination 
    page={page}
    status={status}
    setPage={setPage}
    favoritePage={favoritePage}
    />)
  expect(element.getByText("1")).toBeInTheDocument();
})