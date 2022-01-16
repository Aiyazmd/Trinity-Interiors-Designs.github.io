import React from 'react'
import "../Styles/Contact.css";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";

function Contacts() {
  const onInputChange = (e) => {

  }
  const handleSubmit=(e)=>{

  }
  return (
    <>
       <img src="./assets/contact1.jpg" alt="" className="ContactMainPic" />
          {/* --------------------------------------------------------------------------------- */}
       <div className="contactPart1">
       <div className="conatctWallcol">
        <h1 className="ContactHomeHeading">Trinity Interiors & Drafting.</h1>
        <br />
        <button className="Contactbutton">GET IN TOUCH</button>
      </div>
      <div className="Contact"> 7097866238; 7013044462</div>
      <div className="contactSocial">
        <a href="https://www.instagram.com/trinity_interiors_/">
          <i className="fab fa-instagram" style={{ color: "#b19777" }} ></i>
        </a>{" "}
        <a href="https://www.facebook.com/profile.php?id=100075055125160">
          <i className="fab fa-facebook"  style={{ color: "#b19777" }}></i>
        </a>{" "}
        <a href="#">
          <i className="fab fa-twitter" style={{ color: "#b19777" }} ></i>
        </a>
      </div>
       </div>
          {/* --------------------------------------------------------------------------------- */}
          <div className="container">
          <div className="contactPart2">
            <div className="contactForm"> 
             <p className="Contactleftheading ">GET IN TOUCH</p>
              <MDBValidation
                className="row-g-3"
                // style={{ marginTop: "100px" }}
                noValidate
                onClick={handleSubmit}
              >
                {/* <p className=" contactUs  ">
                  Contact Us
                </p> */}
                <div
                  style={{
                    margin: "auto",
                    maxWidth: "400px",
                    alignContent: "center",
                  }}
                >
                  <MDBInput
                    type="text"
                    // value={name }
                    name="name"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Please enter name"
                    invalid
                   
                  />
                  <br />
                  <MDBInput
                    type="text"
                    // value={email }
                    name="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Please enter Email"
                    invalid
                   
                  />
                  <br />
                  <MDBInput
                    type="text"
                    // value={mobile}
                    name="mobile"
                    onChange={onInputChange}
                    required
                    label="Contact"
                    validation="Please enter Contact"
                    invalid
                   
                  />
                  <br />
                  <MDBInput
                    type="text"
                    // value={message }
                    name="message"
                    onChange={onInputChange}
                    required
                    label="Message"
                    validation="Please enter Message"
                    invalid
                     
                  />
                  <br />

                  <div className="clo-12">
                    <MDBBtn
                      style={{
                        
                        color: "#B19777",
                        backgroundColor: "black",
                      }}
                      className="Contactsubmit"
                      type="submit"
                    >
                      SEND MESSAGE
                    </MDBBtn>
                  </div>
                </div>
             
              </MDBValidation>
              </div>
            <div>
            <img src="./assets/contact2.jpg" alt="" className="contact3" />
            </div>
          </div>
          <div className="contactDetails">
              <p className="Contactparaheading">[ OUR CONTACT DETAILS ]</p>
              <h1 className="Contactheading">Let's Start a Project</h1>
              <p className="Contactparaheading1">
                Give us a call or drop by anytime, we endeavour to <br />
                answer all enquiries within 24 hours on business days.
                <br /> We will be happy to answer your questions.
              </p>
              <p className="Contactparaheading2">
                OUR ADDRESS:
                <br />
                H:No:-2-304,Old HafeezPet,Youth Colony,Miyapur,
                <br /> Hyderabad, Pin-Code:500049.
              </p>
              <p className="Contactparaheading2">
                OUR MAILBOX:
                <br />
                TrinityInteriors@gmail.com{" "}
              </p>
              <p className="Contactparaheading2">
                OUR PHONE:
                <br />
                7097866238, 7013044462.
              </p>
            </div>

          </div>
           {/* --------------------------------------------------------------------------------- */}
           
           <div>
      <div className="footerHome">
      
              <div className="footerHHome">
              <p className='title' >Trinity<br/>Interiors & Designes</p>
                <p className="footerHeadHome">
                  We provides a full range of interior design,
                  <br /> architectural design.
                </p>
                </div>
          

            
              <div className="footerCHome">
                <h5 className="footerContactHome">Contacts</h5>
                <p className="footerAddressHome">
                  H:No:-2-304,Old HafeezPet,Youth Colony,Miyapur,<br /> Hyderabad,
                  Pin-Code:500049.
                </p>
                <p className="footerPhoneHome">+91 7097866238</p>
                <p className="footerPhoneHome">+91 7013044462</p>
              </div>
            

           
              <div className="footerPHome">
                <h5 className="footerProjectsHome">Latest Projects</h5>
                <p className="footerProjectHome">Stylish Family Appartment</p>
                <p className="footerProjectHome">Moderan Villas</p>
                <p className="footerProjectHome">Pent Houses</p>
              </div>
           
          </div>
        </div>   
    </>
  )
}

export default Contacts

