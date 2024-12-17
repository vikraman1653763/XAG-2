import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const tabs = ['fmu', 'pmu', 'gnss'];

function Section7() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState('fmu');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: '0%', width: '1%' });
  const [visibleTabs, setVisibleTabs] = useState({});
  const boxRefs = useRef({});
  const observer = useRef(null);
  const visibilityTimer = useRef({});
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const { target, isIntersecting } = entry;
          const tab = target.dataset.tab;
          clearTimeout(visibilityTimer.current[tab]);
          if (isIntersecting) {
            visibilityTimer.current[tab] = setTimeout(() => {
              setActive(tab);
              updateIndicator(tab);
              setVisibleTabs(prev => ({ ...prev, [tab]: true }));
            }, 10); //.01sec
          } else {
            setVisibleTabs(prev => ({ ...prev, [tab]: false }));
          }
        });
      }, { threshold: 0.5 });

      Object.values(boxRefs.current).forEach(box => {
        if (box) {
          observer.current.observe(box);
        }
      });
    }

    return () => {
      if (observer.current) {
        Object.values(boxRefs.current).forEach(box => {
          if (box) {
            observer.current.unobserve(box);
          }
        });
      }
    };
  }, [isMobile]);

  const updateIndicator = (tab) => {
    const activeIndex = tabs.indexOf(tab);
    const tabWidth = 100 / tabs.length;
    const targetLeft = (activeIndex * tabWidth + 10) + '%';
    const targetWidth = (tabWidth - 22) + '%';
    setIndicatorStyle({
      left: targetLeft,
      width: targetWidth,
    });
  };

  const goTo = (tab) => {
    const element = document.getElementById(`fc-${tab}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderDesktopLayout = () => (
    <section className='fc-content'>
      {tabs.map((tab) => (
        <div
          className={`fc-${tab} fc-box`}
          id={`fc-${tab}`}
          ref={el => boxRefs.current[tab] = el}
          data-tab={tab}
          key={tab}
        >
          <motion.div className='fc-box-details'>
            <motion.h2
              initial={{ opacity: 0, y: 500, filter: 'blur(100px)' }}
              animate={visibleTabs[tab] ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 100, filter: 'blur(10px)' }}
              transition={{ duration: 1 }}
            >
              {tab === 'fmu' ? 'Flight Module Unit (FMU)' : tab === 'pmu' ? 'Power Module Unit (PMU)' : 'Global Navigation Satellite System (GNSS)'}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 500, filter: 'blur(100px)' }}
              animate={visibleTabs[tab] ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 100, filter: 'blur(10px)' }}
              transition={{ duration: 1.1 }}
            >
              {
                tab === 'fmu' ? 'The FMU is the core of the drone\'s navigation system, providing precise control and stability for efficient and accurate agricultural operations.' :
                tab === 'pmu' ? 'The PMU ensures a stable and reliable power supply to the drone\'s systems, enhancing performance and extending the lifespan of the components.' :
                'The GNSS offers high-precision positioning and navigation capabilities, crucial for accurate field mapping and automated drone missions.'
              }
            </motion.p>
          </motion.div>
        </div>
      ))}
    </section>
  );

  const renderMobileLayout = () => (
    <section className='fc-content'>
      {tabs.map((tab) => (
        <div className='fc-card' key={tab}>
          <img src={`/assets/${tab}ss.webp`} alt={`${tab} icon`} className='fc-card-image' />
          <div className='fc-card-details'>
            <h2>
              {tab === 'fmu' ? 'Flight Module Unit (FMU)' : tab === 'pmu' ? 'Power Module Unit (PMU)' : 'Global Navigation Satellite System (GNSS)'}
            </h2>
            <p>
              {
                tab === 'fmu' ? 'The FMU is the core of the drone\'s navigation system, providing precise control and stability for efficient and accurate agricultural operations.' :
                tab === 'pmu' ? 'The PMU ensures a stable and reliable power supply to the drone\'s systems, enhancing performance and extending the lifespan of the components.' :
                'The GNSS offers high-precision positioning and navigation capabilities, crucial for accurate field mapping and automated drone missions.'
              }
            </p>
          </div>
        </div>
      ))}
    </section>
  );

  return (
    <div className='fc-tab-container'>
      {!isMobile && (
        <div className='fc-index-container'>
          <div className='fc-index'>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => goTo(tab)}
                className={active === tab ? 'active' : ''}
              >
                {tab.toUpperCase()}
              </button>
            ))}
            <div className='fc-tab-indicator' style={indicatorStyle} />
          </div>
        </div>
      )}
      {isMobile ? renderMobileLayout() : renderDesktopLayout()}
    </div>
  );
}

export default Section7;
