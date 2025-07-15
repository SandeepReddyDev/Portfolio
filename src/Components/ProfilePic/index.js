import React from 'react';
import { FaDroplet } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaGraduationCap, FaPlus } from "react-icons/fa6";
import './index.css';

const ProfilePic = ({ scrollToTab }) => {
    return (
        <div className="id-card-container">
            <div className="id-card-glow-border">
                <h2 className="rank-title">S-RANK DEVELOPER</h2>
                <div className="info-section">
                    <p className='details'><span>Blood <FaDroplet />  :</span> A +ve</p>
                    <p className='details'><span>DOB :</span> 06-Feb-2002</p>
                </div>
                <div className='id-button-container'>
                    <button className="id-button" onClick={() => scrollToTab("Skills")} >Skills</button>
                    <button className="id-button" onClick={() => scrollToTab("Experience")}>Exp</button>
                    <button className="id-button btn-dis" onClick={() => scrollToTab("Projects")}>Projects</button>
                    <button className="id-button btn-dis" onClick={() => scrollToTab("Contact")}>Contact</button>
                </div>
                <div className='id-icons-container'>
                    <button className="id-icons" onClick={() => scrollToTab("Skills")} ><SiHyperskill /> </button>
                    <button className="id-icons" onClick={() => scrollToTab("Experience")}><FaGraduationCap /></button>
                    <button className="id-icons" onClick={() => scrollToTab("Projects")}><GrProjects /></button>
                    <button className="id-icons" onClick={() => scrollToTab("About Me")}><IoMdInformationCircleOutline /> </button>
                </div>
               <div>
                 <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                {/* Additional 20 sparks */}
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>

                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>
                <span className="spark"></span>

               </div>
            </div>
        </div>
    );
};

export default ProfilePic;
