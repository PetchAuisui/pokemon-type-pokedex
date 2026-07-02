import React from 'react';
import { 
  Circle, 
  Flame, 
  Droplet, 
  Leaf, 
  Zap, 
  Snowflake, 
  Swords, 
  FlaskConical, 
  Layers, 
  Brain, 
  Bug, 
  Mountain, 
  Ghost, 
  Crown,
  Moon, 
  Shield, 
  Sparkles 
} from 'lucide-react';

export default function TypeIcon({ type, size = 16 }) {
  const iconStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    flexShrink: 0
  };

  switch (type) {
    case 'normal':
      return <Circle style={iconStyle} size={size} />;
    case 'fire':
      return <Flame style={iconStyle} size={size} />;
    case 'water':
      return <Droplet style={iconStyle} size={size} />;
    case 'grass':
      return <Leaf style={iconStyle} size={size} />;
    case 'electric':
      return <Zap style={iconStyle} size={size} />;
    case 'ice':
      return <Snowflake style={iconStyle} size={size} />;
    case 'fighting':
      return <Swords style={iconStyle} size={size} />;
    case 'poison':
      return <FlaskConical style={iconStyle} size={size} />;
    case 'ground':
      return <Layers style={iconStyle} size={size} />;
    case 'flying':
      // Symmetric twin wings representing flight in outline style
      return (
        <svg style={iconStyle} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Wing */}
          <path d="M10 6C6 6 3 9 1 13c2.5-1 5-1.5 7.5-.5C6 14.5 5 17 4.5 19.5c3-2 6.5-2 9.5-1.5c-.5-3.5-1.5-7.5-4-12Z" />
          {/* Right Wing */}
          <path d="M14 6C18 6 21 9 23 13c-2.5-1-5-1.5-7.5-.5c2.5 2 3.5 4.5 4 7c-3-2-6.5-2-9.5-1.5c.5-3.5 1.5-7.5 4-12Z" />
        </svg>
      );
    case 'psychic':
      return <Brain style={iconStyle} size={size} />;
    case 'bug':
      return <Bug style={iconStyle} size={size} />;
    case 'rock':
      return <Mountain style={iconStyle} size={size} />;
    case 'ghost':
      return <Ghost style={iconStyle} size={size} />;
    case 'dragon':
      return <Crown style={iconStyle} size={size} />;
    case 'dark':
      return <Moon style={iconStyle} size={size} />;
    case 'steel':
      return <Shield style={iconStyle} size={size} />;
    case 'fairy':
      return <Sparkles style={iconStyle} size={size} />;
    default:
      return null;
  }
}
