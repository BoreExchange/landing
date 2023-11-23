import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">About the Bore Ecosystem</h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/bore.gif" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Trade and Transact
                  </span>
                  <h2 className="title">
                   Empower Your Finances <br /> with Bore Money
                  </h2>
                </div>
                <p>
                  Multiple Currencies, One Platform. Manage all your fiat and crypto assets seamlessly across borders
                </p>
                <div className="about__facts-list">
                  <div className="about__fact-item">
                    <h3 className="count">200+ </h3>
                    <p>
                      Currencies Supported
                    </p>
                  </div>
                  <div className="about__fact-item">
                    <h3 className="count">3x</h3>
                    <p>Faster Transactions Across Crypto & Fiat Currencies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <img src="/assets/img/others/features-0xx.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Trade and Manage
                  </span>
                  <h2 className="title">Multiple Currencies, One Platform</h2>
                </div>
                <p>
                  We make it easy to Trade, Send, and Manage all your fiat and cryptocurrencies at one place. Whether you're new to crypto or an experienced trader, find the right opportunities to grow your investments within the Bore ecosystem.
                </p>
                <div className="about__facts-list">
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-02"></i>
                    </div>
                    <p>Exchange Rates Updated Every 5 Seconds.</p>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-window"></i>
                    </div>
                    <p>Competitive Rates & Transparent Fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea
