// Button.jsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function Button({
  children,
  variant = 'contained',   
  color = 'primary',       
  size = 'medium',         
  startIcon = null,       
  endIcon = null,
  onClick = () => {},
  disabled = false,
  fullWidth = false,
  sx = {},                 // additional custom styles using MUI's sx prop
  type = 'button'         
}) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      sx={sx}
      type={type}
    >
      {children}
    </MuiButton>
  );
}
