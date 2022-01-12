import React from "react";

import crop from "./image/crop.png";
import Video from "./videos/black.mp4";
import Kll from "./videos/video2.webm";


const Landing=()=>{
    return(
    <>
          <div className="container-fuid">
		<div className="row">
			<div className="col-md-12 navbar">
				<a href="index.html" className="logo navbar-brand text-white offset-md-2">Logo</a>
				<ul className="nav">
					<li className="nav-item active"><a href="#" className="nav-link">Home</a></li>
					<li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Portfolio</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
				</ul>
			</div>

			

			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			  <ol class="carousel-indicators">
			    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner">
			    <div class="carousel-item active">
			    	<div class="info">
			      		<h1>SLIDE ONE</h1>
			      		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			      	</div>
			    </div>
			    <div class="carousel-item">
			    	<div class="info">
			      		<h1>SLIDE TWO</h1>
			      		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			      	</div>
			    </div>
			    <div class="carousel-item">
			    	<div class="info">
			      		<h1>SLIDE THREE</h1>
			      		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
			      	</div>
			    </div>
			  </div>
			  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			    <span class="sr-only">Previous</span>
			  </a>
			  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			    <span class="carousel-control-next-icon" aria-hidden="true"></span>
			    <span class="sr-only">Next</span>
			  </a>
			</div>
            <div>
                <p>gghhhjjj</p>
            </div>
		</div>
	</div>
    

       


  </>
    )
}
export default Landing;