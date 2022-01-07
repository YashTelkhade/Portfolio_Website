import React, { Component } from 'react'
import './About.css'
import Image from "../../img/graduate.jpg"
export class About extends Component {
    render() {
        return (
            <div className="a">
                <div className="a-left">
        
                    <div className="a-card">
                        <img
                            src={Image}
                            alt=""
                            className="a-img"
                        />
                    </div>
                </div>
                <div className="a-right">
                    <h1 className="a-title">EDUCATION</h1>
                    <p className="a-sub">
                        1. Shri Ramdeobaba College of Engineering and Management, Nagpur
                    </p>
                    <div className='paraspecial'>
                        <p className="a-desc">
                            Bachelor of Engineering (B.E.) and Honors (Hons.) in CSE.
                            <p>June 2018 – present</p>
                            <p><b>Relevant courses:</b>  Data Structures, Algorithms, Operating Systems, Software Engineering,
                                Database Management Systems, Data Warehousing and Mining, Artificial Intelligence,
                                Design Patterns</p>

                            <p><b>C.G.P.A: 9.26/10</b></p>
                        </p>
                    </div>

                    <p className="a-sub">
                        2. Dr. Ambedkar College, Nagpur, (M.S) India
                        <div className='paraspecial'>
                            <p className="a-desc">
                                HSC – XI - XII Std.
                                <p>July 2016 - May 2018</p>
                                <p><b>Relevant courses:</b> English, Mathematics and Statistics, Physics, Chemistry, Electronics.</p>

                                <p><b>Percentage:</b> 86.77%</p>
                            </p>
                        </div>
                    </p>


                    <p className="a-sub">
                        3. BJM Carmel Academy, Chandrapur
                        <div className='paraspecial'>
                            <p className="a-desc">
                                SSC - CBSE
                                <p>May 2007 – June 2016</p>
                                <p><b>Relevant courses:</b> English, Mathematics and Statistics, Physics, Chemistry, Electronics.</p>

                                <p><b>Percentage:</b> 97.40%</p>
                            </p>
                        </div>
                    </p>


                </div>
            </div>
        )
    }
}

export default About
