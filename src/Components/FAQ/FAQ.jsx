import React from "react";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";

export default function FAQ() {
  return (
    <div className="faq_main_bg" id="faq">
      <div className="container">
        <div className="upper_clr"></div>
        <div className="row">
          <div className="col-md-5">
            <h1 className="faq_main_heaing">
              Frequently Asked <br />
              Questions
            </h1>
            <p className="faq_pr">Find out all the basics about Stasha.</p>
            <div className="qu  text-start">
              <p className="questios">Do you have questions? </p>
              <button className="questionn_btn">Ask Us</button>
            </div>
          </div>
          <div className="col-md-7">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="acc_heading">
                  What is Stasha Blockchain Ecosystem?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="conternt_faq d-flex">
                    <p className="faq_para">
                      Stasha is a leading blockchain infrastructure and
                      solutions providing ecosystem. Stasha is an ecosystem of
                      blockchain-intrinsic products and services with the sole
                      aim of permeating all areas of the globe with its
                      influence in the blockchain ecosystem. <br />
                      Stasha aims to be at the fore-front of mass crypto
                      adoption in Africa and ultimately the globe by leasing out
                      to the crypto market various products that would appeal to
                      the average crypto enthusiast.
                      <span>
                        <details className="d-flex">
                          <summary className="read_more">Read more</summary>
                          <p>
                            Stasha is a leading blockchain infrastructure and
                            solutions providing ecosystem. Stasha is an
                            ecosystem of blockchain-intrinsic products and
                            services with the sole aim of permeating all areas
                            of the globe with its influence in the blockchain
                            ecosystem.
                          </p>
                        </details>
                      </span>
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="acc_heading">
                  Is Stasha Blockchain EVM compatible?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="conternt_faq d-flex">
                    <p className="faq_para">
                      Stasha is a leading blockchain infrastructure and
                      solutions providing ecosystem. Stasha is an ecosystem of
                      blockchain-intrinsic products and services with the sole
                      aim of permeating all areas of the globe with its
                      influence in the blockchain ecosystem. <br />
                      Stasha aims to be at the fore-front of mass crypto
                      adoption in Africa and ultimately the globe by leasing out
                      to the crypto market various products that would appeal to
                      the average crypto enthusiast.
                      <span>
                        <details className="d-flex">
                          <summary className="read_more">Read more</summary>
                          <p>
                            Stasha is a leading blockchain infrastructure and
                            solutions providing ecosystem. Stasha is an
                            ecosystem of blockchain-intrinsic products and
                            services with the sole aim of permeating all areas
                            of the globe with its influence in the blockchain
                            ecosystem.
                          </p>
                        </details>
                      </span>
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className="acc_heading">
                  Is Stasha lincensed?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="conternt_faq d-flex">
                    <p className="faq_para">
                      Stasha is a leading blockchain infrastructure and
                      solutions providing ecosystem. Stasha is an ecosystem of
                      blockchain-intrinsic products and services with the sole
                      aim of permeating all areas of the globe with its
                      influence in the blockchain ecosystem. <br />
                      Stasha aims to be at the fore-front of mass crypto
                      adoption in Africa and ultimately the globe by leasing out
                      to the crypto market various products that would appeal to
                      the average crypto enthusiast.
                      <span>
                        <details className="d-flex">
                          <summary className="read_more">Read more</summary>
                          <p>
                            Stasha is a leading blockchain infrastructure and
                            solutions providing ecosystem. Stasha is an
                            ecosystem of blockchain-intrinsic products and
                            services with the sole aim of permeating all areas
                            of the globe with its influence in the blockchain
                            ecosystem.
                          </p>
                        </details>
                      </span>
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className="acc_heading">
                  Has Stasha been Audited?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="conternt_faq d-flex">
                    <p className="faq_para">
                      Stasha is a leading blockchain infrastructure and
                      solutions providing ecosystem. Stasha is an ecosystem of
                      blockchain-intrinsic products and services with the sole
                      aim of permeating all areas of the globe with its
                      influence in the blockchain ecosystem. <br />
                      Stasha aims to be at the fore-front of mass crypto
                      adoption in Africa and ultimately the globe by leasing out
                      to the crypto market various products that would appeal to
                      the average crypto enthusiast.
                      <span>
                        <details className="d-flex">
                          <summary className="read_more">Read more</summary>
                          <p>
                            Stasha is a leading blockchain infrastructure and
                            solutions providing ecosystem. Stasha is an
                            ecosystem of blockchain-intrinsic products and
                            services with the sole aim of permeating all areas
                            of the globe with its influence in the blockchain
                            ecosystem.
                          </p>
                        </details>
                      </span>
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="lower_clr"></div>
        </div>
      </div>
    </div>
  );
}
