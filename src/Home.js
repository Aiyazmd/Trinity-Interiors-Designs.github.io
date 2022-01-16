import React from 'react'
import './Home.css'
function Home() {
    return (
        <>
        <div className="container">
            <img src="./assets/HomeWall9.jpg" alt="" className="Homeimg1" />
            <div className="HomePart1">
            <div className="Wallcol">
              <h1 className="HomeHeading">Trinity Interiors & Drafting.</h1>
              <br />
              <button className="button" >
                GET IN TOUCH
              </button>
              </div> 

             
        </div>
        <div className="homeAbout">
                <div> <img src="./assets/Homeleft.jpg" alt="" className="Homeimg2" /></div>
                <div className="HomeAbout">
                <p className="AboutP1">About the Company</p>
              <p className="AboutP2">
                The Best Interior
                <br />
                Designers for a new project.
              </p>
              <p className="AboutP3">
                “The basic philosophy of our designers is to create individual,
                aesthetically stunning solutions for our customers by
                lightning-fast development of projects employing unique styles
                and architecture. Even if you don’t have a ready sketch of what
                you want – we will help you to get the result you dreamed of.”
              </p>
              <button className="button1" >
                About
              </button>
              <div >
                    <img src="./assets/Homeimg3.jpg" alt="" className="Homeimg3" />
                </div>
                </div>
              </div>
        </div>
        <div className="OurService">
              <div className="OurServiceP1">BEST FEATURES</div>
                <div className="OurServiceP2">Our Services</div>
                <div className="service">
                    <div>
                         <p className="serviceP1">01</p>
              <p className="serviceP2">Furniture Design</p>
              <p className="serviceP3">
              Working together with your architect, you will share your project needs, dreams and goals.
              </p>
              <input
                type="button"
                value="Know More"
                // onClick={() => navigate("/contact")}
                className="serviceP4"
              />
              </div>
                    <div>
                    <p className="serviceP1">02</p>
              <p className="serviceP2">Kitchen</p>
              <p className="serviceP3">
              You may engage your architect to provide an interior design service, advising on loose furniture.
              </p>
              <input
                type="button"
                value="Know More"
                // onClick={() => navigate("/contact")}
                className="serviceP4"
              />
                    </div>
                    <div>
                    <p className="serviceP1">03</p>
              <p className="serviceP2">Wardrobe</p>
              <p className="serviceP3">
              Our master plans provide a comprehensive look at where an organization is today.
              </p>
              <input
                type="button"
                value="Know More"
                // onClick={() => navigate("/contact")}
                className="serviceP4"
              />
                    </div>
                    <div>
                    <p className="serviceP1">04</p>
              <p className="serviceP2">Livingrooms Interior</p>
              <p className="serviceP3">
              When the design concepts have been decided, the architect prepares working drawings and specifications.
              </p>
              <input
                type="button"
                value="Know More"
                // onClick={() => navigate("/contact")}
                className="serviceP4"
              />
                    </div>
                </div>
        </div>

        <div className="processPart">
          <div className="processHome">Journey to Your Dream Home... </div>
          <div className="processPart2" >
              <div className="processDiv">
              <p className="process1">Consultation</p>
            <img src="./assets/consultation.png" className="consultation" />
            <p className="process2">
              Our Designers will help you <br />
              with the Best Interior design.
            </p>
            <button
              className="processbutton"
            //   onClick={() => navigate("/contact")}
            >
              GET IN TOUCH
            </button>
              </div>
              <div className="processDiv">
              <p className="process1">quotation </p>
            <img src="./assets/pricing.png" className="consultation" />
            <p className="process2">Get Instant Quotation</p>
            <br />
            <button
              className="processbutton"
            //   onClick={() => navigate("/contact")}
            >
              GET IN TOUCH
            </button>
              </div>
              <div className="processDiv">
              <p className="process1">Customization</p>
            <img src="./assets/custom.png" className="consultation" />
        
            <p className="process3">
              We work hard to create your <br />
              personalized design
            </p>
            <button
              className="processbutton"
            //   onClick={() => navigate("/contact")}
            >
              GET IN TOUCH
            </button>
              </div>
              <div className="processDiv">
              <p className="process1">Handover</p>
            <img src="./assets/houseHandOver.png" className="consultation" />
            <p className="process2">
              Get your dream home <br />
              in 30 Days
            </p>
            <button
              className="processbutton"
            //   onClick={() => navigate("/contact")}
            >
              GET IN TOUCH
            </button>
              </div>
          </div>
        </div>


        </>
    )
}

export default Home
