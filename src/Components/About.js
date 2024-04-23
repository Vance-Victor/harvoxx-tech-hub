import React from "react";
import Image from '../Images/about.jpg';
import '@fortawesome/fontawesome-free/css/all.css';

export default function About() {
    return (
        <section className="aboutSection">
            <div className="image">
                <img src={Image} alt="about" />
            </div>
            <div className="aboutHarvoxx">
                <div className="about" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="1500"
                    data-aos-offset="0">
                    <h1>About Harvoxx tech hub</h1>
                    <p>
                        <span>HTH is an Innovative Hub designed to be a business growing community. It is a great set-up where ideas and opportunities are maximized. We have an enabling environment that guarantees seamless execution of ideas, encourage creativity, entrepreneurship and leadership mindset</span>
                    </p>
                </div>
                <div className="diversity">
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <i className="fas fa-file-invoice"></i>
                        <div>
                            <h3>Diversity</h3>
                            <p>We have a community that celebrates differences hence, we encourage every member of the team and client to be proud of their unique qualities and skills.</p>
                        </div>
                    </div>
                </div>
                <div className="impact">
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <i className="fas fa-cube"></i>
                        <div>
                            <h3>Impact</h3>
                            <p>We are determined to impact in our society. Hence, we are steadily ensuring that we find meaning and making great impact through hard work and services.</p>
                        </div>
                    </div>
                </div>
                <div className="commitment">
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <i className="fas fa-image"></i>
                        <div>
                            <h3>Commitment To Client</h3>
                            <p>Here, we believe that commitment to client is an essential ingredient for success. We are willing to go above and beyond to deliver and satisfy our clients.</p>
                        </div>
                    </div>
                </div>
                <div className="integrity">
                    <div data-aos="fade-up"
                        data-aos-duration="1500">
                        <i className="fas fa-shield" aria-hidden="true"></i>
                        <div>
                            <h3>Integrity</h3>
                            <p>We stay true to our culture and words. We uphold principles and processes that will earn us trust and respect from our clients.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
