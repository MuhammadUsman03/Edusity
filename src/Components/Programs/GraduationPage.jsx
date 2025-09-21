import React from 'react';
import './GraduationPage.css';
import gradImage from '../../assets/graduation.jpg'; // Make sure to place the image in the correct folder

const GraduationPage = () => {
  return (
    <div className="graduation-page">
      <div className="grad-content">
        <div className="grad-text">
          <h1>Start Your Journey with Edusity Graduation Program</h1>
          <p>
            Edusity offers a world-class graduation program designed to prepare students for success in the real world. 
            Our curriculum is focused on practical skills, industry-driven projects, and expert mentorship. 
            Whether you're passionate about technology, business, or design — we help you build your future with confidence.
          </p>
          <ul>
            <li>✔ Modern & Practical Curriculum</li>
            <li>✔ Experienced Faculty</li>
            <li>✔ Internship Opportunities</li>
            <li>✔ Career Guidance & Placement Support</li>
            <li>✔ Internationally Recognized Degree</li>
          </ul>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="grad-image">
          <img src={gradImage} alt="Graduation at Edusity" />
        </div>
      </div>
    </div>
  );
};

export default GraduationPage;
