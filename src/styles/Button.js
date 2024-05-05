import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgba(0, 0, 0, 0);

  color: rgb(255 255 255);
  /* padding: 1.4rem 2.4rem; */
  padding: 13px 20px 13px;
  letter-spacing: 1px;
  border: 1px solid black;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:after {
    content: "";
    background-color: #ffe54c;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }
  &:hover {
    background-color: red;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
  }
`;
