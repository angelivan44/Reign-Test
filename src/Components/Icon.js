import styled from "@emotion/styled";
import angularjs from "../assets/angular.png";
import reactjs from "../assets/react.png";
import vuejs from "../assets/vuejs.png";
import fullfavorite from "../assets/fullheart.svg";
import simplefavorite from "../assets/borderheart.svg";
import time from "../assets/time.svg";

const setIcon = {
  react: reactjs,
  angular: angularjs,
  vue: vuejs,
  favorite: fullfavorite,
  nofavorite: simplefavorite,
  time: time,
};

export default function Icon({ type, toggleFavorites, dataSave }) {
  return (
    <StyleImg
      type={type}
      src={setIcon[type]}
      onClick={() => {
        toggleFavorites(dataSave);
        console.log(dataSave)
      }}
    />
  );
}

const StyleImg = styled.img`
  height: ${(props) => (props.type == "time" ? "16px" : "24px")};
  width: ${(props) => (props.type == "time" ? "16px" : "24px")};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  letter-spacing: normal;
  text-align: center;
  color: ${(props) => (props.status == props.content ? "#1797ff" : "#000")};
`;
