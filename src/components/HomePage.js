import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiCplusplus, SiHtml5, SiCss3, SiUnrealengine } from 'react-icons/si';
import { FaUnity } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

function SkillCard({ title, icons }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="icons-container">
        {icons.map(({ Icon, label, color }) => (
          <div
            key={label}
            className="skill-icon"
            title={label}
            aria-label={label}
            style={{ '--icon-color': color }}
          >
            <Icon size={48} />
            <span className="icon-label">   {label}</span> {/* Label below icon */}
          </div>
        ))}
      </div>
    </div>
  );
}


function ProjectCard({ title, description, githubUrl, text }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github" aria-label={`GitHub repository for ${title}`}>
        <FaGithub size={20} />
      </a><br></br>
      <p>{text}</p>
    </div>
  );
}

export default function HomePage() {

  const languageIcons = [
    { Icon: FaJsSquare, label: 'JavaScript', color: '#007396' },
    { Icon: FaJava, label: 'Java', color: '#007396' },
    { Icon: FaPython, label: 'Python', color: '#007396' },
    { Icon: SiCplusplus, label: 'C++', color: '#007396' },
    { Icon: TbBrandCSharp, label: 'C#', color: '#007396' },
    { Icon: SiHtml5, label: 'HTML', color: '#007396' },
    { Icon: SiCss3, label: 'CSS', color: '#007396' }
    // add more languages here if you want
  ];

  const techIcons = [
    { Icon: FaReact, label: 'React', color: '#007396' },
    { Icon: FaNodeJs, label: 'Node.js', color: '#007396' },
    { Icon: FaUnity, label: 'Unity', color: '#007396' },
    { Icon: SiUnrealengine, label: 'Unreal Engine', color: '#007396' }
  ];

  const toolsIcons = [
    { Icon: FaGitAlt, label: 'Git', color: '#007396' },
    { Icon: BiLogoVisualStudio, label: 'VS Code', color: '#007396' }
  ];

  const [showNav, setShowNav] = useState(true);

  const handleToggle = () => {
    setShowNav(prev => !prev);
  };


  return (
    <>
      <header className='header-nav'>
        <title>Prisha Swaroop</title>
      </header>

      <main className="container" role="main">
        <section id="hero" aria-label="Introduction">
          <div className="nav-container">
            {/* Show toggle button only on small screens via CSS */}
            {
              !showNav && (
                <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleToggle}>
                  &#9776;
                </button>
              )
            }
            <nav className={`${showNav ? 'nav-links show' : 'hide'}`}>
              <a href="#about" >About</a>
              <a href="#experiences">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
            </nav>
            {
              showNav && (
                <button className="close-button" aria-label="Toggle navigation" onClick={handleToggle}>
                  <FaTimes />
                </button>
              )
            }
          </div>
          <h1>Prisha Swaroop</h1>

          <h2 color =' #f8f1da;'>
            <Typewriter
              words={['Software Engineer...', 'Problem Solver...', 'Michigan Wolverine...', 'Technology Explorer...'   ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <div className="icons">
            <a href="mailto:pswaroop@umich.edu" aria-label="Email" title="Email">
              <FaEnvelope size={50} /> </a>
            <a href="https://www.linkedin.com/in/prisha-swaroop-85090b275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedin size={50} />
            </a>
            <a href="https://github.com/prishasw007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" >
              <FaGithub size={50} />
            </a>
          </div>
        </section>
        <div class="section-divider"></div>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src="./photo1.jpeg" alt="Prisha Swaroop" />
            </div>
            <div className="about-text">
              <p>
                Hey I'm Prisha,<br></br>
                I'm a Computer Science student at the University of Michigan, passionate about building at the intersection of technology and creativity.<br></br>
                Whether it's game development, AI, or web development, I love using code to solve real-world problems and craft engaging digital experiences. Go Blue〽️
              </p>
            </div>
          </div>
        </section>

        <div class="section-divider"></div>

        {/*Experience*/}
        <section id="experiences" className="experience-section">
          <h2>Experience</h2>
          <div className="experience-cards">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="logo-and-title">
                    <img src="./Xoxoday_Logo.jpg" alt="Xoxoday logo" className="company-logo" />
                    <h3>Xoxoday</h3>
                  </div>
                  <p>Full Stack Web Development Intern</p>
                  <p>🏢 Bengaluru, India</p> {/* Add real location or emoji */}
                  <p>📅 June 2025 – Present</p>
                </div>
                <div className="flip-card-back">
                  <ul>
                    <li>Building and scaling Loyalife through full-stack development using React, Node.js, and Express.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="logo-and-title">
                    <img src="./maizetix.png" alt="MaizeTix logo" className="company-logo" />
                    <h3>MaizeTix</h3>
                  </div>
                  <p>Software Developer</p>
                  <p>🏢 Ann Arbor, MI</p> {/* Add real location or emoji */}
                  <p>📅 Jan 2025 – Present</p>
                </div>
                <div className="flip-card-back">
                  <ul>
                    <li>Built full-stack ticketing app MaizeTix with APIs, PostgreSQL, Stripe, and automated microservices integration.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="logo-and-title">
                    <img src="./lotus.png" alt="Lotus Petal Foundation logo" className="company-logo" />
                    <h3>Lotus Petal Foundation</h3>
                  </div>
                  <p>Campaign Manager</p>
                  <p>🏢 Bengaluru, India</p> {/* Add real location or emoji */}
                  <p>📅 May 2023 – Dec 2023</p>
                </div>
                <div className="flip-card-back">
                  <ul>
                    <li>Led the “Pad for Every Girl” campaign at Lotus Petal, raising $1700+ and promoting menstrual hygiene awareness in rural parts of Bengaluru</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="section-divider"></div>

        {/* Projects Section */}
        <section id="projects" className="project-section">
          <h2>Projects</h2>
          <div className="project-cards-container">
            <ProjectCard
              title=" WonderToon - AI Image Generator"
              description="An AI-powered image generation web app built for AWS Hackathon 2025. This project integrates multiple AI services to create and enhance images based on user prompts."
              githubUrl="https://github.com/prishasw007/AWS-Hackathon-2025"
              text="React.js | HTML | CSS | JavaScript | Google AI, OpenAI & Stability AI API"
            />
            <ProjectCard
              title="Weather App"
              description="A simple, responsive weather app built using HTML, CSS, and JS. Users can enter any city name and get real-time weather updates."
              githubUrl="https://github.com/prishasw007/Weather-App"
              text="React.js | HTML | CSS | JavaScript | OpenWeather API"
            />
            <ProjectCard
              title="Rocket Science"
              description ="This project simulates rocket trajectories using numerical methods to calculate velocity, height, and fuel optimization under varying conditions."
              githubUrl= "https://github.com/prishasw007/Rocket-Science"
              text="C++"
            />
            {/* Add more ProjectCard components here */}
          </div>
        </section>

        <div class="section-divider"></div>

        {/* Skills Section */}
        <section id="skills" className="skill-section">
          <h2>Skills</h2>
          <div className="skills-cards-container">
            <SkillCard title="Languages" icons={languageIcons} />
            <SkillCard title="Technologies & Frameworks" icons={techIcons} />
            <SkillCard title="Developer Tools" icons={toolsIcons} />
          </div>
          <button className="home-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
            Back to Top
          </button>
        </section>
      </main>
    </>
  );
}
