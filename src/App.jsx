import React, { useState } from 'react';
import PokedexShell from './components/PokedexShell';
import TypeChart, { typeNamesTh } from './components/TypeChart';
import AttackSimulator from './components/AttackSimulator';
import TypeIcon from './components/TypeIcon';
import { typeChart, typeColors } from './data/typeData';

export default function App() {
  const [activeTab, setActiveTab] = useState('analyzer');

  // Combined Analyzer States
  const [analyzerTypes, setAnalyzerTypes] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Simulator States
  const [simAttacker, setSimAttacker] = useState('normal');
  const [simDefender1, setSimDefender1] = useState('normal');
  const [simDefender2, setSimDefender2] = useState('');

  // Helper to render type list as colorful badges for instant visual scanning
  const renderBadgeList = (list) => {
    if (!list || list.length === 0) {
      return <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.15rem' }}>ไม่มี</div>;
    }
    
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
        {list.map(entry => {
          const type = typeof entry === 'string' ? entry : entry.type;
          const mult = typeof entry === 'object' ? entry.mult : null;
          
          return (
            <span 
              key={type} 
              style={{
                backgroundColor: typeColors[type],
                color: '#fff',
                padding: '0.15rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textShadow: '0 1px 1px rgba(0,0,0,0.5)'
              }}
            >
              <TypeIcon type={type} size={10} />
              <span>{typeNamesTh[type].split(' ')[0]}</span>
              {mult && <span style={{ fontSize: '0.7rem', opacity: 0.9, marginLeft: '0.05rem' }}>({mult})</span>}
            </span>
          );
        })}
      </div>
    );
  };

  // Generate left screen content based on active state
  const renderLeftScreen = () => {
    switch (activeTab) {
      case 'analyzer':
        if (analyzerTypes.length === 0) {
          return (
            <>
              <div className="screen-title">MODE: POKEDEX SCAN</div>
              <div className="screen-text" style={{ color: 'var(--neon-cyan)', marginTop: '2rem', textAlign: 'center' }}>
                🟢 SYSTEM READY
              </div>
              <div className="screen-text" style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
                ยินดีต้อนรับสู่ระบบค้นหาและวิเคราะห์ประเภทธาตุ! กรุณาพิมพ์ค้นหาชื่อโปเกมอน หรือกดเลือกประเภทธาตุบนตารางฝั่งขวาเพื่อวิเคราะห์...
              </div>
              <div style={{ marginTop: 'auto', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                VERSION 2.1.0 // COMBINED_MODE
              </div>
            </>
          );
        }

        if (analyzerTypes.length === 1) {
          const type = analyzerTypes[0];
          // Get info for selected single type
          const relations = typeChart[type];
          const superEffective = [];
          const notVeryEffective = [];
          const noEffect = [];
          
          Object.entries(relations).forEach(([defendingType, multiplier]) => {
            if (multiplier === 2) superEffective.push(defendingType);
            else if (multiplier === 0.5) notVeryEffective.push(defendingType);
            else if (multiplier === 0) noEffect.push(defendingType);
          });

          const weakTo = [];
          const resists = [];
          const immuneTo = [];

          Object.keys(typeChart).forEach((attackingType) => {
            const multiplier = typeChart[attackingType][type];
            if (multiplier === 2) weakTo.push(attackingType);
            else if (multiplier === 0.5) resists.push(attackingType);
            else if (multiplier === 0) immuneTo.push(attackingType);
          });

          const superEffectiveBadges = superEffective.map(t => ({ type: t, mult: '2.0x' }));
          const notVeryEffectiveBadges = notVeryEffective.map(t => ({ type: t, mult: '0.5x' }));
          const noEffectBadges = noEffect.map(t => ({ type: t, mult: '0.0x' }));
          
          const weakToBadges = weakTo.map(t => ({ type: t, mult: '2.0x' }));
          const resistsBadges = resists.map(t => ({ type: t, mult: '0.5x' }));
          const immuneToBadges = immuneTo.map(t => ({ type: t, mult: '0.0x' }));

          return (
            <>
              <div className="screen-title" style={{ borderColor: 'var(--neon-green)' }}>
                {selectedPokemon ? `${selectedPokemon.nameEn} (${selectedPokemon.nameTh})` : `SCAN COMPLETED: ${type.toUpperCase()}`}
              </div>
              
              <div style={{ display: 'flex', gap: '0.8rem', margin: '0.8rem 0 1.2rem 0', justifyContent: 'center' }}>
                <div style={{
                  backgroundColor: typeColors[type],
                  color: '#fff',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '20px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: `0 0 12px ${typeColors[type]}aa`,
                  border: '2px solid rgba(255, 255, 255, 0.25)',
                  textShadow: '0 1.5px 3px rgba(0,0,0,0.8)'
                }}>
                  <TypeIcon type={type} size={16} />
                  <span>{typeNamesTh[type]}</span>
                </div>
              </div>

              <div style={{ fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', overflowY: 'auto' }}>
                <div>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>⚔️ โจมตีชนะทาง (2.0x):</span>
                  {renderBadgeList(superEffectiveBadges)}
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)' }}>⚔️ โจมตีเบาลง (0.5x):</span>
                  {renderBadgeList(notVeryEffectiveBadges)}
                </div>
                {noEffect.length > 0 && (
                  <div>
                    <span style={{ color: '#ea580c' }}>⚔️ โจมตีไร้ผล (0.0x):</span>
                    {renderBadgeList(noEffectBadges)}
                  </div>
                )}
                <div style={{ borderTop: '1px dashed rgba(0, 240, 255, 0.2)', marginTop: '0.2rem', paddingTop: '0.3rem' }}>
                  <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>🛡️ จุดอ่อนป้องกัน (2.0x):</span>
                  {renderBadgeList(weakToBadges)}
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)' }}>🛡️ ความต้านทาน (0.5x):</span>
                  {renderBadgeList(resistsBadges)}
                </div>
                {immuneTo.length > 0 && (
                  <div>
                    <span style={{ color: 'var(--neon-cyan)' }}>🛡️ ต้านทานสมบูรณ์ (0.0x):</span>
                    {renderBadgeList(immuneToBadges)}
                  </div>
                )}
              </div>
            </>
          );
        }

        if (analyzerTypes.length === 2) {
          // Calculate combined dual type defensive effectiveness
          const x4Weak = [];
          const x2Weak = [];
          const resistsTypes = [];
          const immuneTypes = [];

          Object.keys(typeChart).forEach(attackingType => {
            let multiplier = 1;
            analyzerTypes.forEach(defendingType => {
              multiplier *= typeChart[attackingType][defendingType];
            });
            if (multiplier === 4) x4Weak.push(attackingType);
            else if (multiplier === 2) x2Weak.push(attackingType);
            else if (multiplier < 1 && multiplier > 0) resistsTypes.push({ type: attackingType, mult: `${multiplier}x` });
            else if (multiplier === 0) immuneTypes.push(attackingType);
          });

          const x2WeakBadges = x2Weak.map(t => ({ type: t, mult: '2.0x' }));
          const immuneTypesBadges = immuneTypes.map(t => ({ type: t, mult: '0.0x' }));

          return (
            <>
              <div className="screen-title" style={{ borderColor: 'var(--neon-cyan)' }}>
                {selectedPokemon ? `${selectedPokemon.nameEn} (${selectedPokemon.nameTh})` : 'DUAL-TYPE ANALYZED'}
              </div>
              <div style={{ display: 'flex', gap: '0.8rem', margin: '0.8rem 0 1.2rem 0', justifyContent: 'center', flexWrap: 'wrap' }}>
                {analyzerTypes.map(t => (
                  <div key={t} style={{
                    backgroundColor: typeColors[t],
                    color: '#fff',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '20px',
                    fontWeight: '800',
                    fontSize: '1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: `0 0 12px ${typeColors[t]}aa`,
                    border: '2px solid rgba(255, 255, 255, 0.25)',
                    textShadow: '0 1.5px 3px rgba(0,0,0,0.8)'
                  }}>
                    <TypeIcon type={t} size={16} />
                    <span>{typeNamesTh[t]}</span>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem', overflowY: 'auto', flexGrow: 1 }}>
                {x4Weak.length > 0 && (
                  <div style={{ 
                    background: 'rgba(239, 68, 68, 0.15)', 
                    border: '2px dashed #ef4444', 
                    borderRadius: '10px', 
                    padding: '0.6rem 0.75rem', 
                    marginBottom: '0.1rem',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)',
                    borderWidth: '2.5px'
                  }}>
                    <span style={{ color: '#ff4d4d', fontWeight: '800', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      ⚠️ จุดอ่อนวิกฤต (4.0x Weakness)
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.3rem' }}>
                      {x4Weak.map(t => (
                        <span 
                          key={t} 
                          style={{
                            backgroundColor: typeColors[t],
                            color: '#fff',
                            padding: '0.2rem 0.5rem',
                            borderRadius: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 'bold',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.2rem',
                            boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            textShadow: '0 1px 1px rgba(0,0,0,0.5)'
                          }}
                        >
                          <TypeIcon type={t} size={10} />
                          <span>{typeNamesTh[t].split(' ')[0]} (4.0x)</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {(x2Weak.length > 0 || x4Weak.length === 0) && (
                  <div>
                    <span style={{ color: '#f97316', fontWeight: 'bold' }}>🚨 แพ้ทางปกติ (2.0x Weakness):</span>
                    {renderBadgeList(x2WeakBadges)}
                  </div>
                )}
                
                <div>
                  <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>🛡️ ต้านทาน (จุดแข็ง):</span>
                  {renderBadgeList(resistsTypes)}
                </div>
                {immuneTypes.length > 0 && (
                  <div>
                    <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>⚡ ต้านทานสมบูรณ์ (ไร้ผล):</span>
                    {renderBadgeList(immuneTypesBadges)}
                  </div>
                )}
              </div>
            </>
          );
        }
        return null;

      case 'sim':
        const getSimMultiplier = () => {
          let multiplier = typeChart[simAttacker][simDefender1];
          if (simDefender2 && simDefender1 !== simDefender2) {
            multiplier *= typeChart[simAttacker][simDefender2];
          }
          return multiplier;
        };

        const mult = getSimMultiplier();
        let statusColor = 'var(--neon-cyan)';
        let impactVerdict = 'DAMAGE STABLE';

        if (mult > 1) {
          statusColor = '#ef4444';
          impactVerdict = 'SUPER EFFECTIVE';
        } else if (mult < 1 && mult > 0) {
          statusColor = 'var(--neon-green)';
          impactVerdict = 'NOT VERY EFFECTIVE';
        } else if (mult === 0) {
          statusColor = '#cbd5e1';
          impactVerdict = 'NO DAMAGE IMMUNITY';
        }

        return (
          <>
            <div className="screen-title" style={{ borderColor: statusColor }}>
              COMBAT SIMULATOR
            </div>
            
            <div style={{ margin: '0.8rem 0' }}>
              <div className="screen-stat" style={{ paddingBottom: '0.3rem' }}>
                <span>ประเภทการโจมตี:</span>
                <span style={{ color: '#fff', fontWeight: 'bold', display: 'inline-flex', gap: '0.3rem', alignItems: 'center' }}>
                  <TypeIcon type={simAttacker} size={12} />
                  {typeNamesTh[simAttacker].split(' ')[0]}
                </span>
              </div>
              <div className="screen-stat" style={{ paddingBottom: '0.3rem' }}>
                <span>ประเภทตัวตั้งรับ:</span>
                <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold', display: 'inline-flex', gap: '0.3rem', alignItems: 'center' }}>
                  <span style={{ display: 'inline-flex', gap: '0.15rem', alignItems: 'center' }}>
                    <TypeIcon type={simDefender1} size={12} />
                    {typeNamesTh[simDefender1].split(' ')[0]}
                  </span>
                  {simDefender2 && (
                    <>
                      <span>/</span>
                      <span style={{ display: 'inline-flex', gap: '0.15rem', alignItems: 'center' }}>
                        <TypeIcon type={simDefender2} size={12} />
                        {typeNamesTh[simDefender2].split(' ')[0]}
                      </span>
                    </>
                  )}
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>สถานะการโจมตี</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: statusColor, textShadow: `0 0 10px ${statusColor}44` }}>
                {mult}x
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 'bold', color: statusColor, marginTop: '0.2rem', letterSpacing: '1px' }}>
                {impactVerdict}
              </div>
            </div>

            <div style={{ marginTop: 'auto', fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
              RUNNING FORCE_COMBAT_LOGS... OK
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <PokedexShell
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        leftScreenContent={renderLeftScreen()}
      >
        {activeTab === 'analyzer' && (
          <TypeChart 
            analyzerTypes={analyzerTypes}
            setAnalyzerTypes={setAnalyzerTypes}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        )}
        {activeTab === 'sim' && (
          <AttackSimulator
            simAttacker={simAttacker}
            setSimAttacker={setSimAttacker}
            simDefender1={simDefender1}
            setSimDefender1={setSimDefender1}
            simDefender2={simDefender2}
            setSimDefender2={setSimDefender2}
          />
        )}
      </PokedexShell>
    </div>
  );
}
