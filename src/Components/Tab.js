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
  padding: 3px 39px 0 40px;
  border-radius: 2px;
  border: solid 1px ${props => props.status == props.content ? "#1797ff" : "#000"};
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    height: 28px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.status == props.content ? "#1797ff" : "#000"};
  }
`;
