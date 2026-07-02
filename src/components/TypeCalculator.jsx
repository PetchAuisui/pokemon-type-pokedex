import React, { useState } from 'react';
import { typeColors, typeChart, pokemonDatabase } from '../data/typeData';
import { typeNamesTh } from './TypeChart';

export default function TypeCalculator({
  calculatorTypes,
  setCalculatorTypes,
  selectedPokemon,
  setSelectedPokemon
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const types = Object.keys(typeChart);

  // Search filter
  const filteredPokemon = pokemonDatabase.filter(pokemon => {
    const term = searchTerm.toLowerCase();
    return (
      pokemon.nameEn.toLowerCase().includes(term) ||
      pokemon.nameTh.includes(term)
    );
  }).slice(0, 5); // limit to 5 suggestions

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
    if (!e.target.value) {
      setShowSuggestions(false);
    }
  };

  const handleSelectPokemon = (pokemon) => {
    setCalculatorTypes(pokemon.types);
    setSelectedPokemon(pokemon);
    setSearchTerm(`${pokemon.nameEn} (${pokemon.nameTh})`);
    setShowSuggestions(false);
  };

  const handleTypeToggle = (type) => {
    setSelectedPokemon(null); // Clear selected pokemon name if they manually change types
    if (calculatorTypes.includes(type)) {
      setCalculatorTypes(calculatorTypes.filter(t => t !== type));
    } else {
      if (calculatorTypes.length < 2) {
        setCalculatorTypes([...calculatorTypes, type]);
      } else {
        // Replace the second type if already selected 2
        setCalculatorTypes([calculatorTypes[0], type]);
      }
    }
  };

  const clearCalculator = () => {
    setCalculatorTypes([]);
    setSelectedPokemon(null);
    setSearchTerm('');
  };

  // Calculate defensive profile
  const getDefensiveProfile = () => {
    if (calculatorTypes.length === 0) return null;

    const profile = {
      x4: [],
      x2: [],
      x1: [],
      x05: [],
      x025: [],
      x0: []
    };

    types.forEach(attackingType => {
      let multiplier = 1;
      calculatorTypes.forEach(defendingType => {
        multiplier *= typeChart[attackingType][defendingType];
      });

      if (multiplier === 4) profile.x4.push(attackingType);
      else if (multiplier === 2) profile.x2.push(attackingType);
      else if (multiplier === 1) profile.x1.push(attackingType);
      else if (multiplier === 0.5) profile.x05.push(attackingType);
      else if (multiplier === 0.25) profile.x025.push(attackingType);
      else if (multiplier === 0) profile.x0.push(attackingType);
    });

    return profile;
  };

  const defensiveProfile = getDefensiveProfile();

  return (
    <div className="type-calculator-section">
      <div className="ui-card-title">
        <span>คำนวณการแพ้ทางธาตุคู่ (Dual-Type Calculator)</span>
        {(calculatorTypes.length > 0 || searchTerm) && (
          <button className="clear-btn" onClick={clearCalculator}>
            ล้างข้อมูล
          </button>
        )}
      </div>

      {/* Pokemon Search Box */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 ค้นหาโปเกมอน (เช่น Pikachu, ลิซาร์ดอน)..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        {showSuggestions && filteredPokemon.length > 0 && (
          <div className="search-results">
            {filteredPokemon.map(pokemon => (
              <div
                key={pokemon.id}
                className="search-item"
                onMouseDown={() => handleSelectPokemon(pokemon)}
              >
                <div>
                  <strong>{pokemon.nameEn}</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginLeft: '0.5rem' }}>
                    ({pokemon.nameTh})
                  </span>
                </div>
                <div className="search-item-types">
                  {pokemon.types.map(t => (
                    <span
                      key={t}
                      className="mini-badge"
                      style={{ backgroundColor: typeColors[t] }}
                    >
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Custom Type Selector Buttons */}
      <div className="ui-card" style={{ marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
          เลือกธาตุของโปเกมอนเอง (เลือกได้สูงสุด 2 ธาตุ)
        </div>
        
        <div className="types-grid">
          {types.map(type => {
            const isSelected = calculatorTypes.includes(type);
            const index = calculatorTypes.indexOf(type);
            
            return (
              <div
                key={type}
                className={`type-badge ${isSelected ? 'selected' : ''}`}
                style={{
                  backgroundColor: typeColors[type],
                  '--shadow-color': typeColors[type],
                  position: 'relative'
                }}
                onClick={() => handleTypeToggle(type)}
              >
                {typeNamesTh[type].split(' ')[0]}
                {isSelected && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    background: '#1e293b',
                    color: 'var(--neon-cyan)',
                    fontSize: '0.55rem',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--neon-cyan)'
                  }}>
                    {index + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Badges Preview */}
        {calculatorTypes.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ธาตุที่เลือก:</span>
            {calculatorTypes.map((t, idx) => (
              <span
                key={t}
                className="type-badge"
                style={{ backgroundColor: typeColors[t], padding: '0.2rem 0.6rem', fontSize: '0.75rem', cursor: 'default' }}
              >
                {typeNamesTh[t]}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Calculation Results */}
      {calculatorTypes.length > 0 && defensiveProfile && (
        <div className="ui-card">
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', borderBottom: '1px solid #1e293b', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            📈 ตารางวิเคราะห์ความเสียหายที่จะได้รับ (Defensive Profile)
          </div>

          <div className="multiplier-section">
            {defensiveProfile.x4.length > 0 && (
              <div className="multiplier-row">
                <span className="multiplier-label x4">4.0x แพ้มาก</span>
                <div className="type-hint-box" style={{ marginTop: 0 }}>
                  {defensiveProfile.x4.map(t => (
                    <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {defensiveProfile.x2.length > 0 && (
              <div className="multiplier-row">
                <span className="multiplier-label x2">2.0x แพ้ทาง</span>
                <div className="type-hint-box" style={{ marginTop: 0 }}>
                  {defensiveProfile.x2.map(t => (
                    <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {defensiveProfile.x05.length > 0 && (
              <div className="multiplier-row">
                <span className="multiplier-label x05">0.5x ต้านทาน</span>
                <div className="type-hint-box" style={{ marginTop: 0 }}>
                  {defensiveProfile.x05.map(t => (
                    <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {defensiveProfile.x025.length > 0 && (
              <div className="multiplier-row">
                <span className="multiplier-label x025">0.25x ต้านทานมาก</span>
                <div className="type-hint-box" style={{ marginTop: 0 }}>
                  {defensiveProfile.x025.map(t => (
                    <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {defensiveProfile.x0.length > 0 && (
              <div className="multiplier-row">
                <span className="multiplier-label x0">0.0x ไร้ผล</span>
                <div className="type-hint-box" style={{ marginTop: 0 }}>
                  {defensiveProfile.x0.map(t => (
                    <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* If there are no special multipliers, display a note */}
            {defensiveProfile.x4.length === 0 &&
             defensiveProfile.x2.length === 0 &&
             defensiveProfile.x05.length === 0 &&
             defensiveProfile.x025.length === 0 &&
             defensiveProfile.x0.length === 0 && (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
                ได้รับความเสียหาย 1.0x (ปกติ) จากทุกธาตุ
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
