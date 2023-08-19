import React from "react";
import SingleFaq from "./single-faq";

// faq items
const faq_items = [
  {
    id: "One",
    title: "What is Bore Money, and what services does it offer?",
    show: true,
    desc: "Bore Money is a comprehensive financial ecosystem offering remittance, fiat and crypto exchange services. With Bore Money, users can send and receive money, trade cryptocurrencies, and cash out. The ecosystem includes Bore Exchange for crypto and fiat trading, Bore Money app for seamless money transfers, and OBB Token, which enables users to cash out their tokens for real gold custodied in Africa.",
    
    parent: "accordionFaq",
  },
  {
    id: "Two",
    title: "How can I start trading on Bore Exchange?",
    desc: "Getting started on Bore Exchange is easy. Simply create an account on our platform, complete the required KYC process, and deposit your preferred fiat or cryptocurrency. From there, you can begin trading between various crypto and fiat pairs in a secure and user-friendly environment.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: "How do I use the Bore Money app to send and receive money?",
    desc: "You can download the Bore Money app from the Apple Store or Google Play. Once installed, register for an account and link your preferred payment method. You can then easily send money to other Bore Money users or receive funds from them, all within the app's intuitive interface.",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: "What is the OBB Token, and how can I use it to cash out for real gold?",
    desc: "OBB Token is the governance cryptocurrency of the Bore ecosystem. It offers unique value by allowing users to cash out their tokens for real gold custodied in Africa. To do so, users must follow the specific process outlined on our platform, which includes verifying identity and complying with applicable regulations.",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: "Is Bore Money secure, and how does it protect my assets?",
    desc: "Bore Money employs top-tier security protocols to safeguard user assets and personal information. We use industry-standard encryption, multi-factor authentication, and continuous monitoring to ensure the integrity and confidentiality of our platform.",
    parent: "accordionFaq",
  },
  {
    id: "Six",
    title: "How can I get support or assistance with Bore Money's products and services?",
    desc: "For support or assistance with Bore Money's products and services, please reach out to our dedicated customer support team through the contact options available on our website or app. We're committed to providing timely and professional support to all our users.",
    parent: "accordionFaq",
  },
]

const FaqArea = ({spacing,style_2=false}) => {
  return (
    <section className={`faq-area ${style_2?"faq-style-two":""} ${spacing?spacing:"section-py-80"}`}>
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {faq_items.map((item) => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
