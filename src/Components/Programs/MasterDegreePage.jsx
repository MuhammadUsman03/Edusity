import React from 'react';
import './MasterDegreePage.css';
import masterImage from '../../assets/master-graduation.jpg'; // Place image in the correct path

const MasterDegreePage = () => {
  return (
    <div className="master-degree-page">
      <div className="master-content">
        <div className="master-image">
          <img src={masterImage} alt="Master's Degree at Edusity" />
        </div>
        <div className="master-text">
          <h1>Achieve Excellence with Edusity Master's Degree</h1>
          <p>
            Edusity offers a prestigious Master's Degree program that helps students gain in-depth knowledge and specialized skills in their field of study. 
            With a focus on research, innovation, and professional growth, this program opens doors to career advancement and global opportunities.
          </p>
          <ul>
            <li>✔ Advanced Curriculum for Mastery</li>
            <li>✔ Expert Faculty & Research Opportunities</li>
            <li>✔ International Recognition</li>
            <li>✔ Networking with Industry Leaders</li>
            <li>✔ Career and Placement Support</li>
          </ul>
          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default MasterDegreePage;
