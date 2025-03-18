import React, { useState, useEffect } from 'react';
import '../style/Career.css';
import CareerBanner from '../career/careerbanner.jsx';
import FilterSection from '../career/FilterSection.jsx';
import 'aos/dist/aos.css';
import AOS from 'aos';
import bag from "/assets/bag.svg";
import { Link, useParams } from "react-router-dom";
import { serverUrl } from '../constant';
import CareerForm from '../career/CareerForm.jsx';

const Career = () => {
    // const [items] = useState([
    //     {
    //         "id": 1,
    //         "title": "Software Engineer",
    //         "description": "Responsible for developing and maintaining web applications.",
    //         "location": "Chennai",
    //         "jobType": "Full-Time",
    //         "experience": "2-4 years",
    //         "requirements": "Proficiency in JavaScript, React, and Node.js. Strong problem-solving skills.",
    //         "linkedin": "https://www.linkedin.com/jobs/software-engineer"
    //     },
    //     {
    //         "id": 2,
    //         "title": "UI/UX Designer",
    //         "description": "Create engaging user interfaces and improve user experience.",
    //         "location": "Puducherry",
    //         "jobType": "Part-Time",
    //         "experience": "1-2 years",
    //         "requirements": "Experience in design tools like Figma and Adobe XD. Understanding of responsive design principles.",
    //         "linkedin": "https://www.linkedin.com/jobs/ui-ux-designer"
    //     },
    //     {
    //         "id": 3,
    //         "title": "Project Manager",
    //         "description": "Lead project teams and ensure timely delivery of projects.",
    //         "location": "Remote",
    //         "jobType": "Full-Time",
    //         "experience": "5+ years",
    //         "requirements": "Experience in Agile methodologies. Strong communication and organizational skills.",
    //         "linkedin": "https://www.linkedin.com/jobs/project-manager"
    //     },
    //     {
    //         "id": 4,
    //         "title": "Digital Marketing Specialist",
    //         "description": "Develop and implement digital marketing strategies.",
    //         "location": "Chennai",
    //         "jobType": "Contract",
    //         "experience": "3-5 years",
    //         "requirements": "Experience in SEO, SEM, and social media marketing. Knowledge of analytics tools.",
    //         "linkedin": "https://www.linkedin.com/jobs/digital-marketing-specialist"
    //     },
    //     {
    //         "id": 5,
    //         "title": "Intern - Data Analyst",
    //         "description": "Assist in analyzing and interpreting data trends.",
    //         "location": "Puducherry",
    //         "jobType": "Internship",
    //         "experience": "0-1 years",
    //         "requirements": "Basic knowledge of SQL and Excel. Strong analytical skills.",
    //         "linkedin": "https://www.linkedin.com/jobs/data-analyst-intern"
    //     }
    // ]);

    const { id } = useParams(); 
    const[items,setItems]=useState([])
    const[error,setError]= useState(null)
    const [selectedType, setSelectedType] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedExperience, setSelectedExperience] = useState([]);

    const handleTypeChange = (type) => {
        setSelectedType((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleExperienceChange = (experience) => {
        setSelectedExperience((prev) =>
            prev.includes(experience)
                ? prev.filter((exp) => exp !== experience)
                : [...prev, experience]
        );
    };
    const filteredJobs = items.filter((job) => {
        const typeMatch = selectedType.length === 0 || selectedType.some((type) =>
            job.jobType.toLowerCase().trim() === type.toLowerCase().trim()
        );
        const locationMatch = selectedLocation === 'All' || job.location.toLowerCase().trim() === selectedLocation.toLowerCase().trim();
        const experienceMatch = selectedExperience.length === 0 || selectedExperience.some((experience) =>
            job.experience.toLowerCase().trim() === experience.toLowerCase().trim()
        );
        return typeMatch && locationMatch && experienceMatch;
    });
    
    useEffect(() => {
        AOS.init({ 
            duration: 1250 ,
            disable:  window.innerWidth < 768,
            once: true
        });
    }, []);

    useEffect(() => {
        const fetchCareer = async () => {
            try {

                const response = await fetch(`${serverUrl}/api/careers`); 
 
                if (response.ok) {
                    const data = await response.json();
                    setItems(data);
                } else {
                    setError('Career not found');
                }
            } catch (error) {
                setError("Failed to fetch Career data");
            }
        };
        fetchCareer();
    }, [id]); 

   
      
    return (
        <>
            <CareerBanner />
            <section className="career-section" >
                {items.length>0 &&(

                    <FilterSection
                    selectedType={selectedType}
                    handleTypeChange={handleTypeChange}
                    selectedLocation={selectedLocation}
                    handleLocationChange={handleLocationChange}
                    selectedExperience={selectedExperience}
                    handleExperienceChange={handleExperienceChange}
                    />
                )}

              <div className="job-listings" >

                    {filteredJobs && filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div className="job-card" key={index} >
                                <h3><img src={bag} alt="job-icon"/>{job.title}</h3>
                                <p>{job.description}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Type:</strong> {job.jobType}</p>
                                <p><strong>Experience:</strong> {job.experience}</p>
                                <p className='require'><strong>Requirements:</strong><br/>
                                    {job.requirements}
                                </p>
                                <div className='applydiv'> 
                                    <Link to={`/career/${job.id}`} key={index}  type='button' className="apply-button">Apply Now</Link>
                                </div>
                            </div>
                                
                        ))
                    ) : (
            <div className="no-Jobs">
              <div className="noJobText">
                        <h2>We're Not Hiring Right Now</h2>
                        <p>Thank you for your interest in joining our team! While there are no open positions at the moment, we encourage you to check back soon or follow us for updates on future opportunities.</p>
                      </div>
              <img src="/assets/noJob.webp" alt="no Jobs"  />
                  </div>
                    )}
                </div>
                {/* {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                    )} */}
            </section>
        </>
    );
};
export default Career;