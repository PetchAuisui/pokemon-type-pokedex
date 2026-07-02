import React, { useState } from 'react';
import PokedexShell from './components/PokedexShell';
import TypeChart, { typeNamesTh } from './components/TypeChart';
import AttackSimulator from './components/AttackSimulator';
import TypeIcon from './components/TypeIcon';
import { typeChart } from './data/typeData';

export default function App() {
  const [activeTab, setActiveTab] = useState('analyzer');

  // Combined Analyzer States
  const [analyzerTypes, setAnalyzerTypes] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Simulator States
  const [simAttacker, setSimAttacker] = useState('normal');
  const [simDefender1, setSimDefender1] = useState('normal');
  const [simDefender2, setSimDefender2] = useState('');

  // Helper to format lists for screen
  const formatTypeList = (list) => {
    if (list.length === 0) return 'ไม่มี';
    return list.map(t => typeNamesTh[t].split(' ')[0]).join(', ');
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

          return (
            <>
              <div className="screen-title" style={{ borderColor: 'var(--neon-green)' }}>
                SCAN COMPLETED: {type.toUpperCase()}
              </div>
              
              <div style={{ margin: '0.6rem 0' }}>
                <div className="screen-stat" style={{ paddingBottom: '0.3rem' }}>
                  <span>ธาตุหลัก:</span>
                  <span style={{ color: '#fff', fontWeight: 'bold', display: 'inline-flex', gap: '0.3rem', alignItems: 'center' }}>
                    <TypeIcon type={type} size={14} />
                    {typeNamesTh[type].split(' ')[0]}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', overflowY: 'auto' }}>
                <div>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>⚔️ โจมตีชนะทาง (2.0x):</span>
                  <div style={{ color: '#fff', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(superEffective)}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)' }}>⚔️ โจมตีเบาลง (0.5x):</span>
                  <div style={{ color: '#cbd5e1', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(notVeryEffective)}</div>
                </div>
                {noEffect.length > 0 && (
                  <div>
                    <span style={{ color: '#ea580c' }}>⚔️ โจมตีไร้ผล (0.0x):</span>
                    <div style={{ color: '#cbd5e1', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(noEffect)}</div>
                  </div>
                )}
                <div style={{ borderTop: '1px dashed rgba(0, 240, 255, 0.2)', marginTop: '0.3rem', paddingTop: '0.3rem' }}>
                  <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>🛡️ จุดอ่อนป้องกัน (2.0x):</span>
                  <div style={{ color: '#fff', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(weakTo)}</div>
                </div>
                <div>
                  <span style={{ color: 'var(--text-secondary)' }}>🛡️ ความต้านทาน (0.5x):</span>
                  <div style={{ color: '#cbd5e1', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(resists)}</div>
                </div>
                {immuneTo.length > 0 && (
                  <div>
                    <span style={{ color: 'var(--neon-cyan)' }}>🛡️ ต้านทานสมบูรณ์ (0.0x):</span>
                    <div style={{ color: '#cbd5e1', paddingLeft: '0.5rem', marginTop: '0.1rem' }}>{formatTypeList(immuneTo)}</div>
                  </div>
                )}
              </div>
            </>
          );
        }

        if (analyzerTypes.length === 2) {
          // Calculate combined dual type defensive effectiveness
          const weakTypes = [];
          const resistsTypes = [];
          const immuneTypes = [];

          Object.keys(typeChart).forEach(attackingType => {
            let multiplier = 1;
            analyzerTypes.forEach(defendingType => {
              multiplier *= typeChart[attackingType][defendingType];
            });
            if (multiplier > 1) weakTypes.push(`${typeNamesTh[attackingType].split(' ')[0]}(${multiplier}x)`);
            else if (multiplier < 1 && multiplier > 0) resistsTypes.push(`${typeNamesTh[attackingType].split(' ')[0]}(${multiplier}x)`);
            else if (multiplier === 0) immuneTypes.push(`${typeNamesTh[attackingType].split(' ')[0]}`);
          });

          return (
            <>
              <div className="screen-title" style={{ borderColor: 'var(--neon-cyan)' }}>
                DUAL-TYPE ANALYZED
              </div>
              <div style={{ margin: '0.5rem 0' }}>
                <div className="screen-stat">
                  <span>ชื่อวิเคราะห์:</span>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>
                    {selectedPokemon ? `${selectedPokemon.nameEn} (${selectedPokemon.nameTh})` : 'ธาตุคู่กำหนดเอง'}
                  </span>
                </div>
                <div className="screen-stat" style={{ paddingBottom: '0.4rem' }}>
                  <span>ประเภทธาตุคู่:</span>
                  <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold', display: 'inline-flex', gap: '0.3rem', alignItems: 'center' }}>
                    {analyzerTypes.map((t, idx) => (
                      <span key={t} style={{ display: 'inline-flex', gap: '0.15rem', alignItems: 'center' }}>
                        <TypeIcon type={t} size={12} />
                        {typeNamesTh[t].split(' ')[0]}
                        {idx < analyzerTypes.length - 1 && ' /'}
                      </span>
                    ))}
                  </span>
                </div>
              </div>

              <div style={{ fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem', overflowY: 'auto', flexGrow: 1 }}>
                <div>
                  <span style={{ color: '#ef4444', fontWeight: 'bold' }}>🚨 แพ้ทาง (จุดอ่อน):</span>
                  <div style={{ color: '#fff', marginTop: '0.1rem', lineHeight: '1.4' }}>
                    {weakTypes.length > 0 ? weakTypes.join(', ') : 'ไม่มี'}
                  </div>
                </div>
                <div>
                  <span style={{ color: 'var(--neon-green)', fontWeight: 'bold' }}>🛡️ ต้านทาน (จุดแข็ง):</span>
                  <div style={{ color: '#fff', marginTop: '0.1rem', lineHeight: '1.4' }}>
                    {resistsTypes.length > 0 ? resistsTypes.join(', ') : 'ไม่มี'}
                  </div>
                </div>
                {immuneTypes.length > 0 && (
                  <div>
                    <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>⚡ ต้านทานสมบูรณ์ (ไร้ผล):</span>
                    <div style={{ color: '#fff', marginTop: '0.1rem', lineHeight: '1.4' }}>
                      {immuneTypes.join(', ')}
                    </div>
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
