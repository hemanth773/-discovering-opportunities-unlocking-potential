import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Wrapper = styled.section`
    #foot {
      position: relative;
      background-color: #000000;
      color: var(--shady-white-color);
      opacity: 0.9;
      height: 400px;
      margin-top: 50px;
    }
    .center-div {
      position: relative;
      width: 269px;
      height: 235px;
      top: 114px;
      left: 500px;
    }
    .center-div h3 {
      font-family: var(--primary-font);
      font-size: 1.4rem;
    }
    .center-div p {
      position: absolute;
      font-family: var(--primary-font);
      font-size: 1.1rem;
      top: 90px;
    }
    #f-title {
      position: absolute;
      background: transparent;
      font-size: 2.5rem;
      font-family: var(--primary-font);
      color: #1cd6ce;
      top: 100px;
      left: 119px;
    }
    .s-loc {
      position: absolute;
      top: 202px;
      left: 133px;
    }
    .s-phone {
      position: absolute;
      top: 265px;
      left: 134px;
    }
    .s-mail {
      position: absolute;
      top: 323px;
      left: 132px;
    }
    .loc {
      font-family: var(--primary-font);
      position: absolute;
      top: 209px;
      left: 194px;
    }
    .phone {
      font-family: var(--primary-font);
      position: absolute;
      top: 265px;
      left: 194px;
    }
    .mail {
      font-family: var(--primary-font);
      position: absolute;
      top: 324px;
      left: 194px;
    }

    #copyright {
      font-family: var(--primary-font);
      opacity: 0.9;
      text-align: center;
      background-color: black;
      color: var(--shady-white-color);
    }
  `;
  return (
    <>
      {/* //? Footer */}
      <Wrapper>
        <main>
          <div id="copyright">
            Copyright &copy; Freelancer Project, SmartInternz! All rights reserved!
          </div>
        </main>
      </Wrapper>
    </>
  );
};

export default Footer;
