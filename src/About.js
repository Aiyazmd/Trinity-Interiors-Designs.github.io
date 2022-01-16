import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
// import "../Styles/About.css";
function About() {
  const navigate = useNavigate();
  return (
    <>
      <img src="./assets/HomeWall5.jpg" alt="" className="AboutMainPic" />
      <div className="AboutWallcol">
        <h1 className="AboutHomeHeading">Trinity Interiors & Drafting.</h1>
        <br />
        <button className="Aboutbutton" onClick={() => navigate("/contact")}>
          GET IN TOUCH
        </button>
      </div>
      <p className="aboutContact">+91 7097866238 +91 7013044462</p>
      <div className="AboutSocial">
        <a href="https://www.instagram.com/trinity_interiors_/">
          <i className="fab fa-instagram"  style={{ color: "#b19777" }}></i>
        </a>{" "}
        <a href="https://www.facebook.com/profile.php?id=100075055125160">
          <i className="fab fa-facebook"  style={{ color: "#b19777" }}></i>
        </a>{" "}
        <a href="#">
          <i className="fab fa-twitter"  style={{ color: "#b19777" }}></i>
        </a>
      </div>
      <p className="AboutHeading">About Trinity designes</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src="./assets/About2.jpg" alt="" className="Aboutleft" />
          </div>
          <div className="col-lg-6">
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
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <p className="AboutAp6">Our Brands...</p>
          </div>
          <div className="col-lg-5">
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
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
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
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6">
                <div className="image2">
                  <div className="image__text">
                    <p>Furniture Design</p>
                  </div>
                  <div className="Social">
                    <a href="https://www.instagram.com/trinity_interiors_/">
                      <i
                        className="fab fa-instagram"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="https://www.facebook.com/profile.php?id=100075055125160">
                      <i
                        className="fab fa-facebook"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="#">
                      <i
                        className="fab fa-twitter"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                  <img
                    src="./assets/Furniture5.jpg"
                    alt=""
                    className="images__src"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image2">
                  <div className="image__text">
                    <p>Kitchens</p>
                  </div>
                  <div className="Social">
                    <a href="https://www.instagram.com/trinity_interiors_/">
                      <i
                        className="fab fa-instagram"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="https://www.facebook.com/profile.php?id=100075055125160">
                      <i
                        className="fab fa-facebook"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="#">
                      <i
                        className="fab fa-twitter"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                  <img
                    src="./assets/Kitchen2.jpg"
                    alt=""
                    className="images__src"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image2">
                  <div className="image__text">
                    <p>Wardrobe</p>
                  </div>
                  <div className="Social">
                    <a href="https://www.instagram.com/trinity_interiors_/">
                      <i
                        className="fab fa-instagram"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="https://www.facebook.com/profile.php?id=100075055125160">
                      <i
                        className="fab fa-facebook"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="#">
                      <i
                        className="fab fa-twitter"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                  <img
                    src="./assets/Wardrobe5.jpg"
                    alt=""
                    className="images__src"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image2">
                  <div className="image__text">
                    <p>Livingrooms Interior</p>
                  </div>
                  <div className="Social">
                    <a href="https://www.instagram.com/trinity_interiors_/">
                      <i
                        className="fab fa-instagram"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="https://www.facebook.com/profile.php?id=100075055125160">
                      <i
                        className="fab fa-facebook"
                        style={{ color: "white" }}
                      ></i>
                    </a>{" "}
                    <a href="#">
                      <i
                        className="fab fa-twitter"
                        style={{ color: "white" }}
                      ></i>
                    </a>
                  </div>
                  <img
                    src="./assets/Livingrooms5.jpg"
                    alt=""
                    className="images__src"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default About;