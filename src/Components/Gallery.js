import React from 'react'
import '../Styles/Gallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import Footer from './Footer';

function Gallery() {
    return (
        <div>
           <>
         <img src="./assets/HomeWall8.jpg" alt="" className="GalleryMainPic" />
         {/* --------------------------------------------------------------------------------- */}

<div className="container">

        <div className="GalleryPart1">
            <div className="GallWallcol">
            <h1 className="GallHomeHeading">Trinity Interiors & Drafting.</h1>
            <br />
            <button className="Gallbutton">GET IN TOUCH</button>
             </div>

             <div className="galleryContact"> 7097866238; 7013044462</div>
             <div className="gallerySocial">
            <a href="https://www.instagram.com/trinity_interiors_/">
              <i className="fab fa-instagram" style={{ color: "#b19777" }} ></i>
            </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100075055125160">
              <i className="fab fa-facebook" style={{ color: "#b19777" }} ></i>
            </a>{" "}
            <a href="#">
              <i className="fab fa-twitter" style={{ color: "#b19777" }} ></i>
            </a>
          </div>
        </div>
{/* --------------------------------------------------------------------------------- */}
       <div className="GalleryPart2">
           <div className="Galaryh1">Gallery</div>
           <div>
           <h1 className="galleryh1">Modern ideas</h1>
              <h1 className="galleryh2">for home</h1>
              <p className="galleryP1">
                Vestibulum augue tortor, consequat eu diam a, varius pulvinar
                ipsum. Vivamus posuere, mauris eu interdum molestie.
              </p>
           </div>
       </div>
{/* --------------------------------------------------------------------------------- */}
        <div className="GalleryPart3">
            <div className="GalleryPart3_1">
            <p  className="image__text">Furniture Design</p>
                <div className="GalleryP1">
                <div> <img src="./assets/Furniture1.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Furniture2.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Furniture3.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Furniture4.jpg" alt="" className="image__src" /></div>
                {/* <div> <img src="./assets/Furniture5.jpg" alt="" className="image__src" /></div> */}
                </div>
                 <div className="image__text">Kitchen Design</div>
                <div className="GalleryP2">
                <div> <img src="./assets/Kitchen1.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Kitchen2.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Kitchen3.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Kitchen4.jpg" alt="" className="image__src" /></div>
                {/* <div> <img src="./assets/Kitchen5.jpg" alt="" className="image__src" /></div> */}
                </div>
                <div className="image__text">wardrobe Design</div> *
                <div className="GalleryP3">
                <div> <img src="./assets/Wardrobe1.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Wardrobe2.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Wardrobe3.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Wardrobe4.jpg" alt="" className="image__src" /></div>
                {/* <div> <img src="./assets/Wardrobe5.jpg" alt="" className="image__src" /></div> */}
                </div>
                <div className="image__text">livingroom Design</div>
                <div className="GalleryP4">
                <div> <img src="./assets/Livingrooms1.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Livingrooms2.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Livingrooms3.jpg" alt="" className="image__src" /></div>
                <div> <img src="./assets/Livingrooms4.jpg" alt="" className="image__src" /></div>
                {/* <div> <img src="./assets/Livingrooms5.jpg" alt="" className="image__src" /></div> */}
                </div>
            </div>
            <div className="GalleryPart3_2">   
            <p  className="image__text">Furniture Design</p> 
            <div className="GalleryC1">
                       <Carousel>
                        <div>
                          <img src="./assets/Furniture1.jpg"  />
                          <p className="legend">Furniture Design</p>
                        </div>
                        <div>
                          <img src="./assets/Furniture2.jpg"   />
                          <p className="legend">Furniture Design</p>
                        </div>
                        <div>
                          <img src="./assets/Furniture3.jpg"   />
                          <p className="legend">Furniture Design</p>
                        </div>
                        <div>
                          <img src="./assets/Furniture4.jpg"   />
                          <p className="legend">Furniture Design</p>
                        </div>
                        <div>
                          <img src="./assets/Furniture5.jpg"   />
                          <p className="legend">Furniture Design</p>
                        </div>
                      </Carousel>         
            </div>
            <p className="image__text">Kitchen Design</p>
            <div className="GalleryC2">
            <Carousel >
                        <div>
                          <img src="./assets/Kitchen1.jpg"  />
                          <p className="legend">Kitchen</p>
                        </div>
                        <div>
                          <img src="./assets/Kitchen2.jpg"   />
                          <p className="legend">Kitchen</p>
                        </div>
                        <div>
                          <img src="./assets/Kitchen3.jpg"   />
                          <p className="legend">Kitchen</p>
                        </div>
                        <div>
                          <img src="./assets/Kitchen4.jpg"   />
                          <p className="legend">Kitchen</p>
                        </div>
                        <div>
                          <img src="./assets/Kitchen5.jpg"  />
                          <p className="legend">Kitchen</p>
                        </div>
                      </Carousel>
            </div>
            <p className="image__text">Wardrobe Design</p>
            <div className="GalleryC3">
            <Carousel >
                        <div>
                          <img src="./assets/Wardrobe1.jpg" />
                          <p className="legend">Wardrobe</p>
                        </div>
                        <div>
                          <img src="./assets/Wardrobe2.jpg" />
                          <p className="legend">Wardrobe</p>
                        </div>
                        <div>
                          <img src="./assets/Wardrobe3.jpg" />
                          <p className="legend">Wardrobe</p>
                        </div>
                        <div>
                          <img src="./assets/Wardrobe4.jpg" />
                          <p className="legend">Wardrobe</p>
                        </div>
                        <div>
                          <img src="./assets/Wardrobe5.jpg" />
                          <p className="legend">Wardrobe</p>
                        </div>
                      </Carousel>
            </div>
            <p className="image__text">Livingrooms Design</p>
            <div className="GalleryC4">
            <Carousel >
                        <div>
                          <img src="./assets/Livingrooms1.jpg" />
                          <p className="legend">Livingrooms Interior</p>
                        </div>
                        <div>
                          <img src="./assets/Livingrooms2.jpg" />
                          <p className="legend">Livingrooms Interior</p>
                        </div>
                        <div>
                          <img src="./assets/Livingrooms3.jpg" />
                          <p className="legend">Livingrooms Interior</p>
                        </div>
                        <div>
                          <img src="./assets/Livingrooms4.jpg" />
                          <p className="legend">Livingrooms Interior</p>
                        </div>
                        <div>
                          <img src="./assets/Livingrooms5.jpg" />
                          <p className="legend">Livingrooms Interior</p>
                        </div>
                      </Carousel>
            </div>
            </div>
        </div>
      
        </div>
      
        </>
        {/* --------------------------------------------------------------------------------- */}
        <div>
      <div className="GalleryfooterHome">
      
              <div className="GalleryfooterHHome">
              <p className='Gallerytitle' >Trinity<br/>Interiors & Designes</p>
                <p className="GalleryfooterHeadHome">
                  We provides a full range of interior design,
                  <br /> architectural design.
                </p>
                </div>
          

            
              <div className="GalleryfooterCHome">
                <h5 className="GalleryfooterContactHome">Contacts</h5>
                <p className="GalleryfooterAddressHome">
                  H:No:-2-304,Old HafeezPet,Youth Colony,Miyapur,<br /> Hyderabad,
                  Pin-Code:500049.
                </p>
                <p className="GalleryfooterPhoneHome">+91 7097866238</p>
                <p className="GalleryfooterPhoneHome">+91 7013044462</p>
              </div>
            

           
              <div className="GalleryfooterPHome">
                <h5 className="GalleryfooterProjectsHome">Latest Projects</h5>
                <p className="GalleryfooterProjectHome">Stylish Family Appartment</p>
                <p className="GalleryfooterProjectHome">Moderan Villas</p>
                <p className="GalleryfooterProjectHome">Pent Houses</p>
              </div>
           
          </div>
        </div>
          </div>
    )
}

export default Gallery
