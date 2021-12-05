import styled from "@emotion/styled";
import { useState } from "react";
import Icon from "./Icon";

export default function Search({query, setQuery}) {
  const [toggle, setToggle] = useState(false);
  return (
    <StyleContainer>
      <StyleDiv onClick={() => setToggle(!toggle)}>
        <p>Select your news</p>
        <StyleP>&lt;</StyleP>
      </StyleDiv>
      <StyleUl toggle={toggle}>
        <li
          onClick={() => {
            setToggle(!toggle);
            setQuery("angular");
          }}
        ><div><Icon type="angular"></Icon>Angular</div>
          
        </li>
        <li
          onClick={() => {
            setToggle(!toggle);
            setQuery("reactjs");
          }}
        ><div> <Icon type="react"></Icon>Reacts</div>
        </li>
        <li
          onClick={() => {
            setToggle(!toggle);
            setQuery("vuejs");
          }}
        ><div><Icon type="vue"></Icon>Vuejs</div>
          
        </li>
      </StyleUl>
    </StyleContainer>
  );
}

const StyleDiv = styled.div`
  border: solid 1px;
  display: flex;
  padding: 5px 12px;
  height: 32px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

const StyleP = styled.p`
  transform: rotate(-90deg);
  margin: 0;
`;
const StyleUl = styled.ul`
  display: ${(props) => (props.toggle ? "block" : "none")};
  list-style: none;
  background-color: #fff;
  margin: 0;
  position: absolute;
  width: 240px;
  top: 50px;
  padding-left: 11px;
  padding-right: 0;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 #dad8d8;
  & li div {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 46px;
    gap: 13px;

    &:hover {
      background-color:#eaeaea;
    }

  }
`;

const StyleContainer = styled.div`
  position: relative;
  width: 240px;
`;
