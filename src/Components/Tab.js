import styled from "@emotion/styled";

export default function Tab() {
  return (
    <StyleDiv>
      <p>All</p>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 98px;
  height: 31px;
  padding: 3px 39px 0 40px;
  border-radius: 2px;
  border: solid 1px #1797ff;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    width: 19px;
    height: 28px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: center;
    color: #1797ff;
  }
`;
