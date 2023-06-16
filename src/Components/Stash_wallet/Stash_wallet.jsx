import React from 'react'
import "./Stash_wallet.css"
import iPhone13Pro from "../Assets/iPhone13Pro.png"
import g from "../Assets/g.png"
import apple from "../Assets/apple.png"


export default function Stash_wallet() {
  return (
    <div className='stash_wallet_main' id='wallet'>
    <div className="cluee"></div>
    <div className="clueee"></div>
    <div className="clueeee"></div>
    <div className="container">

    <div className="gdgd"></div>
<div className="stas_wallet_card d-none d-md-flex flex-column flex-md-row justify-content-between">
<div>
    <img src={iPhone13Pro} className='iphone' alt="" />
</div>



<div className='lgrre'>
    <h1 className='wallet_heading'> <span>Stasha </span> DEX Wallet</h1>
    <p className='waleet_ppara'>Join the decentralized revolution and take control of your digital <br /> assets with the Stasha DEX Wallet app today!</p>
<div className="but d-flex flex-column flex-md-row gap-3 justify-content-end">
    <div className="ggog">
    <span className='get_itn'>GET IT ON</span>
    <div>
        <img src={g} alt="" />
        <span className='gg_ply'>Google Play</span>
    </div>

    </div>
    <div className="ggog">
    <span className='get_itn'>Download on the</span>
    <div>
        <img src={apple} alt="" />
        <span className='gg_ply'>App Store</span>
    </div>

    </div>
</div>


</div>
</div>


<div className="mbolie d-block d-md-none bakk">
<h1 className='wallet_heading'> <span>Stasha </span> DEX Wallet</h1>
<p className='waleet_ppara'>Join the decentralized revolution and take control of your digital <br /> assets with the Stasha DEX Wallet app today!</p>
<div className="but d-flex  flex-row gap-3 justify-content-end">
    <div className="ggog">
    <span className='get_itn'>GET IT ON</span>
    <div>
        <img src={g} alt="" />
        <span className='gg_ply'>Google Play</span>
    </div>

    </div>
    <div className="ggog">
    <span className='get_itn'>Download on the</span>
    <div>
        <img src={apple} alt="" />
        <span className='gg_ply'>App Store</span>
    </div>

    </div>
</div>
<div className='d-flex justify-content-center'>
    <img src={iPhone13Pro} className='mbl_i' alt="" />
</div>



</div>
    </div>

</div>
  
  )
}
