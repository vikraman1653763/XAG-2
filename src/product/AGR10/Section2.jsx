import React from 'react';
import { GiDeliveryDrone } from "react-icons/gi";
import { PiDroneFill } from "react-icons/pi";
import { MdBiotech } from "react-icons/md";
import { GiWingedEmblem } from "react-icons/gi";

const features = [
  { 
    icon: <GiDeliveryDrone />,
    title: 'Test 1',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <PiDroneFill />,
    title: 'Test 2',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <MdBiotech />,
    title: 'Test 3',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <GiDeliveryDrone />,
    title: 'Test 4',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
  { 
    icon: <GiWingedEmblem />,
    title: 'Test 5',
    desc: 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files.'
  },
];

function Section2() {
  return (
    <div className='agr10-sec-2'>
      {features.map((feature, index) => (
        <div key={index} className='agr10-sec-2-card'>
            <div className=' agr10-sec-2-wrapper'>
          <div className='agr10-sec-2-content'>
            <h2 className='agr10-sec-2-title'>{feature.title}</h2>
            <p className='agr10-sec-10-desc'>{feature.desc}</p>
          </div>
          <div className='agr10-sec-2-icon'>
            {feature.icon}
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;

