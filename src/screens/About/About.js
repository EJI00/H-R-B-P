import React from 'react'
import './About.css'
import hotelVideo from '../../imgs/video.mp4'
import {Link} from 'react-router-dom'
import MyFooter from '../../components/Footer/MyFooter'
import MyCopyright from '../../components/Copyright/MyCopyright'

const About = () => {
    return (
        <div>
            <section class="heading">
                <video autoPlay loop class="video-background" muted plays-inline>
                    <source src={hotelVideo} type="video/mp4" />
                </video>

                <center>
                    <div class="welcome-msg ">
                        <h1> About StayHub<span>X</span></h1>
                        <p>

"StayHubx is an Indian hospitality chain founded in 2024 by Trio's team, specializing in top-tier hotel management services across India. With a mission to provide exceptional service, StayHubx has quickly established itself as a leader in the hospitality industry, managing a diverse range of premium hotels and living spaces. Our team ensures that both clients and employees receive world-class support and solutions.

We offer a comprehensive suite of services, including full hotel management, operational expertise, and guest satisfaction strategies, making StayHubx the preferred partner for hotels nationwide. Whether you're a guest looking for an unforgettable stay or a hotel seeking seamless management, StayHubx is your trusted hospitality partner." 

This reflects the founding team and the service focus of StayHubx.
                        </p>
                       <Link to="/rooms"> <a class="btn btn-book btna"> Book Room </a> </Link>
                       <Link to="/"> <a class="btn btn-home btna"> Return to Home</a></Link>
                       <Link to="/team">
                            <a className="btn btn-home btna">Our team</a>
                        </Link>
                    </div>

                </center>
            </section>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default About
