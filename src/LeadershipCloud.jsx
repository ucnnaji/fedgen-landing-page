import React from 'react';
import './LeadershipCloud.css';

function Leadership() {
  const leadershipData = [
    {
      university: 'Covenant University',
      color: '#800080', 
      members: ['Prof. E Adetiba (PI)', 'Engr Boladele', 'Mrs Priscilla'],
    },
    {
      university: 'Landmark University',
      color: '#008000',
      members: ['Prof (co-PI)'],
    },
    {
      university: 'Afe Babalola University',
      color: '#3865A6',
      members: ['Prof. Shola (co-PI)'],
    },
    {
      university: 'ULPGL Democratic Republic of Congo',
      color: '#3865A6',
      members: ['Akella (co-PI)'],
    },
    {
      university: 'Gaston Berger University, St Louis, Senegal',
      color: '#B35C35',
      members: ['Mike (co-PI)'],
    },
    {
      university: 'Gaston Berger University, St Louis, Senegal',
      color: '#FF8C00',
      members: ['Glenn Ricart (co-PI)', 'Rick McGeer'],
    },

    {
      university: 'International University of Grand Bassam, Grand Bassam, ',
      color: '#202349',
      members: ['Ricart (co-PI)'],
    },
  ];

  return (
    <div className="leadership-section">
      <h1 className="leadership-title">FEDGEN Team</h1>
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
