import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>4O4☠️</h2>
          <h3>You are Lostttttttttttttttttttttt!😵</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            facere nihil aliquam magni necessitatibus impedit dolore quidem.
            Nisi, alias non. Fugit cumque repellendus eos, iure distinctio sed
            eveniet perferendis a.
          </p>
          <NavLink to="/">
            <Button>Go to 🏠</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    background: skyblue;

    h2 {
      font-size: 10rem;
    }
    p {
      margin: 2rem 0;
    }
    h3 {
      font-size: 3rem;
    }
  }
`;

export default ErrorPage;
