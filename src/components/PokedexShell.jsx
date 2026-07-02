import React, { useState } from 'react';

export default function PokedexShell({ 
  children, 
  activeTab, 
  setActiveTab, 
  leftScreenContent 
}) {
  const [sensorActive, setSensorActive] = useState(true);

  return (
    <div className="pokedex-container">
      {/* Pokedex Top Bar */}
      <div className="pokedex-header">
        <div 
          className={`pokedex-sensor ${sensorActive ? 'active' : ''}`}
          onClick={() => setSensorActive(!sensorActive)}
          title="Click to toggle scanner pulse"
        />
        <div className="led-group">
          <div className="led red" />
          <div className="led yellow" />
          <div className="led green" />
        </div>
        <div className="pokedex-title">POKÉ-TYPE DEX</div>
      </div>

      {/* Main split panels */}
      <div className="pokedex-body">
        {/* Left Side: Holographic LCD Screen & Tab Control */}
        <div className="pokedex-left">
          <div className="screen-wrapper">
            <div className="screen-screen">
              {leftScreenContent}
            </div>
          </div>
          
          {/* Controls to Switch Tabs */}
          <div className="tab-container">
            <button 
              className={`tab-btn ${activeTab === 'analyzer' ? 'active' : ''}`}
              onClick={() => setActiveTab('analyzer')}
            >
              📊 Pokedex Scan
            </button>
            <button 
              className={`tab-btn ${activeTab === 'sim' ? 'active' : ''}`}
              onClick={() => setActiveTab('sim')}
            >
              ⚔️ Simulator
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Controls / Selected Tab View */}
        <div className="pokedex-right">
          <div className="pokedex-right-content">
            {children}
          </div>

          {/* D-Pad and retro Pokedex action buttons decoration */}
          <div className="pokedex-decorations">
            <div className="dpad">
              <div className="dpad-btn dpad-center" />
              <div className="dpad-btn dpad-up" />
              <div className="dpad-btn dpad-down" />
              <div className="dpad-btn dpad-left" />
              <div className="dpad-btn dpad-right" />
            </div>
            
            <div className="pokedex-buttons">
              <div className="black-button-long" />
              <div className="black-button-long" />
              <div 
                className="green-button-circle" 
                onClick={() => setSensorActive(prev => !prev)}
                title="Trigger scan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
