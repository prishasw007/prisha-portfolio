import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTimes, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaSun, FaMoon, FaArrowAltCircleUp } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiCplusplus, SiHtml5, SiCss3, SiUnrealengine, SiTailwindcss, SiMui } from 'react-icons/si';
import { FaUnity } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
import ExperienceCard from './ExperienceCard';
import Button from './Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import InfoCard from './InfoCard';
import { Box, Typography, Stack } from '@mui/material';


export default function HomePage() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const experiences = [
    {
      company: 'Xoxoday',
      logo: './Xoxoday_Logo.jpg',
      role: 'Full Stack Web Development Intern',
      location: 'Bengaluru, India',
      duration: 'June 2025 – Present',
      description: 'Building and scaling Loyalife through full-stack development using React, Node.js, and Express.',
    },
    {
      company: 'MaizeTix',
      logo: './maizetix.png',
      role: 'Software Developer',
      location: 'Ann Arbor, MI',
      duration: 'Jan 2025 – Present',
      description: 'Built full-stack ticketing app MaizeTix with APIs, PostgreSQL, Stripe, and automated microservices integration.',
    },
    {
      company: 'Lotus Petal Foundation',
      logo: './lotus.png',
      role: 'Campaign Manager',
      location: 'Bengaluru, India',
      duration: 'May 2023 – Dec 2023',
      description: 'Led the “Pad for Every Girl” campaign at Lotus Petal, raising $1700+ and promoting menstrual hygiene awareness in rural parts of Bengaluru.',
    }
  ];
  const projects = [
    {
      title: "WonderToon",
      description:
        "An AI-powered image generation web app built for AWS Hackathon 2025. This project integrates multiple AI services to create and enhance images based on user prompts.",
      githubUrl: "https://github.com/prishasw007/AWS-Hackathon-2025",
      websiteUrl: "https://your-backend-4r1z.onrender.com",
      text: "React.js | HTML | CSS | JavaScript | Google AI, OpenAI & Stability AI API",
    },
    {
      title: "Weather App",
      description:
        "A simple, responsive weather app built using HTML, CSS, and JS. Users can enter any city name and get real-time weather updates.",
      githubUrl: "https://github.com/prishasw007/Weather-App",
      text: "React.js | HTML | CSS | JavaScript | OpenWeather API",
    },
    {
      title: "Rocket Science",
      description:
        "This project simulates rocket trajectories using numerical methods to calculate velocity, height, and fuel optimization under varying conditions.",
      githubUrl: "https://github.com/prishasw007/Rocket-Science",
      text: "C++",
    },
  ];


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
    { Icon: SiUnrealengine, label: 'Unreal Engine', color: '#007396' },
    { Icon: SiMui , label: 'MUI', color:'#007396'},
    { Icon: SiTailwindcss, label: 'Tailwind CSS', color:'#007396'}
  ];

  const toolsIcons = [
    { Icon: FaGitAlt, label: 'Git', color: '#007396' },
    { Icon: BiLogoVisualStudio, label: 'VS Code', color: '#007396' }
  ];

  const skillSections = [
    { title: "Languages", icons: languageIcons },
    { title: "Technologies & Frameworks", icons: techIcons },
    { title: "Developer Tools", icons: toolsIcons },
  ];


  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill all fields.');
      return;
    }

    console.log('Contact form submitted:', formData);
    setFormStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });

  };

  const [showNav, setShowNav] = useState(true);

  const handleToggle = () => {
    setShowNav(prev => !prev);
  };


  return (
    <>
      <header className='header-nav'>
        <title>Prisha Swaroop</title>
      </header>

      <main className={`container ${darkMode ? 'dark-mode' : 'light-mode'}`} role="main">
        <Box component="section" id="hero" aria-label="Introduction" sx={{ px: 2, py: 6 }}>
          <Box className="relative flex justify-between items-center max-w-full gap-4 left-5">
            {/* Left Buttons (Hamburger / Close + Nav) */}
            <Box className="left-buttons" sx={{ display: 'flex', flexDirection: 'column' }}>
              {/* Hamburger Icon */}
              {
                !showNav && (
                  <Button
                    onClick={handleToggle}
                    aria-label="Open navigation"
                    variant="text"
                    sx={{
                      fontSize: '1.5rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.75rem',
                      background: 'none',
                      color: 'inherit',
                      position: 'relative',
                      zIndex: 2000,
                      display: { xs: 'flex', md: 'none' },
                    }}
                  >
                    &#9776;
                  </Button>
                )
              }

              {/* Close Icon for Mobile Nav */}
              {showNav && isMobile && (
                <Button
                  onClick={handleToggle}
                  aria-label="Close navigation"
                  variant="text"
                  sx={{
                    minWidth: '2rem',
                    minHeight: '2rem',
                    color: 'red',
                    background: 'none',
                    position: 'relative',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FaTimes size={20} />
                </Button>
              )}

              {/* Mobile Nav Menu (overlay, only on small screens when open) */}
              {showNav && isMobile && (
                <nav className="fixed inset-0 z-50 bg-[#1e1e1e] flex flex-col items-center justify-center gap-10 text-[1.75rem] text-[#f8f1da] md:hidden"
                  style={{ fontFamily: "'Merriweather', serif" }}>
                  <a href="#about" onClick={() => setShowNav(false)} className="gradient-underline">About</a>
                  <a href="#experiences" onClick={() => setShowNav(false)} className="gradient-underline">Experience</a>
                  <a href="#projects" onClick={() => setShowNav(false)} className="gradient-underline">Projects</a>
                  <a href="#skills" onClick={() => setShowNav(false)} className="gradient-underline">Skills</a>
                  <a href="#contact" onClick={() => setShowNav(false)} className="gradient-underline">Contact Me</a>
                </nav>
              )}

              {/* Desktop Nav (always shown on md and above) */}
              <Box className="hidden md:flex gap-8 text-[1.75rem] text-[#f8f1da] " style={{ fontFamily: "'Merriweather', serif" }}>
                <a href="#about" className="gradient-underline font-semibold text-[#f8f1da] transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05]">About</a>
                <a href="#experiences" className="gradient-underline font-semibold text-[#f8f1da] transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05]">Experience</a>
                <a href="#projects" className="gradient-underline font-semibold text-[#f8f1da] transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05]">Projects</a>
                <a href="#skills" className="gradient-underline font-semibold text-[#f8f1da] transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05]">Skills</a>
                <a href="#contact" className="gradient-underline font-semibold text-[#f8f1da] transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05]">Contact Me</a>
              </Box>



            </Box>

            {/* Right Buttons (Dark Mode Toggle + Scroll to Top) */}
            <Box className="right-buttons">
              <Button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                variant='text'
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                sx={{
                  position: 'fixed',
                  top: '1rem',
                  right: '1rem',
                  zIndex: 2000,
                  minWidth: 0,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  padding: 0,
                  backgroundColor: 'transparent',
                  color: 'inherit',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
              </Button>

              {/* Scroll to Top Button */}
              {showScrollTop && (
                <Button
                  onClick={scrollToTop}
                  aria-label="Scroll to top"
                  variant="text"
                  sx={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '1.5rem',
                    zIndex: 2000,
                    backgroundColor: 'transparent',
                    color: 'white',
                    minWidth: '2rem',
                    minHeight: '2rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <FaArrowAltCircleUp size={32} />
                </Button>
              )}
            </Box>
          </Box>

          {/* Name and Typewriter Text */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "'Merriweather', serif",
                fontSize: '6rem',
                fontWeight: 700,
                color: '#f8f1da',
                textAlign: 'center',
                lineHeight: 2,
                mt: '120px',
              }}
            >
              Prisha Swaroop
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 6,
                pb: 0.3,
                fontSize: '3rem',
                fontWeight: 'bold',
                fontFamily: "'Merriweather', serif",
                color: '#f8f1da',
                textAlign: 'center',
              }}
            >
              <Typewriter
                words={['Software Engineer', 'Michigan Wolverine', 'Problem Solver', 'Builder']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </Typography>
          </Box>

          {/* Social Icons */}
          <Box className="icons" sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 4 }}>
            <a href="mailto:pswaroop@umich.edu" aria-label="Email" title="Email" className="transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05] text-[#f8f1da]">
              <FaEnvelope size={50} />
            </a>
            <a href="https://www.linkedin.com/in/prisha-swaroop-85090b275/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05] text-[#f8f1da]">
              <FaLinkedin size={50} />
            </a>
            <a href="https://github.com/prishasw007" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="transition duration-300 ease-in-out hover:text-[#836fe9] hover:scale-[1.05] text-[#f8f1da]">
              <FaGithub size={50} />
            </a>
          </Box>
        </Box>

        <Box className="w-20 h-0.5 my-8 mx-auto bg-white/30 rounded transition-opacity duration-400" />

        {/*About Me*/}
        <Box
          component="section"
          id="about"
          className="min-h-screen w-full py-24 px-8 flex flex-col items-center"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              pb: 0.3,
              fontSize: '3rem',
              fontWeight: 'bold',
              fontFamily: "'Merriweather', serif",
              color: '#f8f1da',
              textAlign: 'center',
            }}
          >
            About Me
          </Typography>

          {/* Stack with responsive direction */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={6}
            alignItems="center"
            justifyContent="center"
            className="max-w-5xl mx-auto w-full"
          >
            {/* Image on the left */}
            <Box
              component="img"
              src="./photo1.jpeg"
              alt="Prisha Swaroop"
              className="w-full max-w-xs rounded-xl border-4 border-black shadow-lg"
              sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}
            />

            {/* Text on the right */}
            <Typography
              component="p"
              sx={{
                fontSize: '1.3rem',            // exactly 1.3 rem = 20.8px
                fontWeight: 'bold',            // font-weight: bold
                fontFamily: "'Montserrat', sans-serif",  // font family as in your CSS
                lineHeight: 1.8,               // line-height: 1.8
                color: '#f8f1da',             // text color
                marginBottom: '3rem',          // margin-bottom: 3rem
              }}
            >
              Hey I'm Prisha,
              <br />
              I'm a Computer Science student at the University of Michigan, passionate about building at the
              intersection of technology and creativity.
              <br />
              Whether it's game development, AI, or web development, I love using code to solve real-world
              problems and craft engaging digital experiences. Go Blue〽️
            </Typography>
          </Stack>
        </Box>


        <Box className="w-20 h-0.5 my-8 mx-auto bg-white/30 rounded transition-opacity duration-400" />

        {/*Experience*/}
        <Box
          component="section"
          id="experiences"
          className="w-full min-h-screen py-16 px-4"
        >
          <Typography
            variant="h2"
            component="h2"
            className="mb-6 pb-1 text-center font-serif font-bold text-[3rem] text-[#f8f1da]"
            sx={{ fontFamily: "'Merriweather', serif" }}
          >
            Experience
          </Typography>

          {/* flex-col on mobile, flex-row on md+ */}
          <Box
            className="flex flex-wrap justify-center gap-8 p-4 max-w-full"
          >
            {experiences?.map((exp) => (
              <ExperienceCard key={exp?.company} {...exp} />
            ))}
          </Box>
        </Box>

        <Box className="w-20 h-0.5 my-8 mx-auto bg-white/30 rounded transition-opacity duration-400" />

        {/* Projects Section */}
        <Box
          component="section"
          id="projects"
          className="w-full min-h-screen py-16 px-4"
        >
          <Typography
            variant="h2"
            component="h2"
            className="mb-6 pb-1 text-center font-serif font-bold text-[3rem] text-[#f8f1da]"
            sx={{ fontFamily: "'Merriweather', serif" }}
          >
            Projects
          </Typography>

          <Box className="flex flex-wrap justify-center gap-8 p-4 max-w-full">
            {projects?.map((project, index) => (
              <InfoCard
                key={index}
                isProject={true}
                title={project?.title}
                description={project?.description}
                githubUrl={project?.githubUrl}
                websiteUrl={project?.websiteUrl}
                text={project?.text}
              />
            ))}
          </Box>
        </Box>
        <Box className="w-20 h-0.5 my-8 mx-auto bg-white/30 rounded transition-opacity duration-400" />

        {/* Skills Section */}
        <Box id="skills" className="w-full min-h-screen py-16 px-4">
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              pb: 0.3,
              fontSize: '3rem',
              fontWeight: 'bold',
              fontFamily: "'Merriweather', serif",
              color: '#f8f1da',
              textAlign: 'center',
            }}
          >Skills</Typography>

          <Box className="flex flex-wrap justify-center gap-8 p-4 max-w-full">
            {skillSections.map(({ title, icons }) => (
              <InfoCard
                key={title}
                title={title}
                icons={icons}
                isProject={false}
              />
            ))}
          </Box>
        </Box>

        <Box className="w-20 h-0.5 my-8 mx-auto bg-white/30 rounded transition-opacity duration-400" />

        {/*Contact Me*/}
        <Box
          component="section"
          id="contact"
          className="py-16 px-4 text-[#1e1e2f] text-center"
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "'Merriweather', serif",
              fontWeight: 'bold',
              fontSize: '3rem',
              color: '#f8f1da',
              marginBottom: '1.5rem',
            }}
          >
            Contact Me
          </Typography>

          <Box className="max-w-[60vw] my-16 mx-auto mb-24 rounded-xl p-8 shadow-lg bg-transparent">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label
                htmlFor="name"
                className="text-xl text-[#f8f1da] text-left font-medium"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full py-3 px-4 text-base border border-gray-300 rounded-lg bg-white text-gray-800 transition duration-300 ease-in-out
          focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
              />

              <label
                htmlFor="email"
                className="text-xl text-[#f8f1da] text-left font-medium"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full py-3 px-4 text-base border border-gray-300 rounded-lg bg-white text-gray-800 transition duration-300 ease-in-out
          focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
              />

              <label
                htmlFor="message"
                className="text-xl text-[#f8f1da] text-left font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full py-3 px-4 text-base border border-gray-300 rounded-lg bg-white text-gray-800 transition duration-300 ease-in-out resize-vertical
          focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-300"
              ></textarea>

              <Button
                sx={{
                  background:
                    'linear-gradient(90deg, #836fe9, #2f99e4, rgb(203, 83, 237))',
                  borderRadius: '1rem',
                  mt: 2,
                  fontSize: '1.5rem',
                  color: 'white',
                  '&:hover': {
                    background:
                      'linear-gradient(90deg, #2f99e4, #836fe9, rgb(203, 83, 237))',
                  },
                }}
                type="submit"
                variant="contained"
              >
                SEND MESSAGE
              </Button>
            </form>

            {formStatus && (
              <Typography
                component="p"
                sx={{ color: '#f8f1da', fontWeight: 'bold', mt: 4, textAlign: 'center' }}
              >
                {formStatus}
              </Typography>
            )}
          </Box>
        </Box>


      </main>
    </>
  );
}
