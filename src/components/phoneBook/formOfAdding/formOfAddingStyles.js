import styled from "styled-components";

export default {
  Button: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    margin: 10px auto;
    cursor: pointer;
    border-radius: 7px;
    box-shadow: 0px 1px 3px 0px rgba(1, 1, 222, 1);
    &:hover {
      border-radius: 30px;
    }
    &:focus {
      border-radius: 10px;
      outline: none;
    }
  `,
};
