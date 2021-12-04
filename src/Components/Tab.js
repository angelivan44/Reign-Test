import styled from "@emotion/styled";

export default function Tab( { status , content, onClick }) {
  return (
    <StyleDiv status = { status } content = {content} onClick={onClick}>
      <p>{ content }</p>
    </StyleDiv>
  );
}

const StyleDiv = styled.div`
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px ${props => props.status == props.content ? "#1797ff" : "#000"};
  display: flex;
  align-items:center;
  justify-content: center;
  & p {
    margin:0;
    padding:0;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    color: ${props => props.status == props.content ? "#1797ff" : "#000"};
  }
`;
