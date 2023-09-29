import { useState } from 'react'
import '../Rewards.css'

function Slider(){
    const arr = ["Invest with very low fees","Invest my business’ cash",
    "Invest in mutual funds easily", "Automate and build my savings",
    "Diversified long-term investing",
    "Get better returns on my money"
    ]
   
 
    return(
        <>
            <div className="quotes">
                <div className='why' >You name it, We've figured it.</div>
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {arr.map((value)=>{
                            return(
                            <div className="quote-item">
                            <h4>"</h4>
                            <h4>{value}</h4>
                        </div>)
                        })  }
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Slider;