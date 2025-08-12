
// import React from 'react';
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
// } from "./FooterStyles";
// import './MyFooter.css';



// const MyFooter = () => {
//     return (
//         <div className='myFooter'>
//             <Box>
//                 <Container>
//                     <Row>
//                         <Column>
//                             <Heading>About Us</Heading>
//                             <FooterLink href="#">Our Story</FooterLink>
//                             <FooterLink href="#">Mission & Vision</FooterLink>
//                             <FooterLink href="#">Guest Reviews</FooterLink>
//                         </Column>
//                         <Column>
//                             <Heading>Rooms & Services</Heading>
//                             <FooterLink href="#">Accommodations</FooterLink>
//                             <FooterLink href="#">Amenities</FooterLink>
//                             <FooterLink href="#">Dining Options</FooterLink>
//                             <FooterLink href="#">Special Offers</FooterLink>
//                         </Column>
//                         <Column>
//                             <Heading>Contact Us</Heading>
//                             <FooterLink href="http://localhost:3000/contact">Customer Support</FooterLink>
//                             <FooterLink href="http://localhost:3000/contact">Booking Inquiries</FooterLink>
//                             <FooterLink href="http://localhost:3000/contact">Locations</FooterLink>
//                             <FooterLink href="">FAQs</FooterLink>
//                         </Column>
//                         <Column>
//                             <Heading>Follow Us</Heading>
//                             <FooterLink href="#">
//                                 <i className="fab fa-facebook-f">
//                                     <span style={{ marginLeft: "10px" }}>Facebook</span>
//                                 </i>
//                             </FooterLink>
//                             <FooterLink href="#">
//                                 <i className="fab fa-instagram">
//                                     <span style={{ marginLeft: "10px" }}>Instagram</span>
//                                 </i>
//                             </FooterLink>
//                             <FooterLink href="#">
//                                 <i className="fab fa-twitter">
//                                     <span style={{ marginLeft: "10px" }}>Twitter</span>
//                                 </i>
//                             </FooterLink>
//                             <FooterLink href="#">
//                                 <i className="fab fa-youtube">
//                                     <span style={{ marginLeft: "10px" }}>YouTube</span>
//                                 </i>
//                             </FooterLink>
//                         </Column>
//                     </Row>
//                 </Container>
//             </Box>
//         </div>
//     );
// }

// export default MyFooter;
// MyFooter.js
import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";
import './MyFooter.css';

const MyFooter = () => {
    return (
        <div className='myFooter'>
            <Box>
                <Container>
                    <Row>
                        <Column>
                            <Heading>About Us</Heading>
                            <FooterLink href="/our-story">Our Story</FooterLink>
                            <FooterLink href="/mission">Mission & Vision</FooterLink>
                            <FooterLink href="/reviews">Guest Reviews</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Rooms & Services</Heading>
                            <FooterLink href="#">Accommodations</FooterLink>
                            <FooterLink href="#">Amenities</FooterLink>
                            <FooterLink href="/dining-options">Dining Options</FooterLink>
                            <FooterLink href="/special-offers">Special Offers</FooterLink>
                        </Column>
                        <Column>
                            <Heading>Contact Us</Heading>
                            <FooterLink href="http://localhost:3000/contact">Customer Support</FooterLink>
                            <FooterLink href="http://localhost:3000/contact">Booking Inquiries</FooterLink>
                            <FooterLink href="http://localhost:3000/contact">Locations</FooterLink>
                            <FooterLink href="/faqs">FAQs</FooterLink> {/* Updated link */}
                        </Column>
                        <Column>
                            <Heading>Follow Us</Heading>
                            <FooterLink href="www.facebook.com">
                                <i className="fab fa-facebook-f">
                                    <span style={{ marginLeft: "10px" }}>Facebook</span>
                                </i>
                            </FooterLink>
                            <FooterLink href="www.instagram.com">
                                <i className="fab fa-instagram">
                                    <span style={{ marginLeft: "10px" }}>Instagram</span>
                                </i>
                            </FooterLink>
                            <FooterLink href="#">
                                <i className="fab fa-twitter">
                                    <span style={{ marginLeft: "10px" }}>Twitter</span>
                                </i>
                            </FooterLink>
                            <FooterLink href="www.youtube.com">
                                <i className="fab fa-youtube">
                                    <span style={{ marginLeft: "10px" }}>YouTube</span>
                                </i>
                            </FooterLink>
                        </Column>
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

export default MyFooter;
