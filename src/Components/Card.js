import styled from "@emotion/styled";
import Icon from "./Icon";

export default function Card({ timedata, type, body, author, story_url, toggleFavorites, object_id }) {
  const dataSave = {timedata , body, author , story_url , object_id}
  return (
    <StyleDiv>
      <StyleBody href={story_url} target="_blank">
        <StyleContainer  >
          <Icon type="time"></Icon>
          <p>{timedata} by {author}</p>
        </StyleContainer>
        <p>{body}</p>
      </StyleBody>
      <StyleHeart>
        <Icon type={type} toggleFavorites={toggleFavorites} dataSave={dataSave} ></Icon>
      </StyleHeart>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 550px;
  height: 90px;
  background-color: #fcfcfc;
  display: flex;
  justify-content: space-between;
  border: solid 1px #979797;
  align-items: center;
  border-radius: 5px;
  &:hover  {
    opacity:60%;
  }
  @media(max-width : 375px){
    width:300px;
  }
`;

const StyleContainer = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
  & p {
    margin:0;
    color: #767676;
    font-size: 11px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const StyleHeart = styled.div`
  display: flex;
  width: 68px;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgb(96, 96, 96, 0.06);
`;

const StyleBody = styled.a`
  text-decoration:none;
  display:flex;
  flex-direction:column;
  padding-left: 26px;
  padding-top: 25px;
  padding-bottom: 23px;
  gap:7px;
  & p {
    color: #6b6b6b;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.25px;
    font-size: 14px;
    margin:0;
  }

  @media(max-width : 375px){
    width:200px;
  }
`;
