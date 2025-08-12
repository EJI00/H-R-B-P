// import React from 'react'
// import './Contact.css'
// import contactImg from '../../imgs/contact.jpg';
// import MyFooter from '../../components/Footer/MyFooter';
// import MyCopyright from '../../components/Copyright/MyCopyright';
// const Contact = () => {
//     return (
//         <div className='contactBody'>
//             <section className='contactPage' style={{
//                 backgroundImage: `url(${contactImg})`,
//                 backgroundSize:'cover'
//             }}>
//                 <div className='content'>
//                     <h2 className='contact-us-hd'>Contact Us </h2>
//                     <p className='contact-us-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores neque sunt accusamus numquam amet eos dolorem, unde ab impedit id odit temporibus voluptatibus minima beatae quis voluptas dolor repudiandae.</p>
//                 </div>

//                 <div className='mycontainer'>
//                     <div className='contactInfo'>
//                         <div className='box'>
//                             <div className='icon'>
//                                 <i className='fa fa-map-marker' aria-hidden="true"></i>

//                             </div>
//                             <div className='text'>
//                                 <h3>Address</h3>
//                                 <p>33/A ,ClockTower <br />Pattukottai, Thanjore, <br />614628</p>
//                             </div>
//                         </div>

//                         <div className='box'>
//                             <div className='icon'>
//                                 <i className='fa fa-phone' aria-hidden="true"></i>

//                             </div>
//                             <div className='text'>
//                                 <h3>Phone</h3>
//                                 <p>507-475-6094</p>
//                             </div>
//                         </div>

//                         <div className='box'>
//                             <div className='icon'>
//                                 <i className='fa fa-envelope-o' aria-hidden="true"></i>
//                             </div>
//                             <div className='text'>
//                                 <h3>Email</h3>
//                                 <p>stayHubx@ac.com</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='contactForm'>
//                         <form>
//                             <h2>Send Message</h2>
//                             <div className='inputBox'>
//                                 <input type="text" name="" required="required" className="contact-input"/>
//                                 <span>Full Name</span>
//                             </div>
//                             <div className='inputBox'>
//                                 <input type="text" name="" required="required"  className="contact-input"/>
//                                 <span>Email</span>
//                             </div>
//                             <div className='inputBox'>
//                                 <textarea required="requred"  className="contact-input"></textarea>
//                                 <span>Type your message ...</span>
//                             </div>
//                             <div className='inputBox'>
//                                 <input type="submit" name="" value="Send"  className="contact-input"/>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         <MyFooter/>
//         <MyCopyright/>
//         </div>
//     )
// }

// export default Contact
import React, { useState } from 'react';
import './Contact.css';
import contactImg from '../../imgs/contact.jpg';
import MyFooter from '../../components/Footer/MyFooter';
import MyCopyright from '../../components/Copyright/MyCopyright';

const Contact = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Show popup message when form is submitted
        setIsPopupVisible(true);

        // Hide the popup after 3 seconds
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 3000);
    };

    return (
        <div className='contactBody'>
            <section className='contactPage' style={{
                backgroundImage: `url(${contactImg})`,
                backgroundSize: 'cover'
            }}>
                <div className='content'>
                    <h2 className='contact-us-hd'>Contact Us </h2>
                    <p className='contact-us-para'>"At StayHub, we’re dedicated to ensuring your stay is as comfortable and seamless as possible. Whether you have inquiries about your booking, need assistance with our services, or simply want to share your feedback, our team is here to help. Reach out to us anytime, and we’ll ensure you have everything you need for a delightful stay with us
                    </p>
                </div>

                <div className='mycontainer'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-map-marker' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>33/A ,ClockTower <br />Pattukottai, Thanjore, <br />614628</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-phone' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Phone</h3>
                                <p>507-475-6094</p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-envelope-o' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Email</h3>
                                <p>stayHubx@ac.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='contactForm'>
                        <form onSubmit={handleSubmit}>
                            <h2>Send Message</h2>
                            <div className='inputBox'>
                                <input type="text" required className="contact-input" />
                                <span>Full Name</span>
                            </div>
                            <div className='inputBox'>
                                <input type="text" required className="contact-input" />
                                <span>Email</span>
                            </div>
                            <div className='inputBox'>
                                <textarea required className="contact-input"></textarea>
                                <span>Type your message ...</span>
                            </div>
                            <div className='inputBox'>
                                <input type="submit" value="Send" className="contact-input" />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Centered Popup message with tick mark */}
                {isPopupVisible && (
                    <div className="popupMessage">
                        <div className="popupContent">
                            <span className="tickMark">✅</span>
                            <p>Message Sent Successfully!</p>
                        </div>
                    </div>
                )}
            </section>

            <MyFooter />
            <MyCopyright />
        </div>
    );
};

export default Contact;
