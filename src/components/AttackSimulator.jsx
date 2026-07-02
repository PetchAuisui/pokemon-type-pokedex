import React from 'react';
import { typeColors, typeChart } from '../data/typeData';
import { typeNamesTh } from './TypeChart';
import TypeIcon from './TypeIcon';

export default function AttackSimulator({
  simAttacker,
  setSimAttacker,
  simDefender1,
  setSimDefender1,
  simDefender2,
  setSimDefender2
}) {
  const types = Object.keys(typeChart);

  // Calculate effectiveness
  const calculateEffectiveness = () => {
    if (!simAttacker || !simDefender1) return null;
    
    let multiplier = typeChart[simAttacker][simDefender1];
    
    if (simDefender2) {
      // Don't multiply if types are identical
      if (simDefender1 !== simDefender2) {
        multiplier *= typeChart[simAttacker][simDefender2];
      }
    }
    
    return multiplier;
  };

  const multiplier = calculateEffectiveness();

  const getVerdict = (mult) => {
    if (mult === 4) return { text: 'ได้ผลอย่างยิ่งยวด! (4.0x)', class: 'x4', desc: 'ทำความเสียหายเพิ่มขึ้น 4 เท่า (ชนะทางดับเบิ้ล)' };
    if (mult === 2) return { text: 'ได้ผลอย่างยิ่ง! (2.0x)', class: 'x2', desc: 'ทำความเสียหายเพิ่มขึ้น 2 เท่า (ชนะทาง)' };
    if (mult === 1) return { text: 'ได้ผลปกติ (1.0x)', class: 'x1', desc: 'ทำความเสียหายปกติ (1 เท่า)' };
    if (mult === 0.5) return { text: 'ไม่ได้ผลดีเท่าไหร่... (0.5x)', class: 'x05', desc: 'ความเสียหายลดลงเหลือครึ่งหนึ่ง (ต้านทาน)' };
    if (mult === 0.25) return { text: 'ไม่ได้ผลดีอย่างยิ่ง... (0.25x)', class: 'x025', desc: 'ความเสียหายลดลงเหลือ 1 ใน 4 (ต้านทานดับเบิ้ล)' };
    if (mult === 0) return { text: 'ไม่มีผลเลย! (0.0x)', class: 'x0', desc: 'ไม่สร้างความเสียหายใด ๆ (มีภูมิคุ้มกัน)' };
    return { text: '-', class: 'x1', desc: '' };
  };

  const verdict = getVerdict(multiplier);

  const resetSimulator = () => {
    setSimAttacker('normal');
    setSimDefender1('normal');
    setSimDefender2('');
  };

  return (
    <div className="attack-simulator-section">
      <div className="ui-card-title">
        <span>จำลองการโจมตี (Attack Combat Simulator)</span>
        <button className="clear-btn" onClick={resetSimulator}>
          Reset
        </button>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
        เลือกธาตุสำหรับจำลองการต่อสู้ เพื่อคำนวณตัวคูณความเสียหายของการโจมตี
      </p>

      <div className="ui-card">
        <div className="simulator-picker">
          {/* Attacking Type */}
          <div className="simulator-row">
            <span className="simulator-label-text">🔴 ธาตุโจมตี:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexGrow: 1 }}>
              <span 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '6px', 
                  backgroundColor: typeColors[simAttacker],
                  color: 'white'
                }}
              >
                <TypeIcon type={simAttacker} size={16} />
              </span>
              <select 
                className="simulator-select"
                value={simAttacker}
                onChange={(e) => setSimAttacker(e.target.value)}
                style={{ borderLeft: `3px solid ${typeColors[simAttacker]}` }}
              >
                {types.map(t => (
                  <option key={t} value={t}>
                    {typeNamesTh[t].split(' ')[0]} ({t.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="simulator-vs">VS</div>

          {/* Defending Type 1 */}
          <div className="simulator-row">
            <span className="simulator-label-text">🔵 ธาตุรับ 1:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexGrow: 1 }}>
              <span 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '6px', 
                  backgroundColor: typeColors[simDefender1],
                  color: 'white'
                }}
              >
                <TypeIcon type={simDefender1} size={16} />
              </span>
              <select 
                className="simulator-select"
                value={simDefender1}
                onChange={(e) => setSimDefender1(e.target.value)}
                style={{ borderLeft: `3px solid ${typeColors[simDefender1]}` }}
              >
                {types.map(t => (
                  <option key={t} value={t}>
                    {typeNamesTh[t].split(' ')[0]} ({t.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Defending Type 2 */}
          <div className="simulator-row">
            <span className="simulator-label-text">🔵 ธาตุรับ 2:</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexGrow: 1 }}>
              <span 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '6px', 
                  backgroundColor: simDefender2 ? typeColors[simDefender2] : '#334155',
                  color: 'white'
                }}
              >
                {simDefender2 ? <TypeIcon type={simDefender2} size={16} /> : '?'}
              </span>
              <select 
                className="simulator-select"
                value={simDefender2}
                onChange={(e) => setSimDefender2(e.target.value)}
                style={{ borderLeft: simDefender2 ? `3px solid ${typeColors[simDefender2]}` : '1px solid #334155' }}
              >
                <option value="">-- ไม่มี (Single Type) --</option>
                {types.map(t => (
                  <option key={t} value={t}>
                    {typeNamesTh[t].split(' ')[0]} ({t.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Result Display */}
      {multiplier !== null && (
        <div className="damage-result-box" style={{ border: `2px solid ${typeColors[simAttacker]}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
            <span 
              className="type-badge" 
              style={{ 
                backgroundColor: typeColors[simAttacker], 
                padding: '0.2rem 0.6rem', 
                fontSize: '0.75rem',
                display: 'inline-flex',
                gap: '0.25rem',
                alignItems: 'center'
              }}
            >
              <TypeIcon type={simAttacker} size={12} />
              {typeNamesTh[simAttacker].split(' ')[0]}
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>⚔️</span>
            <span 
              className="type-badge" 
              style={{ 
                backgroundColor: typeColors[simDefender1], 
                padding: '0.2rem 0.6rem', 
                fontSize: '0.75rem',
                display: 'inline-flex',
                gap: '0.25rem',
                alignItems: 'center'
              }}
            >
              <TypeIcon type={simDefender1} size={12} />
              {typeNamesTh[simDefender1].split(' ')[0]}
            </span>
            {simDefender2 && (
              <>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>/</span>
                <span 
                  className="type-badge" 
                  style={{ 
                    backgroundColor: typeColors[simDefender2], 
                    padding: '0.2rem 0.6rem', 
                    fontSize: '0.75rem',
                    display: 'inline-flex',
                    gap: '0.25rem',
                    alignItems: 'center'
                  }}
                >
                  <TypeIcon type={simDefender2} size={12} />
                  {typeNamesTh[simDefender2].split(' ')[0]}
                </span>
              </>
            )}
          </div>
          
          <div className="damage-multiplier-large">
            {multiplier}x
          </div>

          <div className={`multiplier-label ${verdict.class}`} style={{ fontSize: '0.9rem', padding: '0.3rem 1rem', width: 'auto', display: 'inline-block', borderRadius: '20px', margin: '0.5rem 0' }}>
            {verdict.text}
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
            {verdict.desc}
          </p>
        </div>
      )}
    </div>
  );
}
