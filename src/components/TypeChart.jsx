import React, { useState } from 'react';
import { typeColors, typeChart, pokemonDatabase } from '../data/typeData';
import TypeIcon from './TypeIcon';

export const typeNamesTh = {
  normal: 'ปกติ (Normal)',
  fire: 'ไฟ (Fire)',
  water: 'น้ำ (Water)',
  grass: 'พืช (Grass)',
  electric: 'ไฟฟ้า (Electric)',
  ice: 'น้ำแข็ง (Ice)',
  fighting: 'ต่อสู้ (Fighting)',
  poison: 'พิษ (Poison)',
  ground: 'ดิน (Ground)',
  flying: 'บิน (Flying)',
  psychic: 'พลังจิต (Psychic)',
  bug: 'แมลง (Bug)',
  rock: 'หิน (Rock)',
  ghost: 'ผี (Ghost)',
  dragon: 'มังกร (Dragon)',
  dark: 'มืด (Dark)',
  steel: 'เหล็ก (Steel)',
  fairy: 'แฟรี่ (Fairy)'
};

export default function TypeChart({ 
  analyzerTypes, 
  setAnalyzerTypes, 
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
    setAnalyzerTypes(pokemon.types);
    setSelectedPokemon(pokemon);
    setSearchTerm(`${pokemon.nameEn} (${pokemon.nameTh})`);
    setShowSuggestions(false);
  };

  const handleTypeToggle = (type) => {
    setSelectedPokemon(null); // Clear selected pokemon name if manually toggling types
    if (analyzerTypes.includes(type)) {
      setAnalyzerTypes(analyzerTypes.filter(t => t !== type));
    } else {
      if (analyzerTypes.length < 2) {
        setAnalyzerTypes([...analyzerTypes, type]);
      } else {
        // Replace second type
        setAnalyzerTypes([analyzerTypes[0], type]);
      }
    }
  };

  const handleReset = () => {
    setAnalyzerTypes([]);
    setSelectedPokemon(null);
    setSearchTerm('');
  };

  return (
    <div className="type-analyzer-section" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="ui-card-title">
        <span>ค้นหาและวิเคราะห์ประเภทธาตุ (Type Pokedex Analyzer)</span>
        {(analyzerTypes.length > 0 || searchTerm) && (
          <button className="clear-btn" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>

      {/* Pokemon Autocomplete Search Bar */}
      <div className="search-container" style={{ marginBottom: '1rem' }}>
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
                      style={{ 
                        backgroundColor: typeColors[t],
                        display: 'inline-flex',
                        gap: '0.2rem',
                        alignItems: 'center'
                      }}
                    >
                      <TypeIcon type={t} size={10} />
                      {typeNamesTh[t].split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 18 Types Grid Card - Expanded to fill screen */}
      <div className="ui-card" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginBottom: 0, paddingBottom: '1rem' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.8rem' }}>
          เลือกประเภทธาตุบนตาราง (วิเคราะห์เดี่ยว หรือเลือกคู่เพื่อคำนวณความต้านทานสะสม)
        </div>

        <div className="types-grid" style={{ flexGrow: 1 }}>
          {types.map((type) => {
            const isSelected = analyzerTypes.includes(type);
            const isDimmed = analyzerTypes.length === 2 && !isSelected;
            const index = analyzerTypes.indexOf(type);
            
            return (
              <div
                key={type}
                className={`type-badge ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
                style={{
                  backgroundColor: typeColors[type],
                  '--shadow-color': typeColors[type],
                  display: 'flex',
                  gap: '0.4rem',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                onClick={() => handleTypeToggle(type)}
              >
                <TypeIcon type={type} size={14} />
                <span>{typeNamesTh[type].split(' ')[0]}</span>
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
                    border: '1px solid var(--neon-cyan)',
                    zIndex: 5
                  }}>
                    {index + 1}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Badges Preview */}
        {analyzerTypes.length > 0 && (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '0.8rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ธาตุที่วิเคราะห์อยู่:</span>
            {analyzerTypes.map((t) => (
              <span
                key={t}
                className="type-badge"
                style={{ 
                  backgroundColor: typeColors[t], 
                  padding: '0.3rem 0.8rem', 
                  fontSize: '0.75rem', 
                  cursor: 'default',
                  display: 'inline-flex',
                  gap: '0.3rem',
                  alignItems: 'center',
                  transform: 'none',
                  boxShadow: 'none'
                }}
              >
                <TypeIcon type={t} size={12} />
                {typeNamesTh[t]}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
