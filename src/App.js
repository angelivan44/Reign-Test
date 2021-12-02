import { useState } from "react";
import Card from "./Components/Card";
import Icon from "./Components/Icon";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Tab from "./Components/Tab";

function App() {
  const [status , setStatus] = useState("All")
  return (
    <div>
     <Tab status={status} content="All" onClick={()=>setStatus("All")}></Tab>
     <Tab status={status} content="My faves" onClick={()=>setStatus("My faves")}></Tab>
    <Icon type="react"></Icon>
    <Icon type="angular"></Icon>
    <Icon type="vue"></Icon>
    <Icon type="time"></Icon>
    <Icon type="favorite"></Icon>
    <Icon type="nofavorite"></Icon>
    <Card timedata = " asdsad sfdsd" type = "favorite"  body ="sdsadasdasdasdasd"></Card>
    <Search></Search>
    <p>golalaala</p>
    <Pagination></Pagination>
    </div>
  );
}

export default App;
