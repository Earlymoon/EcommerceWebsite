import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div className="footer-info">
            <h3>Ready to get Shopping</h3>
            <h3>Feal Free to Talk to Us</h3>
          </div>

          <div className="">
            <Button>
              <NavLink to="/contact">Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="footer-header">MoON HuB</h3>
            <p>
              If you're interested in our partnership and would like to find out
              some more information, feel free to contact us
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get exclusive deals</h3>
            <form action="#">
              <input type="Email" placeholder="email" />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons ">
              <div className="Wrapper">
                <FaDiscord className="icons" />
              </div>

              <div className="Wrapper">
                <FaInstagram className="icons" />
              </div>

              <div className="Wrapper">
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <a className="phone-no" href="tel:6299921185">
              +91 6299921185
            </a>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              ©️{new Date().getFullYear()}{" "}
              <span className="footerName">Chandra</span>. All Rights Reserved
            </p>

            <div className="terms">
              <h3>Privacy policy</h3>
              <h3>Terms and conditions</h3>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid Wrapper:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    /* background-color: ${({ theme }) => theme.colors.footer_bg}; */
    background-color: #252b48;
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    .footer-header {
      font-size: 4rem;
      font-weight: 700;
      color: #445069;
      transition: 0.5s linear;
    }
    .footer-header:hover {
      color: #5b9a8b;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      .Wrapper {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
          transition: 0.2s linear;
        }
        .icons:hover {
          color: red;
          scale: 1.1;
        }
      }
    }

    .phone-no {
      text-decoration: none;
      color: #fff;
      font-size: 1.6rem;
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;
    .container {
      place-items: center;
    }
    .footerName {
      color: #5b9a8b;
      font-weight: 700;
    }
    .terms {
      text-align: center;
      align-items: center;
    }

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid Wrapper:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
