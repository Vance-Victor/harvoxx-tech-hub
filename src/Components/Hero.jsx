import React from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import LandingPageImage from "../Images/harvoxxlogo.png";
import AboutImage from '../Images/about.jpg';
import Image1 from '../Images/service1.jpg';
import Image2 from '../Images/service2.jpg';
import Image3 from '../Images/service3.jpg';
import Image4 from '../Images/service4.jpg';
import Image5 from '../Images/service5.jpg';
import Image6 from '../Images/service6.jpg';
// import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section>
     {/* HOME PAGE */}
    <section className="home">
    <div className="landingPage">
      <div
        className="llp"
      //   data-aos="fade-right"
      //   data-aos-easing="linear"
      //   data-aos-duration="1500"
      >
        <h1>A whole awesome experience with Harvoxx tech hub</h1>
        <p>
          Right here is an organized hub of seasoned and aspiring
          techpreneurs, developers, graphics designers and innovators with
          strong passion for technology and entrepreneurship.
        </p>
        <p>
          It is a great platform for people to grow, develop amazing
          programming and business development skills.
        </p>
        <p>
          It is a community that has a fast growing alliances with Angel
          investors, VCs, NGOs and other tech communities.
        </p>
        <br />
        {/* <Link to="/login"><input type="button" value="Log In"/></Link> */}
        {/* <Link to="/signup"><input type="button" value="Sign up" /></Link> */}
      </div>
      <div
        className="rlp"
      //   data-aos="fade-left"
      //   data-aos-easing="linear"
      //   data-aos-duration="1500"
      >
        <img src={LandingPageImage} alt="Harvoxx Logo" />
      </div>
    </div>
    </section>

{/* ABOUT US */}

<section className="aboutSection">
          <div className="image">
              <img src={AboutImage} alt="about" />
          </div>
          <div className="aboutHarvoxx">
              <div className="about" 
              // data-aos="fade-zoom-in"
              //     data-aos-easing="ease-in-back"
              //     data-aos-delay="1500"
              //     data-aos-offset="0"
                  >
                  <h1>About Harvoxx tech hub</h1>
                  <p>
                      <span>HTH is an Innovative Hub designed to be a business growing community. It is a great set-up where ideas and opportunities are maximized. We have an enabling environment that guarantees seamless execution of ideas, encourage creativity, entrepreneurship and leadership mindset</span>
                  </p>
              </div>
              <div className="diversity">
                  <div 
                  // data-aos="fade-up"
                  //     data-aos-duration="1500"
                      >
                      <i className="fas fa-file-invoice"
                      ></i>
                      <div>
                          <h3>Diversity</h3>
                          <p>We have a community that celebrates differences hence, we encourage every member of the team and client to be proud of their unique qualities and skills.</p>
                      </div>
                  </div>
              </div>
              <div className="impact">
                  <div
                  //  data-aos="fade-up"
                  //     data-aos-duration="1500"
                       >
                      <i className="fas fa-cube"></i>
                      <div>
                          <h3>Impact</h3>
                          <p>We are determined to impact in our society. Hence, we are steadily ensuring that we find meaning and making great impact through hard work and services.</p>
                      </div>
                  </div>
              </div>
              <div className="commitment">
                  <div 
                  // data-aos="fade-up"
                  //     data-aos-duration="1500"
                      >
                      <i className="fas fa-image"></i>
                      <div>
                          <h3>Commitment To Client</h3>
                          <p>Here, we believe that commitment to client is an essential ingredient for success. We are willing to go above and beyond to deliver and satisfy our clients.</p>
                      </div>
                  </div>
              </div>
              <div className="integrity">
                  <div 
                  // data-aos="fade-up"
                  //     data-aos-duration="1500"
                      >
                      <i className="fas fa-shield" aria-hidden="true"></i>
                      <div>
                          <h3>Integrity</h3>
                          <p>We stay true to our culture and words. We uphold principles and processes that will earn us trust and respect from our clients.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SERVICES */}

      <section className="services" id="service">
          <div className="ourServices" 
          // data-aos="fade-zoom-in"
          //     data-aos-easing="ease-in-back"
          //     data-aos-delay="1500"
          //     data-aos-offset="0"
              >
              <h1>OUR SERVICES</h1>
              <span>
                  <p>Our structure is designed to provide the following services professionally and efficiently. Our team (of programmers, Business developers, strategists, marketers, Angel investors, entrepreneurs, graphic designers) puts in their very beat to ensure that our services delivery is top-notch</p>
              </span>
          </div>
          <div className="hth" 
          
              >
              <img src={Image1} alt="" />
              <div className="d2b">
                  <h3><a href="/">Website and mobile app design & development</a></h3>
                  <p>HT-Hub designs & Develops websites for interested clients (individuals, firms, companies, NGOs, government agencies etc) at an affordable rate.</p>
              </div>
          </div>
          <div className="hth" 
          // data-aos="fade-left"
          //     data-aos-easing="linear"
          //     data-aos-duration="1500"
              >
              <img src={Image2} alt="" />
              <div className="d2b">
                  <h3><a href="/">Branding and Marketing</a></h3>
                  <p>It is no longer news that we have assembled the best hands to provide our clients the best branding services. We acknowledge the fact that having a top-notch design and branding is to attract customers and clients to your business is phenomenally important.</p>
              </div>
          </div>
          <div className="hth"
          //  data-aos="fade-right"
          //     data-aos-easing="linear"
          //     data-aos-duration="1500 "
              >
              <img src={Image3} alt="" />
              <div className="d2b">
                  <h3><a href="/">Consulting</a></h3>
                  <p>We've got all it takes to develop a business idea from the conception stage to the launch stage.</p>
              </div>
          </div>
          <div className="hth" data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <img src={Image4} alt="" />
              <div className="d2b">
                  <h3><a href="/">HARV-MEETS (TechUp-Ph, LadiesCanTech)</a></h3>
                  <p>We create an awesome environment where developers, investors, entrepreneurs & Techies (DIET) can meet, network, share ideas and come up with innovative programs & projects that can positively impact the society.</p>
              </div>
          </div>
          <div className="hth" 
          // data-aos="fade-right"
          //     data-aos-easing="linear"
          //     data-aos-duration="1500"
              >
              <img src={Image5} alt="" width="100%" />
              <div className="d2b">
                  <h3><a href="/">HTH-TRAININGS (Capacity Building Initiative)</a></h3>
                  <p>We have a well-designed training project that ensures that trainees get even more than what they paid for.</p>
              </div>
          </div>
          <div className="hth" 
              //  data-aos="fade-left"
              // data-aos-easing="linear"
              // data-aos-duration="1500"
              >
              <img src={Image6} alt="" />
              <div className="d2b">
                  <h3><a href="/">HARVCUBATION (INCUBATION FOR TECH STARTUPS)</a></h3>
                  <p>Harvcubation is a technology-based incubation program for startups that are determined to build profitable businesses.</p>
              </div>
          </div>
      </section>

