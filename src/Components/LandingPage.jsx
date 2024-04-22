import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "../Images/harvoxxlogo.png";

const LandingPage = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500,
        easing: "linear",
      });
    }, []);
  
    return (
      <div className="landingPage">
        <div
          className="llp"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
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
          <input type="button" value="LogIn" />
        </div>
        <div
          className="rlp"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={Image} alt="Harvoxx Logo" />
        </div>
      </div>
    );
  };
  
  export default LandingPage;  