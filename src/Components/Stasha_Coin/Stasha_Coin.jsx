import React from "react";
import "./Stasha_Coin.css";
import fans from "../Assets/grp.png";

function Stasha_Coin() {
  return (
    <div className="stasg_coin_bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h5 className="stash_hh5 text-start">Stasha Coin $STC</h5>
            <p className="coin_pahr">
              Stasha Coin is a revolutionary digital currency built on the
              robust <br />
              foundations of Binance Smartchain.
            </p>

            <div className="d-md-flex d-none two_boxess gap-4">
              <div className="boxxxxxxxs">
                <div>
                  <p className="current mt-0">Current Sale Price</p>
                  <h5 className="dollar">$0.050</h5>
                </div>
              </div>
              <div className="boxxxxxxxs">
                <div>
                  <p className="current mt-0">Token Listing Price</p>
                  <h5 className="dollar"> $0.40 </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 text-center col-12">
            <img className="respo_sixe" src={fans} alt="" />

            <div className="d-md-none d-flex two_boxess gap-4">
              <div className="boxxxxxxxs">
                <div>
                  <p className="current mt-0">Current Sale Price</p>
                  <h5 className="dollar">$0.050</h5>
                </div>
              </div>
              <div className="boxxxxxxxs">
                <div>
                  <p className="current mt-0">Token Listing Price</p>
                  <h5 className="dollar"> $0.40 </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stasha_Coin;
