import React from 'react';
import { typeColors, typeChart } from '../data/typeData';

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

export default function TypeChart({ selectedType, setSelectedType }) {
  const types = Object.keys(typeChart);

  // Helper to get offensive effectiveness
  const getOffensiveRelations = (attackingType) => {
    const relations = typeChart[attackingType];
    const superEffective = [];
    const notVeryEffective = [];
    const noEffect = [];

    Object.entries(relations).forEach(([defendingType, multiplier]) => {
      if (multiplier === 2) superEffective.push(defendingType);
      else if (multiplier === 0.5) notVeryEffective.push(defendingType);
      else if (multiplier === 0) noEffect.push(defendingType);
    });

    return { superEffective, notVeryEffective, noEffect };
  };

  // Helper to get defensive weaknesses and resistances
  const getDefensiveRelations = (defendingType) => {
    const weakTo = [];
    const resists = [];
    const immuneTo = [];

    types.forEach((attackingType) => {
      const multiplier = typeChart[attackingType][defendingType];
      if (multiplier === 2) weakTo.push(attackingType);
      else if (multiplier === 0.5) resists.push(attackingType);
      else if (multiplier === 0) immuneTo.push(attackingType);
    });

    return { weakTo, resists, immuneTo };
  };

  const handleTypeClick = (type) => {
    if (selectedType === type) {
      setSelectedType(null); // toggle off
    } else {
      setSelectedType(type);
    }
  };

  const activeRelations = selectedType ? {
    offense: getOffensiveRelations(selectedType),
    defense: getDefensiveRelations(selectedType)
  } : null;

  return (
    <div className="type-chart-section">
      <div className="ui-card-title">
        <span>ตารางธาตุ 18 Types Grid</span>
        {selectedType && (
          <button className="clear-btn" onClick={() => setSelectedType(null)}>
            Reset
          </button>
        )}
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        เลือกธาตุเพื่อวิเคราะห์ประสิทธิภาพในการโจมตีและการป้องกัน
      </p>

      {/* Grid of Types */}
      <div className="types-grid">
        {types.map((type) => {
          const isSelected = selectedType === type;
          const isDimmed = selectedType && selectedType !== type;
          
          return (
            <div
              key={type}
              className={`type-badge ${isSelected ? 'selected' : ''} ${isDimmed ? 'dimmed' : ''}`}
              style={{
                backgroundColor: typeColors[type],
                '--shadow-color': typeColors[type]
              }}
              onClick={() => handleTypeClick(type)}
            >
              {typeNamesTh[type].split(' ')[0]}
            </div>
          );
        })}
      </div>

      {/* Info Card when a Type is Selected */}
      {selectedType && activeRelations && (
        <div className="ui-card" style={{ marginTop: '1rem', border: `1px solid ${typeColors[selectedType]}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
            <span
              className="type-badge"
              style={{
                backgroundColor: typeColors[selectedType],
                padding: '0.4rem 1rem',
                fontSize: '0.9rem',
                cursor: 'default'
              }}
            >
              {typeNamesTh[selectedType]}
            </span>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>ข้อมูลความสัมพันธ์ของธาตุ</span>
          </div>

          {/* Offense Panel */}
          <div style={{ marginBottom: '1.2rem' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--neon-cyan)', marginBottom: '0.5rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.2rem' }}>
              ⚔️ ประสิทธิภาพการโจมตี (Offensive Power)
            </div>
            
            <div className="multiplier-section">
              {activeRelations.offense.superEffective.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x2">2.0x ชนะทาง</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.offense.superEffective.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeRelations.offense.notVeryEffective.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x05">0.5x แพ้ทาง</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.offense.notVeryEffective.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeRelations.offense.noEffect.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x0">0.0x ไร้ผล</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.offense.noEffect.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Defense Panel */}
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--neon-green)', marginBottom: '0.5rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.2rem' }}>
              🛡️ ประสิทธิภาพการป้องกัน (Defensive Vulnerability)
            </div>
            
            <div className="multiplier-section">
              {activeRelations.defense.weakTo.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x2">2.0x แพ้ทาง</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.defense.weakTo.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeRelations.defense.resists.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x05">0.5x ต้านทาน</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.defense.resists.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeRelations.defense.immuneTo.length > 0 && (
                <div className="multiplier-row">
                  <span className="multiplier-label x0">0.0x ต้านทานสมบูรณ์</span>
                  <div className="type-hint-box" style={{ marginTop: 0 }}>
                    {activeRelations.defense.immuneTo.map(t => (
                      <span key={t} className="mini-badge" style={{ backgroundColor: typeColors[t] }}>
                        {typeNamesTh[t].split(' ')[0]}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
