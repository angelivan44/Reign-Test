import { useState } from "react";
import Card from "./Components/Card";
import Icon from "./Components/Icon";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
import Tab from "./Components/Tab";
import Main from "./Page/Main";

function App() {
  const [status , setStatus] = useState("All")
  return (
    <Main></Main>
  );
}

export default App;
