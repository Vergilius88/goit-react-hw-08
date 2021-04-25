import styled from "styled-components";

const myStyle = {
  Nav: styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 90%;
    height: auto;
    list-style: none;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
  `,
  Ul: styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  `,
  Li: styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 45px;
    margin: 5px;
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
    a {
      font-size: 1.3em;
    }
  `,
};

export default myStyle;
