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

function Section3() {
    return (
        <div className="curved-card">
          <div className="circle">
            <span>01</span>
          </div>
          <div className="content">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      );
}

export default Section3;

