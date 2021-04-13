import styled from "styled-components";

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #1a1d24;

  .buttons {
    display: flex;
    button {
      font-size: 20px;
      font-weight: bold;
      border: none;
      background: none;
      margin: 0 5px;
      cursor: pointer;
    }
  }
`;
