import React from 'react';

const Xag30Specs = () => {
  const specs = [
    { feature: 'Communication', detail: '2.4 GHz', notes: 'Reliable Long-Range Link' },
    { feature: 'Endurance', detail: 'Up to 45 Min', notes: 'Extended Mission Time' },
    { feature: 'Range', detail: '12 Km One Way', notes: 'Wide Operational Radius' },
    { feature: 'Camera', detail: 'Day & Night + IR', notes: '24/7 Surveillance Capability' },
    { feature: 'Max All-Up Weight', detail: '90 Kg', notes: 'Robust Build' },
    { feature: 'Operating Temperature', detail: '-20℃ to 60℃', notes: 'All-Weather Operation' },
    { feature: 'Payload Capacity', detail: '25 Kg', notes: 'Heavy Lift Capacity' },
    { feature: 'Cruise Speed', detail: '13 m/s', notes: 'Efficient Cruising' },
    { feature: 'Max Speed', detail: '20 m/s', notes: 'Rapid Deployment' },
    { feature: 'Max Altitude (AMSL)', detail: '5000 Feet', notes: 'High Altitude Adaptability' },
    { feature: 'Dimensions (LxBxH)', detail: '1632mm x 1659mm x 847mm', notes: 'Compact Design' },
    { feature: 'Wheelbase', detail: '2355 mm', notes: 'Stable Airframe Structure' },
    { feature: 'Camera Resolution', detail: '10x Zoom, 1920x1080 (Day)', notes: 'Precision Imaging' },
    { feature: 'IR Camera', detail: '640 x 480', notes: 'Enhanced Thermal Vision' },
    { feature: 'Folded Dimension', detail: '823mm x 925mm x 847mm', notes: 'Easy Transportation' },
  ];

  return (
    <section className="xag30-specs-section">
      <div className="xag30-specs-container">
        <h2 className="xag30-specs-title">Technical Specifications</h2>
        <table className="xag30-specs-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
              <th>Short Notes</th>
            </tr>
          </thead>
          <tbody>
            {specs.map((item, index) => (
              <tr key={index}>
                <td className="xag30-specs-feature">{item.feature}</td>
                <td className="xag30-specs-detail">{item.detail}</td>
                <td className="xag30-specs-notes">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Xag30Specs;