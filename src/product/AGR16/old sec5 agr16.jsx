import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function Section5() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen size is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const features = [
    {
      title: "Precision Spraying",
      description:
        "Optimized for even distribution of fertilizers and pesticides, ensuring healthier crops.",
      image: "/assets/agr16-spry.webp",
      bg:'/assets/agr16-11.webp'
    },
    {
      title: "Smart Monitoring",
      description:
        "Equipped with advanced sensors for real-time field data collection.",
      image: "/assets/agr16-mon.webp",
      bg:'/assets/agr16-12.webp'

    },
    {
      title: "Easy Operation",
      description:
        "User-friendly controls with autonomous and manual flight modes.",
      image: "/assets/agr16-rem.webp",
      bg:'/assets/agr16-13.webp'
    },
    {
      title: "Durable Design",
      description:
        "Built to withstand tough weather conditions with enhanced wind resistance.",
      image: "/assets/agr16-shield.webp",
      bg:'/assets/agr16-14.webp'

    },
    {
      title: "Cost-Effective",
      description: "Reduces labor costs and minimizes resource wastage.",
      image: "/assets/agr16-cost.webp",
      bg:'/assets/agr16-15.webp'

    },
    {
      title: "Geo-Fencing",
      description:
        "Stay compliant with geo-fencing technology for restricted areas.",
      image: "/assets/agr16-fen.webp",
      bg:'/assets/agr16-16.webp'

    },
    {
      title: "Failsafe Mechanisms",
      description:
        "Return-to-Launch (RTL) and low battery emergency landing features for safe operations.",
      image: "/assets/agr16-bat.webp",
      bg:'/assets/agr16-17.webp'

    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-77%"]);

  return (
    <section className="agr16-sec-5">
      {isMobile ? (
        <div className="agr16-sec-5-container">
          <div className="agr16-sec-5-container-sticky">
            <h2 className="title">
              Why AGR-16 <span>?</span>
            </h2>
            {/* Vertical layout for mobile */}
            <div className="agr16-sec-5-scroll-content">
              {features.map((feature, index) => (
                <div
                  className="agr16-sec-5-card"
                  key={index}
                  style={{
                    backgroundImage: `url(${feature.image})`,
                  }}
                >
                  <h2>0{index + 1}</h2>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="agr16-sec-5-container" ref={targetRef}>
          <div className="agr16-sec-5-container-sticky">
            <h2 className="title">
              Why AGR-16 <span>?</span>
            </h2>
            {/* Horizontal scroll layout for larger screens */}
            <motion.div
              className="agr16-sec-5-scroll-content"
              style={{ x }}
            >
              {features.map((feature, index) => (
                <div
                  className="agr16-sec-5-card"
                  key={index}
                  style={{
                    backgroundImage: `url(${feature.image})`,
                  }}
                >
                  <h2>0{index + 1}</h2>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <img src={feature.bg}/>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Section5;




// .agr16-sec-5 {
//   color: #d4d4d4;
// }

// .agr16-sec-5-container {
//   margin-bottom: 20px;
// height: 500vh;
// position: relative;
// padding: 0em 13rem;
// }

// .agr16-sec-5-container-sticky {
//   position: sticky;
//   top: 25%;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   align-items:flex-start;
//   justify-content: flex-start;
//   overflow: hidden;
//   border-radius: 1em;

// }
// .agr16-sec-5-container-sticky .title{
//   color: #ffffff;

//   font-size: var(--fs-xxl);
//   margin-bottom: 1em;
// }
// .agr16-sec-5-container-sticky .title span{
//   color: #9bf00b;
//   font-weight: 900;
// }
// .agr16-sec-5-scroll-content {
//   display: flex;
//   gap: 32px;
//   width: 300vw;


// }

// .agr16-sec-5-card {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   width: 50vw;
//   height: 50vh;
//   border-radius: 1em;
//   transition: all .3s ease-in-out;
//   box-shadow: inset 2em 2em 1em black inset 2em 2em 1em black;
//   background-color: rgb(0, 0, 0);
//   background-position: top left;
//   background-repeat: no-repeat;
//   background-size: 40%;
//  position: relative;
//  overflow: hidden;
//  /* border-bottom: 1em; */
//  transition: all .3s ease-in-out;

// }




// .agr16-sec-5-card:hover {
//   transition: all .3s ease-in-out;
//   transform: scale(1.02);
// }
// .agr16-sec-5-card:hover > h2{
//   background: linear-gradient(to top, rgb(0, 116, 20),#9bf00b, #9bf00b);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   border-radius: 0%;
// }
// .agr16-sec-5-card h2 {
//   font-size: var(--fs-xxxl);
//   font-weight: 800;
//   border-radius: 50%;
//   line-height: 100%;


// }
// .agr16-sec-5-card h3{
//   font-size: var(--fs-m);
//   color: white;
// }
// .agr16-sec-5-card p{
//   font-size: var(--fs-s);
//   color: white;
//   padding: 0em 1em;
// }
// .agr16-sec-5-card img{
// position: absolute;
// width: 100%;
// top: 0%;
// left: 0%;
// opacity: .2;
// }
// .agr16-sec-5-card:hover img{
// opacity: 1;
// transition: all .3s ease-in-out;
// }


// // mobile

// .agr16-sec-5-container {
//   height: 100%;
//   width: 99vw; /* Adjust height for mobile */
//   padding:0em;
//   align-items: center;
//   justify-content: center;
// }

// .agr16-sec-5-container-sticky {
//   position: relative;
//   top: auto;
//   overflow: visible;
// }

// .agr16-sec-5-container-sticky .title {
//   font-size: var(--fs-l); /* Smaller font size */
//   text-align: center;
//   width: 100%;
// }

// .agr16-sec-5-scroll-content {
//   display: flex;
//   flex-direction: column;
//   gap: 1em;
//   width: 100%;
//   align-items: center;
//   padding: 0em;
//   margin: 0%;
// }

// .agr16-sec-5-card {
//   width: 80%; 
//   height: auto; 
//   padding: .5em;
//   border-radius: 1em;
//   background-size: cover;
//   text-align: center;
//   background-size: 20%;
//   position: relative;
//   border: 1px solid #eee;
// }

// .agr16-sec-5-card h2 {
//   font-size: var(--fs-m); 
// }

// .agr16-sec-5-card h3 {
//   font-size: var(--fs-s);
// }

// .agr16-sec-5-card p {
//   font-size: var(--fs-xs);
// }


// // tablet 


// .agr16-sec-5-container {
//   height: auto; 
//   padding: 2em 2em;
// }

// .agr16-sec-5-container-sticky {
//   position: relative; 
//   top: auto;
// }
// .agr16-sec-5-container-sticky .title {
// font-size: var(--fs-xl);
// }


// .agr16-sec-5-scroll-content {
//   display: flex;
//   /* flex-direction: column;  */
//   gap: .5em; 
//   height: 100%;
// }


// .agr16-sec-5-card {
// justify-content: center;
// align-items: center;
// width: 70vw !important;
//   height: auto; 
//   padding: 1.7em; 
//   border-radius: 1em;
//   background-size: cover;
//   background-position: center;
//   background-image: none !important;
// }

// .agr16-sec-5-card h2 {
//   font-size: var(--fs-xs);
//   text-align: center;
//   display: none;
// }

// .agr16-sec-5-card h3 {
//   font-size: var(--fs-m); 
//   text-align: center;

// }

// .agr16-sec-5-card p {
// text-align: center;

//   font-size: var(--fs-s);
// }
// .agr16-sec-5-container {
//   padding: 2em 2rem; 
// }
