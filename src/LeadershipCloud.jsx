import React from 'react';
import './LeadershipCloud.css';

function Leadership() {
  const leadershipData = [
    {
      university: 'Covenant University',
      color: '#B22222',
      members: ['Prof. E Adetiba (PI)', 'Engr Boladele', 'Mrs Priscilla'],
    },
    {
      university: 'Landmark University',
      color: '#B22222',
      members: ['Prof (co-PI)'],
    },
    {
      university: 'Afe Babalola University',
      color: '#800080',
      members: ['Prof. Shola (co-PI)'],
    },
    {
      university: 'ULPGL Democratic Republic of Congo',
      color: '#D2691E',
      members: ['Akella (co-PI)'],
    },
    {
      university: 'Gaston Berger University, St Louis, Senegal',
      color: '#8B0000',
      members: ['Mike (co-PI)'],
    },
    {
      university: 'Gaston Berger University, St Louis, Senegal',
      color: '#FF8C00',
      members: ['Glenn Ricart (co-PI)', 'Rick McGeer'],
    },

    {
      university: 'International University of Grand Bassam, Grand Bassam, ',
      color: '#FF8C00',
      members: ['Ricart (co-PI)'],
    },
  ];

  return (
    <div className="leadership-section">
      <h1 className="leadership-title">FEDGEN Leadership</h1>
      <div className="leadership-card-container">
        {leadershipData.map((group, index) => (
          <div key={index} className="leadership-card" style={{ borderTopColor: group.color }}>
            <h2>{group.university}</h2>
            <ul>
              {group.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leadership;
