import React from 'react'
import "./BuildingBlockchai.css"
import {IoIosHelpCircle} from "react-icons/io"

export default function BuildingBlockchai() {
  return (
    <div className='BuildingBlockchai_main_bg'>
    <div className="container">


     {/* first heading and paragraph */}
    <div className="building_block_heading">

        <h1>Building Blockchain Infrastructures</h1>
        <p>At Stasha, we are building a world-class blockchain infrastructure and solution company that is <br className='d-none d-md-block' /> 
        poised to revolutionize the way businesses and individuals use this powerful technology.</p>
  <div className='mt-5 text-center'> 
   <span className='need_help'>Need help?</span>
   <span className='help_icon'><IoIosHelpCircle></IoIosHelpCircle></span>
</div>
   
    </div> 

    {/* start building button  */}
    <div className='text-center'>
   <button className='start_build  mt-4 mt-md-2'>Start Building</button>
   </div>
    </div>
    </div>
  )
}
