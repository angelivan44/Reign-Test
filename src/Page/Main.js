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
  const [page, setPage] = useState(1);
  const [favoritePage, setFavoritePage] = useState(1);
  const [favoritesIds, setFavoritesIds] = useState([]);
  const [store, setStore] = useState([]);

  const [dataApi, setDataApi] = useState({ hits: [] });

  const requestApi = async () => {
    const newData = await apiFetch(query, page);
    console.log(newData);
    setDataApi(newData);
  };

  useEffect(() => {
    requestApi();
  }, [query, page]);

  useEffect(() => {
    const newStore = JSON.parse(localStorage.getItem("favorites")) || [];
    const idsFavorites = JSON.parse(localStorage.getItem("favoritesIds")) || [];
    const currentPage = localStorage.getItem("page") || 1;
    const currentFavoritePage = localStorage.getItem("favoritepage") || 1;
    const currentQuery = localStorage.getItem("query") || "reactjs";

    setStore(newStore);
    setFavoritesIds(idsFavorites);
    setPage(currentPage);
    setFavoritePage(currentFavoritePage);
    setQuery(currentQuery);
  }, []);

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    localStorage.setItem("favoritepage", favoritePage);
  }, [favoritePage]);

  useEffect(() => {
    localStorage.setItem("query", query);
  }, [query]);

  const toggleFavorites = (dataSave) => {
    const isFavorite = store.find(
      (data) => data.object_id == dataSave.object_id
    );

    if (isFavorite) {
      const filteStore = store.filter((item) => {
        return item.object_id != isFavorite.object_id;
      });
      const filterFavorite = favoritesIds.filter((item) => {
        return item != isFavorite.object_id;
      });
      setStore(filteStore);
      setFavoritesIds(filterFavorite);
      localStorage.setItem("favorites", JSON.stringify(filteStore));
      localStorage.setItem("favoritesIds", JSON.stringify(filterFavorite));
    } else {
      const deleStore = [...store, { ...dataSave }];
      const deleFavoriteIds = [...favoritesIds, dataSave.object_id];
      setStore(deleStore);
      setFavoritesIds(deleFavoriteIds);
      localStorage.setItem("favorites", JSON.stringify(deleStore));
      localStorage.setItem("favoritesIds", JSON.stringify(deleFavoriteIds));
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
        object_id={data.objectID}
        toggleFavorites={toggleFavorites}
      ></Card>
    ));

  const dataFavorites = store
    .slice((favoritePage - 1) * 8, favoritePage * 8)
    .map((data) => (
      <Card
        key={data.object_id}
        story_url={data.story_url}
        timedata={data.timedata}
        author={data.author}
        type={favoritesIds.includes(data.object_id) ? "favorite" : "nofavorite"}
        body={data.body}
        object_id={data.object_id}
        toggleFavorites={toggleFavorites}
      ></Card>
    ));

  const setData = {
    All: dataCards,
    "My faves": dataFavorites,
  };

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
        <StyleContainerSearch>
          <Search query={query} setQuery={setQuery}></Search>
        </StyleContainerSearch>
        <StyleContainer>{setData[status]}</StyleContainer>
      </main>
      <StylePaginationContainer>
        <Pagination
          status={status}
          page={page}
          setPage={setPage}
          favoritePage={favoritePage}
          setFavoritePage={setFavoritePage}
        ></Pagination>
      </StylePaginationContainer>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-color: #fcfcfc;
  & header {
    display: flex;
    font-size: 28px;
    font-family: libre baskerville;
    align-items: center;
    padding-left: 150px;
    width: 100%;
    height: 114px;
    box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
    background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
    @media(max-width : 375px){
      padding-left: 0;
      justify-content:center;}
  }
  & main {
    display: flex;
    padding: 70px 98px;
    flex-direction: column;
    align-items: center;
    @media(max-width : 375px){
      width:100%;
      padding: 0;
  }}

`;

const StyleContainer = styled.div`
  display: grid;
  width: 100%;
  padding: 38px 150px;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  column-gap: 40px;
  @media(max-width : 375px){
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const StyleToggle = styled.div`
  display: flex;
`;

const StyleContainerSearch = styled.div`
  margin:63px 0 0 0;
  width: 100%;
  @media(max-width : 375px){
    display:flex;
    justify-content:center;}
`;

const StylePaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
