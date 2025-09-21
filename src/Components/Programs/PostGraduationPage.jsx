import React from 'react';
import './PostGraduationPage.css';
import postGradImage from '../../assets/post-graduation.jpg'; // Make sure image is saved here

const PostGraduationPage = () => {
  return (
    <div className="post-grad-page">
      <div className="post-grad-content">
        <div className="post-grad-text">
          <h1>Elevate Your Career with Edusity Post Graduation</h1>
          <p>
            Our Post Graduation programs are designed for professionals aiming to specialize further and gain advanced skills. 
            With flexible schedules and expert-led courses, Edusity ensures you achieve your career goals without compromising your current commitments.
          </p>
          <ul>
            <li>✔ Specialized Professional Courses</li>
            <li>✔ Flexible Learning Options</li>
            <li>✔ Industry Collaborations & Certifications</li>
            <li>✔ Mentorship from Experts</li>
            <li>✔ Career Advancement Support</li>
          </ul>
          <button className="apply-button">Apply Now</button>
        </div>
        <div className="post-grad-image">
          <img src={postGradImage} alt="Post Graduation at Edusity" />
        </div>
      </div>
    </div>
  );
};

export default PostGraduationPage;
