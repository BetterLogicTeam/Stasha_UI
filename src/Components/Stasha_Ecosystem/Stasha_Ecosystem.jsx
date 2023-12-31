import React from "react";
import "./Stasha_Ecosystem.css";
import smartEco_1 from "../Assets/eco_1.svg";
import smartEco_2 from "../Assets/eco_2.svg";
import smartEco_3 from "../Assets/eco_3.svg";
import smartEco_4 from "../Assets/eco_4.svg";
import smartEco_5 from "../Assets/eco_5.svg";
import smartEco_6 from "../Assets/eco_6.svg";
import smartEco_7 from "../Assets/eco_7.svg";
import smartEco_8 from "../Assets/eco_8.svg";
import { BsArrowRight } from "react-icons/bs";
import { BsGooglePlay } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { AiFillChrome } from "react-icons/ai";
import Accordion from "react-bootstrap/Accordion";
import mba from "../Assets/mba.png";

function Stasha_Ecosystem() {
  return (
    <div className="EcoBg">
      <div className="container pb-2 pb-md-5">
        <div className="eco_headings text-center">
          <h1 className="eco_Maintitle">Stasha Ecosystem</h1>
          <p className="eco_Mainsubtitle">
            Start to explore a wide variety of Decentralized applications
            brought to you by Stasha.
          </p>
        </div>
        <div className="ecocrdBack"></div>
        <div className="ecocrdBack2"></div>
        <div className="row bxsUpper d-none d-md-flex">
          <div className="col-lg-3 col-md-6 Smartchain_bxUpper ">
            <div className="Smartchain_bx">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_1}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Stasha Smartchain </h3>
              </div>
              <p className="smartDetail">
                Stasha Smartchain is a new generation high-performant blockchain
                based on a unique consensus algorithm (S-DPoS).
              </p>
              <h5 className="exploreAll mb-0">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper orecoup">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_2}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Stasha Exchanges</h3>
              </div>
              <p className="smartDetail">
                This is a flexible ecosystem which gives users access to all
                crypto products and services in a single platform.
              </p>
              <h5 className="exploreAll mb-0">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper">
            <div className="Smartchain_bx">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_3}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />



                
                <h3 className="titleMainTxt mb-0">Stasha Block Explorer</h3>
              </div>
              <p className="smartDetail">
                This is a flexible ecosystem which gives users access to all
                crypto products and services in a single platform.
              </p>
              <h5 className="exploreAll mb-0">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_4}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Stasha Wallet</h3>
              </div>
              <p className="smartDetail pe-2">
                Experience the freedom of managing your digital assets and
                explore a world of decentralized finance.
              </p>
              <div className="socilaIcon mb-0">
                <BsGooglePlay className="Walleicn me-3" />
                <BsApple className="Walleicn me-3" />
                <AiFillChrome className="Walleicn" />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 d-none d-md-flex ">
          <div className="col-lg-3 col-md-6 ecobxmnUpper underrw">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_5}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Alterverse </h3>
              </div>
              <p className="smartDetail">
                Alterverse is Stasha's art infrastructure which aims at bridging
                NFT and making it more user-centric.
              </p>
              <h5 className="exploreAll mb-0">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper underrw">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_6}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">NFT Marketplace</h3>
              </div>
              <p className="smartDetail midscrdtl">
                Immerse yourself in the world of Stasha NFT Marketplace and join
                the revolution of digital ownership.
              </p>
              <h5 className="exploreAll mb-0 midSCr">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper underrw">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_7}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Staking Platform</h3>
              </div>
              <p className="smartDetail pt-1">
                Join the Stasha Staking Platform and maximize the value of your
                holdings.
              </p>
              <h5 className="exploreAll mb-0" style={{ marginTop: "42px" }}>
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 ecobxmnUpper underrw">
            <div className="Smartchain_bx ">
              <div className="title_smartchain d-flex align-items-center gap-2">
                <img
                  src={smartEco_8}
                  alt="#"
                  className="smartIcon"
                  style={{ width: "10%" }}
                />
                <h3 className="titleMainTxt mb-0">Multi-sig Wallet</h3>
              </div>
              <p className="smartDetail">
                Suited for companies that have embraced decentralization and
                need to own asset vaults managed by various signatories.
              </p>
              <h5 className="exploreAll mb-0">
                Explore{" "}
                <span className="ms-1">
                  <BsArrowRight
                    className="explorArrow"
                    style={{ fontSize: "15px" }}
                  />
                </span>
              </h5>
            </div>
          </div>
        </div>

        <div className="mobli d-block mt-2 d-md-none">
          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_1}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Stasha Smartchain</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_2}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Stasha Exchanges</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_3}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Stasha Block Explorer</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-4">
              <img
                src={smartEco_4}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Stasha Wallet</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-4">
              <img
                src={smartEco_5}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Alterverse</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_6}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">NFT Marketplace</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_7}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Staking Platform</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          <div className="mbl_view mt-4 d-flex justify-content-between">
            <div className="title_smartchain d-flex align-items-center gap-3">
              <img
                src={smartEco_8}
                alt="#"
                className="smartIcon"
                style={{ width: "10%" }}
              />
              <h3 className="titleMainTxt mb-0">Multi-sig Wallet</h3>
            </div>
            <div>
              <img src={mba} alt="" />
            </div>
          </div>

          {/* accoedion part of the ecosystem in which according open when we click on it  */}

          {/* <div className="mbl_view d-flex justify-content-between">
        <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_1}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className=" mb-0">Stasha Smartchain</h3>
                </div>
              <div>
                <img src={mba} alt="" />
              </div>

        </div> */}
          {/* <Accordion defaultActiveKey="10">
            <Accordion.Item eventKey="10">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_1}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className=" mb-0">Stasha Smartchain</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Stasha Smartchain is a new generation high-performant
                    blockchain based on a unique consensus algorithm (S-DPoS).
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="11">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_2}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Stasha Exchanges</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    This is a flexible ecosystem which gives users access to all
                    crypto products and services in a single platform.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="12">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_3}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Stasha Block Explorer</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    This is a flexible ecosystem which gives users access to all
                    crypto products and services in a single platform.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="13">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_4}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Stasha Wallet</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Experience the freedom of managing your digital assets and
                    explore a world of decentralized finance.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="14">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_5}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Alterverse</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Alterverse is Stasha's art infrastructure which aims at
                    bridging NFT and making it more user-centric.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="15">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_6}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">NFT Marketplace</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Immerse yourself in the world of Stasha NFT Marketplace and
                    join the revolution of digital ownership.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="16">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_7}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Staking Platform</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Join the Stasha Staking Platform and maximize the value of
                    your holdings.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="17">
              <Accordion.Header className="acc_heading">
                <div className="title_smartchain d-flex align-items-center gap-2">
                  <img
                    src={smartEco_8}
                    alt="#"
                    className="smartIcon"
                    style={{ width: "10%" }}
                  />
                  <h3 className="titleMainTxt mb-0">Multi-sig Wallet</h3>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="conternt_faq d-flex">
                  <p className="faq_para">
                    Suited for companies that have embraced decentralization and
                    need to own asset vaults managed by various signatories.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion> */}
        </div>
      </div>
    </div>
  );
}

export default Stasha_Ecosystem;
