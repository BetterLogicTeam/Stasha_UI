import React from 'react'
import "./Newsletter.css"

export default function Newsletter() {
  return (
    <div className='newsletter_main_bg'>
    <div className="container">
        <div className="row justify-content-center">
        
                <h1 className='newsletter_heading'>Subscribe to our Newsletter</h1>
                <p className='news_par'>Stay up to date for the latest crypto news, courses & more!</p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-2">
                    <input type="text" placeholder='Enter Your Email' className='news_input' name="" id="" />
               <button className='subs_butn'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    
   
  )
}
