import { useState } from "react";
import Icon from "./Components/Icon";
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
    </div>
  );
}

export default App;
