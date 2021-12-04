import styled from "@emotion/styled";
import moment from "moment";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import Tab from "../Components/Tab";
import apiFetch from "../services/ApiFetch";

export default function Main() {
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("reactjs");
  const [page, setPage] = useState(0);
  const [favoritesIds , setFavoritesIds] = useState([])
  const [store, setStore] = useState([]);

  const [dataApi, setDataApi] = useState({ hits: [] });

  useEffect(async () => {
    const newData = await apiFetch(query, page);
    setDataApi(newData);
  }, [query, page]);

  useEffect(() => {
    const newStore = JSON.parse(localStorage.getItem("favorites")) || [];
    const idsFavorites = JSON.parse(localStorage.getItem("favoritesIds")) || [];
    setStore(newStore)
    setFavoritesIds(idsFavorites)
  }, []);

  const toggleFavorites = (dataSave) => {

    const isFavorite = store.find(data => data.object_id == dataSave.object_id)
    
    if (isFavorite) {
      const filteStore = store.filter(item => {
        return item.object_id != isFavorite.object_id
      })
      const filterFavorite = favoritesIds.filter(item => {
        return item != isFavorite.object_id
      })
      setStore(filteStore)
      setFavoritesIds(filterFavorite)
      localStorage.setItem("favorites",JSON.stringify(filteStore))
      localStorage.setItem("favoritesIds",JSON.stringify(filterFavorite))
    }else {
      const deleStore = [...store,{...dataSave}]
      const deleFavoriteIds = [...favoritesIds,dataSave.object_id]
      setStore(deleStore)
      setFavoritesIds(deleFavoriteIds)
      localStorage.setItem("favorites",JSON.stringify(deleStore))
      localStorage.setItem("favoritesIds",JSON.stringify(deleFavoriteIds))
    }
  
  };
  const dataCards = dataApi.hits
    .slice(0, 8)
    .sort((data) => data.created_at)
    .map((data) => (
      <Card
        key={data.objectID}
        story_url={data.story_url}
        timedata={moment(data.created_at).fromNow()}
        author={data.author}
        type={favoritesIds.includes(data.objectID) ? "favorite" : "nofavorite"}
        body={data.story_title}
        object_id = {data.objectID}
        toggleFavorites={toggleFavorites}
      ></Card>
    ));

    const dataFavorites = store.map(data => (
    <Card key={data.object_id}
      story_url={data.story_url}
      timedata={data.timedata}
      author={data.author}
      type={favoritesIds.includes(data.object_id) ? "favorite" : "nofavorite"}
      body={data.body}
      object_id = {data.object_id}
      toggleFavorites={toggleFavorites}></Card>) );

      const setData = {
        "All": dataCards,
        "My faves" : dataFavorites
      }
      
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
        <Search query={query} setQuery={setQuery}></Search>
        <StyleContainer>{setData[status]}</StyleContainer>
      </main>
      <Pagination page={page} setPage={setPage}></Pagination>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 0 98px;
  background-color: #fcfcfc;
  & header {
    display: flex;
    font-size: 28px;
    font-family: libre baskerville;
    align-items: center;
    padding-left: 150px;
    width: 100%;
    height: 114px;
  }
  & main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyleContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 38px 150px;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 40px;
`;

const StyleToggle = styled.div`
  display: flex;
`;
