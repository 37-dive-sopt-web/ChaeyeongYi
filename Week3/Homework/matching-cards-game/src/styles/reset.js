import { css } from "@emotion/react";

export const ResetStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  html {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #e8f7ff;
  }
`;
