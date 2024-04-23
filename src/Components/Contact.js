import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Contact() {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 40.712776,
        lng: -74.005974
    };

    return (
        <section className="contact" id="contact">
            <div className="contactText" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1000"
                data-aos-offset="0">
                <h2>CONTACT</h2>
            </div>
            <div className="ourContact" data-aos="fade-up"
                data-aos-duration="1500">
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
            <div className="formClass" data-aos="fade-up"
                data-aos-duration="1500">
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
            <LoadScript
                googleMapsApiKey="AIzaSyCBX-umRRP_GKQgz2x_2TlbQ4pvXLnpbyE"
            >
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={defaultCenter}
                >
                </GoogleMap>
            </LoadScript>
        </section>
    );
}
