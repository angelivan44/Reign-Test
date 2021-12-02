import styled from "@emotion/styled";
import Icon from "./Icon";

export default function Card({ timedata, type, body }) {
  return (
    <StyleDiv>
      <StyleBody>
        <StyleContainer>
          <Icon type="time"></Icon>
          <p>{timedata}</p>
        </StyleContainer>
        <p>{body}</p>
      </StyleBody>
      <StyleHeart>
        <Icon type={type}></Icon>
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
`;

const StyleContainer = styled.div`
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

const StyleBody = styled.div`
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
`;
