 import React from 'react'
 import '../Styles/About.css';
 import { MDBCarousel,MDBCarouselInner,MDBCarouselItem,MDBCarouselElement,} from "mdb-react-ui-kit";
 function About() {
    
     return (
         <>
         <img src="./assets/HomeWall5.jpg" alt="" className="AboutMainPic" />
<div  className="AboutPart1">
<div className="AboutWallcol">
<h1 className="AboutHomeHeading">Trinity Interiors & Drafting.</h1>
<br />
<button className="Aboutbutton" >
 GET IN TOUCH
</button>
</div>
<p className="aboutContact">7097866238;7013044462</p>
<div className="AboutSocial">
<a href="https://www.instagram.com/trinity_interiors_/">
 <i className="fab fa-instagram"  style={{ color: "black" }}></i>
</a>{" "}
<a href="https://www.facebook.com/profile.php?id=100075055125160">
 <i className="fab fa-facebook"  style={{ color: "black" }}></i>
</a>{" "}
<a href="#">
 <i className="fab fa-twitter"  style={{ color: "black" }}></i>
</a>
</div>
</div>
{/* --------------------------------------------------------------------------------- */}
<div className="container">
<div className="AboutPart2">
  <div>
  <img src="./assets/About2.jpg" alt="" className="Aboutleft" />
  </div>
<div className="AboutData">
<p className="AboutAp1">WE ARE ARCH</p>
<p className="AboutAp2">PROFESSIONAL INTERIOR DESIGNERS</p>
<p className="AboutAp3">
       We make your building more perfect with 8 years of experience
     </p>
     <p className="AboutAp4">
       “Even if you don’t have a ready sketch of what you want – we
       will help you to get the result you dreamed of.”
     </p>
     <p className="AboutAp5">
       {" "}
       Based on collective work and shared knowledge, Trinity Interiors aims to favour dialogue and debate, to transform individual knowledge into increased creative potential.

       Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. All our projects incorporate a unique artistic image and functional solutions.

Client is the soul of the project. Our main goal is to illustrate his/hers values and individuality.
     </p>
     <button
       className="AboutButton"
       // onClick={() => navigate("/contact")}
     >
       Get In Touch
     </button>
</div>

</div>

{/* --------------------------------------------------------------------------------- */}

<div className="AboutPart3">
 <div><p className="AboutAp6">Our Brands...</p></div>
 <div>
 <MDBCarousel className="AboutCarousel" showControls interval={1000}>
     <MDBCarouselInner>
       <MDBCarouselItem className="active">
         <MDBCarouselElement
           src="./assets/haffle.jpg"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
       <MDBCarouselItem>
         <MDBCarouselElement
           src="./assets/godrej.jpg"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
       <MDBCarouselItem>
         <MDBCarouselElement
           src="./assets/hettich.png"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
       <MDBCarouselItem>
         <MDBCarouselElement
           src="./assets/enox.png"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
       <MDBCarouselItem>
         <MDBCarouselElement
           src="./assets/ebco.jpg"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
       <MDBCarouselItem>
         <MDBCarouselElement
           src="./assets/nimmi.jpg"
           alt="..."
           style={{ width: "200px", height: "200px" }}
         />
       </MDBCarouselItem>
     </MDBCarouselInner>
   </MDBCarousel>
 </div>
</div>
{/* --------------------------------------------------------------------------------- */}

<div className="AboutPart4">
  <div>
  <p className="AboutAp7">OUR SERVICES.</p>
   <p className="AboutAp8">
     This including consulting multi disciplinary
     <br/> consulting work with
     design and engineering,<br/> our world  branches giving full support for
     <br/>executing professional work.
     <br />
     <br />
     Trinity Interiors is an interactive platform<br/> that puts you in touch with professional<br/> and friendly interior designers. Redesign<br/> the room of your choice according to your <br/>tastes, your schedule and your budget.
   </p>
  </div>

  <div className="AboutPart5">
    <div >
      <div className="image__text" style={{color: "White"}}>
            <p className="image__text1">Wardrobe</p>
          </div>
          <div className="Social">
            <a href="https://www.instagram.com/trinity_interiors_/">
              <i
                className="fab fa-instagram"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100075055125160">
              <i
                className="fab fa-facebook"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="#">
              <i
                className="fab fa-twitter"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>
          </div>
          <img
            src="./assets/Wardrobe5.jpg"
            alt=""
            className="images__src1"
          />
       
    </div>
    <div >
    <div className="image__text" style={{color: "White"}}>
            <p className="image__text1">Furniture</p>
          </div>
          <div className="Social">
            <a href="https://www.instagram.com/trinity_interiors_/">
              <i
                className="fab fa-instagram"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100075055125160">
              <i
                className="fab fa-facebook"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="#">
              <i
                className="fab fa-twitter"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>
          </div>
          <img
            src="./assets/Furniture1.jpg"
            alt=""
            className="images__src2"
          />
    </div>
    <div >
    <div className="image__text" style={{color: "White"}}>
            <p className="image__text1">Kitchen</p>
          </div>
          <div className="Social">
            <a href="https://www.instagram.com/trinity_interiors_/">
              <i
                className="fab fa-instagram"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100075055125160">
              <i
                className="fab fa-facebook"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="#">
              <i
                className="fab fa-twitter"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>
          </div>
          <img
           src="./assets/Kitchen2.jpg"
            alt=""
            className="images__src3"
          />
    </div>
    <div >
    <div className="image__text" style={{color: "White"}}>
            <p className="image__text1">Livingroom</p>
          </div>
          <div className="Social">
            <a href="https://www.instagram.com/trinity_interiors_/">
              <i
                className="fab fa-instagram"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100075055125160">
              <i
                className="fab fa-facebook"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>{" "}
            <a href="#">
              <i
                className="fab fa-twitter"
                // style={{ color: "white" , position: "relative" ,top:"170px",left:"10%", }}
              ></i>
            </a>
          </div>
          <img
           src="./assets/Livingrooms5.jpg"
            alt=""
            className="images__src4"
          />
    </div>
  </div>

</div>
</div>
{/* ----------------------------------------------------------------- */}
<div>
      <div className="AfooterHome">
      
              <div className="AfooterHHome">
              <p className='Atitle' >Trinity<br/>Interiors & Designes</p>
                <p className="AfooterHeadHome">
                  We provides a full range of interior design,
                  <br /> architectural design.
                </p>
                </div>
          

            
              <div className="AfooterCHome">
                <h5 className="AfooterContactHome">Contacts</h5>
                <p className="AfooterAddressHome">
                  H:No:-2-304,Old HafeezPet,Youth Colony,Miyapur,<br /> Hyderabad,
                  Pin-Code:500049.
                </p>
                <p className="AfooterPhoneHome">+91 7097866238</p>
                <p className="AfooterPhoneHome">+91 7013044462</p>
              </div>
            

           
              <div className="AfooterPHome">
                <h5 className="AfooterProjectsHome">Latest Projects</h5>
                <p className="AfooterProjectHome">Stylish Family Appartment</p>
                <p className="AfooterProjectHome">Moderan Villas</p>
                <p className="AfooterProjectHome">Pent Houses</p>
              </div>
           
          </div>
        </div>
</>
     )
 }
 
 export default About