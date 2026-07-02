import React from 'react';

export default function TypeIcon({ type, size = 16 }) {
  const iconStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    flexShrink: 0
  };

  switch (type) {
    case 'normal':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        </svg>
      );
    case 'fire':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 16.5 6 16.5 11C16.5 15.5 13 18.5 12 21.5C11 18.5 7.5 15.5 7.5 11C7.5 6 12 2 12 2Z" />
          <path d="M12 8C12 8 14 10.5 14 12.5C14 14.5 13 16 12 17.5C11 16 10 14.5 10 12.5C10 10.5 12 8 12 8Z" fill="rgba(255,255,255,0.75)" />
        </svg>
      );
    case 'water':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5C12 2.5 19 9.5 19 14.5C19 18.5 15.8 21.5 12 21.5C8.2 21.5 5 18.5 5 14.5C5 9.5 12 2.5 12 2.5Z" />
        </svg>
      );
    case 'grass':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 2C17 2 11 5 8 9C5 13 5 17 5 17C5 17 9 17 13 14C17 11 20 5 20 5C20 5 18 4.5 17 2Z" />
          <path d="M5.5 16.5L13 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'electric':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15 2L5 13.5H11.5L9 22L19 10.5H12.5L15 2Z" />
        </svg>
      );
    case 'ice':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'fighting':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M4 20L20 4M20 20L4 4" />
          <path d="M7 17l-3 3M17 17l3 3" strokeWidth="3.5" />
        </svg>
      );
    case 'poison':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="11" width="12" height="10" rx="3" />
          <path d="M9.5 11V3h5v8h-5Z" />
          <circle cx="10" cy="15" r="1.2" fill="white" />
          <circle cx="14" cy="18" r="0.8" fill="white" />
        </svg>
      );
    case 'ground':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
          <path d="M4 6h16M2 12h20M6 18h12" />
        </svg>
      );
    case 'flying':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 10C6.5 6 12.5 6 21.5 4C17.5 10 13.5 14.2 2.5 20C6.5 16 10.5 12 2.5 10Z" />
        </svg>
      );
    case 'psychic':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M2 12S6 4 12 4s10 8 10 8s-4 8-12 8S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'bug':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="6" />
          <path d="M9 5l-2.5-3M15 5l2.5-3M5 12H2M19 12h3M7 18l-2 3M17 18l2-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case 'rock':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 8.5L5 20H19L21 8.5L12 2Z" />
        </svg>
      );
    case 'ghost':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5c-3.8 0-7 3.1-7 7v9.5c0 .6.7.8 1.1.4l1.4-1.4l1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4l1.4 1.4c.4.4 1 .4 1.4 0l1.4-1.4l1.4 1.4c.4.4 1.1.2 1.1-.4v-9.5c0-3.9-3.2-7-7-7Z" />
          <circle cx="9.5" cy="10" r="1.2" fill="black" />
          <circle cx="14.5" cy="10" r="1.2" fill="black" />
        </svg>
      );
    case 'dragon':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 5 4.5 12 4.5 12c0 0 3.5 0 7.5-2c4 2 7.5 2 7.5 2c0 0-2-7-7.5-10Z" />
          <path d="M12 10V22" stroke="white" strokeWidth="2.5" />
        </svg>
      );
    case 'dark':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 1 0 9 9 9.8 9.8 0 0 1-9-9Z" />
        </svg>
      );
    case 'steel':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6c0 5.5 3.5 10.2 8 12c4.5-1.8 8-6.5 8-12V5l-8-3Z" />
        </svg>
      );
    case 'fairy':
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2Z" />
        </svg>
      );
    default:
      return null;
  }
}
