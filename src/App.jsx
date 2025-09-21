import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import LoginSignup from './Components/LoginSignup/LoginSignup';
import GraduationPage from './Components/Programs/GraduationPage'
import MasterDegreePage from './Components/Programs/MasterDegreePage'
import PostGraduationPage from './Components/Programs/PostGraduationPage'

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <Routes>
      <Route path='/' element={
        <>
          <div>
            <Navbar />
            <Hero />
            <div className="container">
              <Title subTitle="OUR PROGRAM" title="What We Offer" />
              <Programs />
              <Title subTitle="" title="Graduation Degree" />
              <GraduationPage/>
              <Title subTitle="" title="Master's Degree" />
              <MasterDegreePage/>
              <Title subTitle="" title="Post Graduation Degree" />
              <PostGraduationPage/>
              <About setPlayState={setPlayState} />
              <Title subTitle="GALLERY" title="Campus Photos" />
              <Campus />
              <Title subTitle="TESTIMONIALS" title="What Student Says" />
              <Testimonials />
              <Title subTitle="CONTACT US" title="Get in Touch" />
              <Contact />
              <Footer />
            </div>
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </div>
        </>
      }
      />
      <Route path='signup' element={<LoginSignup />} />
    </Routes>
  )
}

export default App

