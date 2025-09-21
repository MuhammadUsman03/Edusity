import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        console.log("Forward");
        if(tx > -50){
            tx -=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        console.log("Backward");
        if(tx < 0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div className='testimonials'>
            <img src={back_icon} alt="back-icon" className='back-btn' onClick={slideBackward}/>
            <img src={next_icon} alt="next-icon" className='next-btn' onClick={slideForward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User1" />
                                <div>
                                    <h3>Emily Johnson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User2" />
                                <div>
                                    <h3>Muhammad Usman</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing Edusity for my degree was a life-changing decision. The expert faculty, modern labs, and a welcoming atmosphere helped me grow academically and personally. I feel confident for my future career.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User3" />
                                <div>
                                    <h3>Sofia Alvarez</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>My experience at Edusity has been incredible. The interactive learning environment, helpful mentors, and countless opportunities for growth made my journey unforgettable. I’m proud to be part of a university that truly values.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User4" />
                                <div>
                                    <h3>Hamdan</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Edusity provided everything I hoped for in a university—supportive peers, knowledgeable teachers, and world-class resources. From day one, I felt empowered to pursue my goals and gain skills that will benefit me for a lifetime.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
