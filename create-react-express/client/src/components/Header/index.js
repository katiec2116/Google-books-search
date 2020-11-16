import React from "react"
function Header() {
    return (
        <div>
            <div className="hero mb-6 py-6" >
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title" style={{fontSize:"13rem", letterSpacing:"15px"}}>
                        <span style={{color:"#4384F3"}}>G</span> 
                        <span style={{color:"#EA4435"}}>o</span> 
                        <span style={{color:"#FBBC04"}}>o</span> 
                        <span style={{color:"#4384F3"}}>g</span> 
                        <span style={{color:"#33A952"}}>l</span> 
                        <span style={{color:"#EA4435"}}>e</span></h1>
                        <h1 className="title"> Books Search</h1>
                            <h2 className="subtitle">Search for and save books of interest</h2>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header