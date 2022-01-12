import React from "react";
import "./cara.css";
import Navbar from "./Navbar";
import video2 from "./videos/video2.webm";
import video3 from "./videos/video3.mp4";


const Carasoule=()=>{
    return(
        <>
		   
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner">
			    <div className="carousel-item active">
			    	
                    <div className="info">
                         <video autoPlay loop muted>
                             <source src={video3}/>
                         </video>
			      		<h1>Connecting Your World</h1>
			      		
			      	</div>
			    </div>
			    <div className="carousel-item">
			    	<div className="info">
                    <video autoPlay loop muted>
                             <source src={video2}/>
                         </video>
			      		<h1>Creating Best Software</h1>
			      		
			      	</div>
			    </div>
			    <div className="carousel-item">
                <div className="info">
                <video autoPlay loop muted>
                             <source src={video3}/>
                </video>
			    <h1>Shaping your Imagination</h1>
			      		
			    </div>
			    </div>
			  </div>
			  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span className="carousel-control-next-icon" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>
			

        </>
    )
}
export default Carasoule;