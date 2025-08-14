import React from 'react';
import { Box, Card, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

// Styled flip card container
const FlipCard = styled(Box)(({ theme }) => ({
  perspective: '1000px',
  width: '100%',        // full width on mobile (stacked)
  maxWidth: 300,        // max width on md+ screens
  height: 400,
  margin: '1rem 0',     // vertical margin on mobile
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    margin: '1rem',     // margin on all sides on desktop
  },
  '&:hover .flip-card-inner': {
    transform: 'rotateY(180deg)',
  },
}));

// Inner part that flips
const FlipCardInner = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  borderRadius: 8,
});

// Front and back sides
const FlipCardFront = styled(Card)({
  position: 'absolute',
  width: '18.75rem',
  height: '25rem',
  backfaceVisibility: 'hidden',
  backgroundColor: '#1e1e2f',
  borderRadius: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',    // Center horizontally
  padding: '1rem',
  gap: '0.5rem',           // Spacing between avatar and texts
});

const FlipCardBack = styled(Card)({
  position: 'absolute',
  width: '18.75rem',
  height: '25rem',
  backfaceVisibility: 'hidden',
  backgroundColor: '#1e1e2f',
  borderRadius: 8,
  transform: 'rotateY(180deg)',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

function ExperienceCard({ companyName, logo, jobTitle, location, duration, description }) {
  return (
    <FlipCard>
      <FlipCardInner className="flip-card-inner">
        <FlipCardFront>
          <Avatar
            alt={`${companyName} logo`}
            src={logo}
            sx={{ width: 56, height: 56, marginBottom: '1rem' }}
            variant="square"
          />
          <Typography
            fontFamily="'Merriweather', serif"
            variant="h4"
            gutterBottom
            color="#f8f1da"
          >
            {companyName}
          </Typography>
          <Typography
            fontFamily="'Merriweather', serif"
            variant="h5"
            sx={{ mb: 1 }}
            color="#f8f1da"
          >
            {jobTitle}
          </Typography>
          <Typography
            fontFamily="'Merriweather', serif"
            variant="h6"
            color="#f8f1da"
          >
            🏢 {location}
          </Typography>
          <Typography
            fontFamily="'Merriweather', serif"
            variant="h6"
            color="#f8f1da"
          >
            📅 {duration}
          </Typography>
        </FlipCardFront>
        <FlipCardBack>
          <Typography
            fontFamily="'Merriweather', serif"
            variant="h5"
            color="#f8f1da"
          >
            {description}
          </Typography>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCard>
  );
}

export default ExperienceCard;
