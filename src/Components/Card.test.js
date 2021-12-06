import { render , screen } from "@testing-library/react"
import React from "react"
import Card from "./Card"

test("test render card", ()=>{
  const timedata = "10-10-2021"
  const type = "time"
  const body = "public test card"
  const author = "messi"
  const story_url = "..."
  const object_id = "1"

  const element = render(<Card 
    timedata={timedata} 
    type={type} 
    body={body}
    author={author}
    story_url={story_url}
    object_id={object_id}/>)
  expect(element.getByText("public test card")).toBeInTheDocument();
})