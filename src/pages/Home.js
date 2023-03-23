import React from "react";
import "../components/Home.css";

const Home = () => {
  return (
    <>
      <section className="download-section">
        <div className="download">
          <h2>
            <span>Digital</span> Finance <span>That</span> Fits Your Life
          </h2>
          <p>
            An intuitive digital wallet with account opening, money transfer and
            bill payments in one. Earn as you spend.
          </p>
          <div className="link-container">
            <a
              href="https://play.google.com/store/apps/details?id=com.transsnet.palmpay&hl=en&gl=US"
              target="_blank"
            >
              <img
                className="link-img"
                src="https://www.palmpay.com/_next/static/media/googlePlayBlack.d41454d7.png?w=256&q=100"
              />
            </a>
            <a
              href="https://apps.apple.com/ng/app/id1479656820?mt=8"
              target="_blank"
            >
              <img
                className="link-img"
                src="https://www.palmpay.com/_next/static/media/appStoreBlack.7e1b6fd2.png?w=256&q=100"
              />
            </a>
          </div>
        </div>

        <div>
          <img
            className="phone-img"
            src="https://www.palmpay.com/_next/static/media/card1top.90567c0b.png?w=828&q=100"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
