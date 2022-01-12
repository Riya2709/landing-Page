import React from "react";
import "./desc.css";
import laptop from "./image/laptop.jpg";
import mobile from "./image/mobile.jpg";
import ai from "./image/ai.jpg";
import database from "./image/database.jpg";
import Navbar from "./Navbar";

const Desc=()=>{
    return(
    <>
        <Navbar/>
        <div className="main">
             <div className="row1">
                 <div>
                     <h2 className="autom">
                     <span>We Are</span>
                     <br></br>AUTOMATION EXPERTS</h2>
                 </div>
                 <div>
                     <p className="dedic">We Are<strong>Dedicated Engineers Minds </strong>Devoted to <strong>Innovation</strong>, <strong>Bringing Sustainable Life</strong> Through Technology Advancement, Helping Startups and Enterprises Build their ideas into MVP with most anticipated technology in AI, IoT, Robotics, <strong>Borgfy</strong> is committed to delivering the finest quality within budget in Timeframe, last but not least We Shapes Visions.</p>
                 </div>
                 <div className="yard">
                     <h1>“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.” —Steve Jobs</h1>
                 </div>
             </div>
             <div className="row2">
                  <div className="rowd">
                      <div className="rowdd">
                          <img src={laptop}></img>
                          <div className="rowddd">
                              <div className="ddd">Software Development</div>
                              <p className="dddp">We Help you build the best ideas and solve a complex problem with technologies in Saas, Mobile Apps & Custom Software solutions.</p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={mobile}></img>
                          <div className="rowddd">
                              <div className="ddd">Hardware Development</div>
                              <p className="dddp">We Understand your vision in creating a better product for a better future in making world moves towards Automation.</p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={ai}></img>
                          <div className="rowddd">
                              <div className="ddd">Artificial Intelligence</div>
                              <p className="dddp">Creating AI for Smooth Functioning and teaching a machine to give the best result towards your complex task where human needs assistance.

                               </p>
                          </div>
                      </div>
                  </div>
                  <div className="rowd">
                  <div className="rowdd">
                          <img src={database}></img>
                          <div className="rowddd">
                              <div className="ddd">Design</div>
                              <p className="dddp">Engineering Takes Shapes when given a perfect sleek Design to your vision.</p>
                          </div>
                      </div>
                  </div>
                  <div className="logo">
                      <div>
                          <img src={laptop}></img>
                      </div>
                  </div>

             </div>
        </div>
    </>
    );
}
export default Desc;