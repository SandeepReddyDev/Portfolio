import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import { useMediaQuery } from 'react-responsive';
import Experience from '../ExpComponent';
import ProjectsComponent from '../ProjectsComponent';
import Skills from '../SkillsComponent'
import ContactSection from '../ContactComponent'
import GridBackground from '../BackgroundComponent'
import CursorTrail from '../CursorTrail';
import ProfilePic from '../ProfilePic';
import { useEffect, useState, useRef } from 'react';
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { SiHyperskill } from "react-icons/si";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaGraduationCap, FaDownload, FaArrowUp, FaA } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";


const tabs = {
    Profile: { title: "Profile", icon: <CgProfile /> },
    About: { title: "About Me", icon: <IoMdInformationCircleOutline /> },
    Experience: { title: "Experience & Education", icon: <FaGraduationCap /> },
    Skills: { title: "Skills", icon: <SiHyperskill /> },
    Projects: { title: "Projects", icon: <GrProjects /> },
    Contact: { title: "Contact", icon: <IoIosMail /> }
};
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';
const DecoderText = ({ targetText = "Sandeep", speed = 50, lockDelay = 200 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [lockedIndex, setLockedIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (lockedIndex < targetText.length) {
            interval = setInterval(() => {
                let current = '';
                for (let i = 0; i < targetText.length; i++) {
                    if (i < lockedIndex) {
                        current += targetText[i];
                    } else if (targetText[i] === ' ') {
                        current += ' ';
                    } else {
                        current += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
                    }
                }
                setDisplayedText(current);
            }, speed);

            const lockTimeout = setTimeout(() => {
                setLockedIndex((prev) => prev + 1);
            }, lockDelay);

            return () => {
                clearInterval(interval);
                clearTimeout(lockTimeout);
            };
        } else {
            setDisplayedText(targetText);
        }
    }, [lockedIndex, targetText, speed, lockDelay]);

    return (
        <span className='headings'>
            {displayedText}
        </span>
    );
};
const Tabs = ({ activeTab, onClickTab }) => {
    return (
        <div className='tabs-c' style={{ gap: '25px' }}>
            {Object.entries(tabs).map(([key, tab]) => (
                <button
                    key={tab.title}
                    title={tab.title}
                    onClick={() => onClickTab(key)}
                    className={activeTab === key ? 'active-tab tab' : 'normal-tab tab'}
                >
                    {tab.icon}
                </button>
            ))}
        </div>
    );
};

const Home = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const [showFullText, setShowFullText] = useState(false);
    const sectionRefs = {
        Profile: useRef(null),
        About: useRef(null),
        Experience: useRef(null),
        Skills: useRef(null),
        Projects: useRef(null),
        Contact: useRef(null)
    };

    const onClickUpArrow = () => {
        setActiveTab('Profile');
        sectionRefs.Profile.current.scrollIntoView({ behavior: 'smooth' });
    }
    useEffect(() => {
        AOS.init({ duration: 800 });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        setActiveTab(id);
                    }
                });
            },
            { threshold: 0.6 } // Adjust for earlier or later detection
        );

        Object.values(sectionRefs).forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToTab = (tabId) => {
        const section = sectionRefs[tabId]?.current;
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const isMobile = useMediaQuery({ query: '(max-width: 425px)' });

    const fullText = `Hi, I'm a recent graduate from SASTRA University and have worked as a Front-End Developer at HCL Technologies. 
I specialize in modern web technologies, including React.js, JavaScript, HTML, CSS, and Tailwind CSS. I've contributed to real-time projects
and developed several personal projects as well. In addition, I'm familiar with backend technologies like Node.js and Express, and I'm currently expanding my knowledge to become a full-stack developer. I'm certified in MongoDB and SQL databases, which has further strengthened my backend development skills. I enjoy building real-world applications—from personal portfolios to fully functional e-commerce platforms—and I'm always looking for ways to enhance performance and user experience. Outside of coding, 
I enjoy watching Marvel movies and staying updated with the latest trends in web development.`;

    const maxLength = 350;
    const shortText = fullText.slice(0, maxLength);
    const shouldShowButton = isMobile && fullText.length > maxLength;
    return (
        <div id="Main" className="main-c">
            <Tabs activeTab={activeTab} onClickTab={scrollToTab} />
            <GridBackground />
            <CursorTrail />
            <div id='Profile'
                ref={sectionRefs.Profile}
                className="profile-section"
                data-aos="fade-in"
            >
                <div className="info">
                    <div className='role-section'>
                        <h1 className='headings'>Hello, This is <DecoderText targetText="Sandeep" /></h1>
                        <p className='info-text'>I'm a Front-End Developer dedicated to transforming ideas into seamless, interactive web experiences.
                            I specialize in crafting clean designs, intuitive user flows, and responsive, high-performance websites using modern web technologies.</p>
                    </div>
                    <div className='profile-buttons'>
                        <a href={process.env.PUBLIC_URL + "/SandeepResume.pdf"} download>
                            <button className='profile-btn resume-btn'>
                                <span className='resume-text'>Resume</span>
                                <span className='download-text'>Download <FaDownload /></span>

                                {/* 🔥 10 sparks */}
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
                            </button>
                        </a>
                        <button onClick={() => scrollToTab("Contact")} className='profile-btn contact-btn'>
                            <span className='contact-text'>Contact Me</span>
                            <span className='connect-text'>Let's Connect<BiLogoTelegram /></span>

                            {/* 🔥 10 sparks */}
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
                        </button>
                    </div>

                </div>
                <ProfilePic scrollToTab={scrollToTab} />
            </div>

            <div id="About" ref={sectionRefs.About} className="about-c" data-aos="fade-up">
                <DecoderText targetText="ABOUT ME" />
                <div className='about-content'>
                    <div className='about-img'>
                        <img src='https://i.postimg.cc/T12ySJYp/Me.jpg' alt="profile" className='about-pic' />
                    </div>
                    <p className='about-text'>
                        {isMobile && !showFullText ? shortText + '...' : fullText}
                        {shouldShowButton && (
                            <button
                                className='read-more-btn'
                                onClick={() => setShowFullText(!showFullText)}
                            >
                                {showFullText ? 'Read Less...' : 'Read More...'}
                            </button>
                        )}
                    </p>

                </div>

            </div>

            <div id="Experience" ref={sectionRefs.Experience} className="experience" data-aos="fade-up">
                <Experience scrollToTab={scrollToTab} />
            </div>

            <div id='Skills' ref={sectionRefs.Skills} className="skills-c" data-aos="fade-up">
                <DecoderText targetText="SKILLS" />
                <Skills />
            </div>

            <div id="Projects" ref={sectionRefs.Projects} className="projects-c" data-aos="fade-up">
                <DecoderText targetText="PROJECTS" />
                <ProjectsComponent />
            </div>

            <div id="Contact" ref={sectionRefs.Contact} className="contact-c" data-aos="fade-up">

                <ContactSection />
            </div>
            <div>
                <button onClick={onClickUpArrow} className={activeTab === 'Profile' ? 'profile-up' : 'up-arrow'}>
                    <FaArrowUp />
                    {/* 🔥 Always-active sparks */}
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
                </button>
            </div>

        </div>
    );
};

export default Home;
