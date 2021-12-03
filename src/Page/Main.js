import styled from "@emotion/styled";
import { useState } from "react";
import Card from "../Components/Card";
import Icon from "../Components/Icon";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import Tab from "../Components/Tab";

export default function Main() {
  const [status, setStatus] = useState("All");
  const rangeCard = [...Array(8).keys()];
  const dataCards = rangeCard.map((data) => (
    <Card timedata={data} type="nofavorite" body="asdsadasdsadsadsad"></Card>
  ));
  return (
    <StyleDiv>
      <header>HACKER NEWS</header>
      <main>
        <StyleToggle>
          <Tab
            status={status}
            content="All"
            onClick={() => setStatus("All")}
          ></Tab>
          <Tab
            status={status}
            content="My faves"
            onClick={() => setStatus("My faves")}
          ></Tab>
        </StyleToggle>
        <StyleContainer>{dataCards}</StyleContainer>
      </main>
      <Pagination></Pagination>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 0 98px;
  background-color: #fcfcfc;
  & header {
    display:flex;
    font-size: 28px;
    font-family: libre baskerville;
    align-items:center;
    padding-left: 150px;
    width:100%;
    height:114px;
  }
  & main {
    display:flex;
    flex-direction: column;
    align-items:center;
  }
`;

const StyleContainer = styled.div`
  display:grid;
  width:100%;
  padding:38px 150px;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 40px;
`;

const StyleToggle = styled.div`
  display:flex;
`;
