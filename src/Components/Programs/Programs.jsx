import React from 'react'
import './Programs.css'
import { Link } from 'react-scroll'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_1} alt="Program-1" />
                <Link to="graduation-page" smooth={true} offset={-160} duration={500}>
                    <div className="caption">
                        <img src={program_icon_1} alt="Program-icon-1" />
                        <p>Graduation Degree</p>
                    </div>
                </Link>
            </div>
            <div className="program">
                <img src={program_2} alt="Program-2" />
                <Link to="master-degree-page" smooth={true} offset={-160} duration={500}>
                    <div className="caption">
                        <img src={program_icon_2} alt="Program-icon-2" />
                        <p>Master Degree</p>
                    </div>
                </Link>
            </div>
            <div className="program">
                <img src={program_3} alt="Program-3" />
                <Link to="post-graduation-page" smooth={true} offset={-160} duration={500}>
                    <div className="caption">
                        <img src={program_icon_3} alt="Program-icon-3" />
                        <p>Post Graduation</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Programs
