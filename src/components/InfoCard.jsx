import React from 'react';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function InfoCard({ title, description, githubUrl, websiteUrl, text, icons, isProject = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-sm w-[300px] h-auto m-4"
      style={{ height:'400px' }}
    >
      <Paper
        elevation={4}
        sx={{
          backgroundColor: '#1e1e2f',
          padding: '1.5rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          width: '300px',
          height: '400px',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: '1rem',
            fontFamily: "'Merriweather', serif",
            color: '#f8f1da',
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>

        {isProject && description && (
          <Typography
            variant="h5"
            sx={{
              color: '#f8f1da',
              fontSize: '0.95rem',
              marginBottom: '1rem',
            }}
          >
            {description}
          </Typography>
        )}

        {/* For Project */}
        {isProject && (
          <div className="flex justify-center gap-4 mt-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(90deg, #836fe9, #2f99e4, rgb(203, 83, 237))'
                }}
                aria-label={`GitHub repository for ${title}`}
              >
                <i className="FaGithub" />
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
            )}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white font-bold py-2 px-4 rounded transition duration-300 hover:opacity-90"
                style={{
                  background: 'linear-gradient(90deg, #836fe9, #2f99e4, rgb(203, 83, 237))'
                }}
                aria-label={`Website for ${title}`}
              >
                <i className="FaGlobe" />
                <FaGlobe size={20} />
                <span>Website</span>
              </a>
            )}
          </div>
        )}

        {isProject && text && (
          <Typography
            variant="body1"
            className="mt-4 block"
            sx={{
              color: '#f8f1da',
              marginTop: '1rem',
              fontStyle: 'italic',
            }}
          >
            {text}
          </Typography>
        )}

        {/* For SkillCard */}
        {!isProject && icons && (
          <div className="flex flex-wrap justify-center gap-6 w-full mt-2">
            {icons.map(({ Icon, label, color }) => (
              <div
                key={label}
                title={label}
                aria-label={label}
                className="flex flex-col items-center cursor-pointer transition-transform duration-300"
                style={{ color: '#f8f1da' }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = color;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#f8f1da';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={48} />
                <Typography
                  variant="body2"
                  className="mt-2"
                  sx={{ color: '#f8f1da'  }}
                >
                  {label}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </Paper>
    </motion.div>
  );
}

export default InfoCard;