{/* CONTACT */}

      <section className="contact" id="contact">
          <div className="contactText" 
          // data-aos="fade-zoom-in"
          //     data-aos-easing="ease-in-back"
          //     data-aos-delay="1000"
          //     data-aos-offset="0"
              >
              <h2>CONTACT</h2>
          </div>
          <div className="ourContact"
          //  data-aos="fade-up"
          //     data-aos-duration="1500"
              >
              <div className="address">
                  <h3><i className="fa fa-map-marker" aria-hidden="true"></i> <br />Our Address</h3>
                  <p>Elzazi complex, Opposite Wesham petrol station along gbalajam/Akpajo road, woji (Odili Road, Port-Harcourt)</p>
              </div>
              <div className="email">
                  <h3>
                      <i className="fa fa-envelope" aria-hidden="true"></i> <br />
                      Email Us
                  </h3>
                  <p><a href="mailto:hello@hrvoxx.com">Hello@harvoxx.com</a></p>
                  <p><a href="mailto:help@harvoxx.com">Help@harvoxx.com</a></p>
                  <p><a href="mailto:admin@harvoxx.com">Admin@harvoxx.com</a></p>
              </div>
              <div className="call">
                  <h3>
                      <i className="fa fa-phone" aria-hidden="true"></i> <br />
                      Call Us</h3>
                  <p>+2349011684637</p>
                  <p>+2349065308024</p>
                  <p>+2349030643105</p>
              </div>
          </div>
          <div className="formClass"
          //  data-aos="fade-up"
          //     data-aos-duration="1500"
              >
              <form id="form">
                  <p id="errorname" style={{ color: "red" }}></p>
                  <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="yourName" />

                  <p id="erroremail" style={{ color: "red" }}></p>
                  <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="yourEmail"
                  />

                  <p id="errorsub" style={{ color: "red" }}></p>
                  <input
                      type="text"
                      id="sub"
                      placeholder="Subject"
                      className="input2"
                  />


                  <textarea name="Message" id="" cols="40" rows="10" placeholder="Message">

                  </textarea>

                  <input
                      type="submit"
                      value="send" className="input3" />

              </form>
          </div>
          {/* <LoadScript
              googleMapsApiKey="AIzaSyCBX-umRRP_GKQgz2x_2TlbQ4pvXLnpbyE"
          >
              <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={10}
                  center={defaultCenter}
              >
              </GoogleMap>
          </LoadScript> */}
      </section>

    {/* FOOTER */}

    <section className="footer">
          <div className="dark"></div>
          <div className="hthub" 
          // data-aos="fade-up" data-aos-duration="1500"
          >
              <h1>Harvoxx Tech. Hub.</h1>
              <p>Get the latest info on our Events, trainings, and tech presentations. Subscribe below</p>
              <br />
              <br />
          </div>
          <div className="form" 
          // data-aos="fade-up" data-aos-duration="1500"
          >
              <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="email"
              />
              <input
                  type="button"
                  value="Subscribe"
                  className="button"
              />
          </div>
          <div className="copyright">
              <p>© Copyright <b>Harvoxx tech. hub.</b> All Rights Reserved</p>
          </div>
      </section>
    </section>
  );
}

export default Hero