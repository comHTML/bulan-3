import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);
  const paragraphStyle = {
    color: theme === 'light' ? '#ff7300ff' : '#fff',
    backgroundColor: theme === 'light' ? '#fff' : '#ff7300ff',
    padding: '10px',
    borderRadius: '5px'
  };
  return (
    <p style={paragraphStyle}>
      Ini adalah paragraf dengan tema {theme}.
    </p>
  );
}