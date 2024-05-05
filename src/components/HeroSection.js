import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <Wrapper>
      <div className="container">
        <div className=" grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>{name}</h1>
            <p>
              Shop smarter, not harder! Dive into our diverse selection of
              top-tier products, curated for your lifestyle. Whether you're
              hunting for fashion must-haves, tech innovations, or home
              essentials, we've got you covered. Elevate your online shopping
              game with us today!
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>

          {/* our home page image */}
          <div className="hero-section-image">
            <figure>
              <img src="images/hero.jpg" alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 15rem 10rem;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
      line-height: 2;
      letter-spacing: 1.5;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 80%;
      height: 70%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 30%;
      top: -3rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: 35rem;
    object-fit: cover;
    transition: all 0.5s linear;
  }
  .img-style:hover {
    scale: 1.02;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
  }
`;
export default HeroSection;
