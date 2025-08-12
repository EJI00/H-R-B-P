// import React from 'react';
// import card1 from '../../imgs/card1.jpg';
// import card5 from '../../imgs/card5.jpg';
// import card3 from '../../imgs/card3.jpg';
// import card2 from '../../imgs/card2.jpg';
// import card15 from '../../imgs/card15.jpg';
// import card13 from '../../imgs/card13.jpg';
// import './MyCards.css';
// import {Link} from 'react-router-dom';

// const MyCards = () => {
//     return (
//         <div>
//             <div class="container">
//                 <center>
//                     <h1 className='featured-heading'> Featured Rooms    </h1>
//                 </center>
//                 <div className='myCards'>

//                     {/* SINGLE */}
//                     <div className="card ">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card1} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Single Room

//                                 </h3>
//                                 <Link to={`/singleRoom/single`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>
//                             </div>

//                         </div>

//                     </div>

//                     {/* FAMILY */}
//                     <div class="card ">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card5} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Family Room
//                                 </h3>
//                                 <Link to={`/singleRoom/family`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>

//                             </div>

//                         </div>

//                     </div>


//                     {/* PRES */}
//                     <div class="card">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card3} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Presedential Room

//                                 </h3>
//                                 <Link to={`/singleRoom/presidential`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>

//                             </div>

//                         </div>

//                     </div>

//                     {/* DOUBLE */}
//                     <div class="card ">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card2} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Double Room

//                                 </h3>
//                                 <Link to={`/singleRoom/double`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>

//                             </div>

//                         </div>

//                     </div>


//                     {/* SINGLE */}
//                     <div class="card ">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card15} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Single Room

//                                 </h3>
//                                 <Link to={`/singleRoom/single`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>
//                             </div>

//                         </div>

//                     </div>

//                     {/* FAMILY */}
//                     <div class="card ">

//                         <div class="slide slide1">

//                             <div class="content">

//                                 <div class="icon">
//                                     <img src={card13} />

//                                     {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}

//                                 </div>

//                             </div>

//                         </div>

//                         <div class="slide slide2">

//                             <div class="content">

//                                 <h3>

//                                     Family Room

//                                 </h3>
//                                 <Link to={`/singleRoom/family`} className='links'>
//                                     <p>Click to book your room of your own choice </p>
//                                 </Link>

//                             </div>

//                         </div>

//                     </div>


//                 </div>

//             </div>

//         </div>
//     )
// }

// export default MyCards
import React, { useState } from 'react';
import card1 from '../../imgs/card1.jpg';
import card5 from '../../imgs/card5.jpg';
import card3 from '../../imgs/card3.jpg';
import card2 from '../../imgs/card2.jpg';
import card15 from '../../imgs/card15.jpg';
import card13 from '../../imgs/card13.jpg';
import './MyCards.css';
import { Link } from 'react-router-dom';

const MyCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const rooms = [
        { image: card1, title: "Single Room", link: "/singleRoom/single" },
        { image: card5, title: "Family Room", link: "/singleRoom/family" },
        { image: card3, title: "Presidential Room", link: "/singleRoom/presidential" },
        { image: card2, title: "Double Room", link: "/singleRoom/double" },
        { image: card15, title: "Single Room", link: "/singleRoom/single" },
        { image: card13, title: "Family Room", link: "/singleRoom/family" },
    ];

    const roomsPerPage = 3;
    const totalPages = Math.ceil(rooms.length / roomsPerPage);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < totalPages - 1 ? prevIndex + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : totalPages - 1
        );
    };

    const displayedRooms = rooms.slice(
        currentIndex * roomsPerPage,
        (currentIndex + 1) * roomsPerPage
    );

    return (
        <div>
            <div className="container">
                <center>
                    <h1 className="featured-heading">Featured Rooms</h1>
                </center>
                <div className="carousel">
                    <button className="arrow left-arrow" onClick={handlePrev}>
                        &#8249;
                    </button>
                    <div className="myCards">
                        {displayedRooms.map((room, index) => (
                            <div className="card" key={index}>
                                <div className="slide slide1">
                                    <div className="content">
                                        <div className="icon">
                                            <img src={room.image} alt={room.title} />
                                        </div>
                                    </div>
                                </div>
                                <div className="slide slide2">
                                    <div className="content">
                                        <h3>{room.title}</h3>
                                        <Link to={room.link} className="links">
                                            <p>Click to book your room of your own choice</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="arrow right-arrow" onClick={handleNext}>
                        &#8250;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyCards;
