import { useState } from "react";
import Tab from "./Components/Tab";

function App() {
  const [status , setStatus] = useState("All")
  return (
    <div>
     <Tab status={status} content="All" onClick={()=>setStatus("All")}></Tab>
     <Tab status={status} content="My faves" onClick={()=>setStatus("My faves")}></Tab>
    </div>
  );
}

export default App;
