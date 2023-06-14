import React from "react";
import "./Footer_main.css";
import footer_logo from "../Assets/footer_logo.png";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";

export default function Footer_main() {
  return (
    <div className="main_footer_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-start">
            <div className="d-flex gap-3 align-items-center">
              <img src={footer_logo} alt="" />
              <h4 className="footer_heading">Stasha</h4>
            </div>

            {/* // soical icons button  */}
            <div className="d-flex mt-5 gap-4">
              <div className="social_icons_main">
                <FaTelegramPlane className="icon_size"></FaTelegramPlane>
              </div>
              <div className="social_icons_main">
                <AiOutlineTwitter className="icon_size"></AiOutlineTwitter>
              </div>
              <div className="social_icons_main">
                <FaFacebookF className="icon_size"></FaFacebookF>
              </div>
              <div className="social_icons_main">
                <AiFillInstagram className="icon_size"></AiFillInstagram>
              </div>
            </div>
          </div>

          <div className="col-md-2 mt-3 mt-md-0 text-start">
            <h5 className="footer_links_header">Products</h5>
            <a href="#" className="deco"><p className="main_footer_links">Stasha Smartchain</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Stasha Exchanges</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Stasha Block Explorer</p></a>
            <a className="main_footer_links" href="#wallet">Stasha Wallet</a>
            <a href="#" className="deco"><p className="main_footer_links">Alterverse</p></a>
            <a href="#" className="deco"><p className="main_footer_links">NFT Marketplace</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Stasha Coin</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Staking Platform</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Multi-sig Wallet</p></a>
          </div>
          <div className="col-md-2 mt-3 mt-md-0 text-start">
            <h5 className="footer_links_header">Quick Links</h5>
            <a href="#" className="deco" ><p className="main_footer_links">About Us</p></a>
            <a className="main_footer_links" href="#Partner" >Partners</a>
            <a href="#" className="deco" ><p className="main_footer_links">Blogs</p></a>
            <a href="#" className="deco" ><p className="main_footer_links">Resources</p></a>
            <a className="main_footer_links" href="#faq">FAQs</a>
            <a href="#" className="deco" ><p className="main_footer_links" href="#">Career</p></a>
          </div>
          <div className="col-md-2 mt-3 mt-md-0 text-start">
            <h5 className="footer_links_header">Dev</h5>
            <a href="#" className="deco"><p className="main_footer_links">Documentation</p></a>
            <a href="#" className="deco"><p className="main_footer_links">Whitepaper</p></a>
          </div>
          <div className="col-md-2 mt-3 mt-md-0 text-start">
            <div className="text-start ms-0 ms-md-3">
              <h5 className="footer_links_header">Support</h5>
              <a href="#" className="deco"> <p className="main_footer_links">Terms of Use</p></a>
              <a href="#" className="deco"> <p className="main_footer_links">Privacy Policy</p></a>
              <a href="#" className="deco"> <p className="main_footer_links">Contact Us</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
