import React from "react";
import Image1 from '../Images/service1.jpg';
import Image2 from '../Images/service2.jpg';
import Image3 from '../Images/service3.jpg';
import Image4 from '../Images/service4.jpg';
import Image5 from '../Images/service5.jpg';
import Image6 from '../Images/service6.jpg';

export default function Services (){
    return (
        <section className="services" id="service">
            <div className="ourServices" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1500"
                data-aos-offset="0">
                <h1>OUR SERVICES</h1>
                <span>
                    <p>Our structure is designed to provide the following services professionally and efficiently. Our team (of programmers, Business developers, strategists, marketers, Angel investors, entrepreneurs, graphic designers) puts in their very beat to ensure that our services delivery is top-notch</p>
                </span>
            </div>
            <div className="hth" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image1} alt="" />
                <div className="d2b">
                    <h3><a href="">Website and mobile app design & development</a></h3>
                    <p>HT-Hub designs & Develops websites for interested clients (individuals, firms, companies, NGOs, government agencies etc) at an affordable rate.</p>
                </div>
            </div>
            <div className="hth" data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image2} alt="" />
                <div className="d2b">
                    <h3><a href="">Branding and Marketing</a></h3>
                    <p>It is no longer news that we have assembled the best hands to provide our clients the best branding services. We acknowledge the fact that having a top-notch design and branding is to attract customers and clients to your business is phenomenally important.</p>
                </div>
            </div>
            <div className="hth" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image3} alt="" />
                <div className="d2b">
                    <h3><a href="">Consulting</a></h3>
                    <p>We've got all it takes to develop a business idea from the conception stage to the launch stage.</p>
                </div>
            </div>
            <div className="hth" data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image4} alt="" />
                <div className="d2b">
                    <h3><a href="">HARV-MEETS (TechUp-Ph, LadiesCanTech)</a></h3>
                    <p>We create an awesome environment where developers, investors, entrepreneurs & Techies (DIET) can meet, network, share ideas and come up with innovative programs & projects that can positively impact the society.</p>
                </div>
            </div>
            <div className="hth" data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image5} alt="" width="100%" />
                <div className="d2b">
                    <h3><a href="">HTH-TRAININGS (Capacity Building Initiative)</a></h3>
                    <p>We have a well-designed training project that ensures that trainees get even more than what they paid for.</p>
                </div>
            </div>
            <div className="hth" data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <img src={Image6} alt="" />
                <div className="d2b">
                    <h3><a href="">HARVCUBATION (INCUBATION FOR TECH STARTUPS)</a></h3>
                    <p>Harvcubation is a technology-based incubation program for startups that are determined to build profitable businesses.</p>
                </div>
            </div>
        </section>
    );
}
