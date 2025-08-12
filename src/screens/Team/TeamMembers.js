import React from 'react';
import './TeamMembers.css'; // Import the CSS file
import team1 from '../../imgs/team1.jpg';
import team2 from '../../imgs/team2.jpg';
import team3 from '../../imgs/team3.jpg';
import team4 from '../../imgs/team4.jpg';

const TeamMembers = () => {
    return (
        <div className="container">
            <h1>Meet Our Team</h1>
            <div className="team-member-container">
                {/* Team Member 1 */}
                <div className="team-member">
                    <div className="team-member-inner">
                        <div className="team-photo">
                            <img src={team2} alt="BARATHSAKI S" />
                            <h2>BARATHSAKI S</h2>
                            <h6>Team Lead & Devoloper</h6>
                        </div>
                        <div className="team-back">
                            <p>Role: Team Lead & Developer</p>
                            <p>Responsible for project management and overseeing the development of key features.</p>
                        </div>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="team-member">
                    <div className="team-member-inner">
                        <div className="team-photo">
                            <img src={team3} alt="EJI P" />
                            <h2>EJI P</h2>
                            <h6>Reviewer</h6>
                        </div>
                        <div className="team-back">
                            <p>Role: Reviewer</p>
                            <p>Handles code review and ensures adherence to quality and coding standards.</p>
                        </div>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="team-member">
                    <div className="team-member-inner">
                        <div className="team-photo">
                            <img src={team1} alt="DHAYABARAN J" />
                            <h2>DHAYABARAN J</h2>
                            <h6>Scrum Master</h6>
                        </div>
                        <div className="team-back">
                            <p>Role: Scrum Master</p>
                            <p>Facilitates the Agile process, helps the team meet deadlines, and manages sprints.</p>
                        </div>
                    </div>
                </div>

                {/* Team Member 4 */}
                <div className="team-member">
                    <div className="team-member-inner">
                        <div className="team-photo">
                            <img src={team4} alt="CHANDRU GURU" />
                            <h2>CHANDRU GURU</h2>
                            <h6>Devoloper</h6>
                        </div>
                        <div className="team-back">
                            <p>Role: Dhrog'zz</p>
                            <p>Works on building features and fixing bugs to ensure smooth functionality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
