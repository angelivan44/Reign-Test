import styled from "@emotion/styled";
import { useEffect, useState } from "react";

export default function Pagination({page , setPage , status , favoritePage, setFavoritePage}) {

  const [select, setSelect] = useState(1)
  const [offsetValue , setOffsetValue] = useState(0)

  useEffect(()=>{
    if(status=="All"){
      setSelect(page)
    }else {
      setSelect(favoritePage)
    }
    
  },[status])

  useEffect(()=>{
    if(select >= 10){
        setOffsetValue(select-9)
    }
    else {
      setOffsetValue(0)
    }
    if(status =="All"){
      setPage(select)
    }else {
      setFavoritePage(select)
    }

  },[select])
  
  const dimentionPagination = [...Array(11).keys()]

  const data = dimentionPagination.map( item => {
    switch (item){
      case 0:
        return <StyleIl key={item} select={select} data = "minus" onClick={()=>{select == 1 ? setSelect(select) : setSelect(select - 1)}} >{"<"}</StyleIl>
      case 10:
        return <StyleIl key={item} select={select} data = "plus" onClick={()=>{setSelect(select + 1)}}>{">"}</StyleIl>
      default:
        return <StyleIl key={item} select={select} data = {item+offsetValue} onClick={()=>{setSelect(item + offsetValue)}}> {item+offsetValue}</StyleIl>
    }

})

  return (
    <StyleUl >
      {data}
    </StyleUl>
  );
}

const StyleUl = styled.ul`
  display: flex;
  list-style:none;
  gap:8px;
  @media(max-width : 375px){
    width:300px;}
`;

const StyleIl = styled.li`
    cursor: pointer;
    display:flex;
    width:32px;
    height:32px;
    font-size: 14px;
    justify-content:center;
    align-items:center;
    border: solid 1px #d9d9d9;
    border-radius: 6px;
    color: ${props => props.select == props.data ? "#fff"  : "rgba(0, 0, 0, 0.65)"};
    background-color:${props => props.select == props.data ? "#1890ff" : ""};
`
