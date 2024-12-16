import React, { useEffect, useState } from 'react'
import '../style/admin.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { serverUrl } from '../constant';
function Admin() {
  const [blogStats,setBlogStats]=useState({count:0,lastUpdate:""})
  const [careerStats,setCareerStats]=useState({count:0,lastUpdate:""})
  const[testimonialStats,setTestimonialStats] = useState({count:0,lastUpdate:""})
  const[loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchBlog = async()=>{
     
      try{
        const response = await fetch(`${serverUrl}/api/blogs/stats`)
     
        const data= await response.json()
        const lastUpdate =data.lastUpdate?new Date(data.lastUpdate).toLocaleDateString().replace(/\//g, '-')+ ' ' + new Date(data.lastUpdate).toLocaleTimeString() :"no updates Yet"
        setBlogStats({
          count:data.count,
          lastUpdate:lastUpdate
        })
     
      }catch(error){
        console.error("Error fetching in Blog stats:",error)
      }
    }

    const fetchCareer = async()=>{
      try{
        const response = await fetch(`${serverUrl}/api/careers/stats`)
        const data= await response.json()
        const lastUpdate =data.lastUpdate?new Date(data.lastUpdate).toLocaleDateString().replace(/\//g, '-')+ ' ' + new Date(data.lastUpdate).toLocaleTimeString() :"no updates Yet"

        setCareerStats({
          count:data.count,
          lastUpdate:lastUpdate
        })
      }catch(error){
        console.error("Error fetching in Career stats:",error)
      }
    }

    const fetchTestimonial= async ()=>{
      try{
        const response = await fetch(`${serverUrl}/api/testimonials/stats`)
        const data = await response.json()
        const lastUpdate =data.lastUpdate?new Date(data.lastUpdate).toLocaleDateString().replace(/\//g, '-')+ ' ' + new Date(data.lastUpdate).toLocaleTimeString() :"no updates Yet"

        setTestimonialStats({count:data.count,lastUpdate:lastUpdate})

      }catch(error){
        console.error("Error in fetching Testimonial status:",error)
      }
    }
    Promise.all([fetchBlog(),fetchCareer(),fetchTestimonial()]).then(()=>{
      setLoading(false)
    })
  },[]);
  if(loading){
    return <div> Loading...</div>
  }





  return (
    <div className='admin-container'>
      <h2 className='admin-title'>ADMIN DASHBOARD</h2>


      <div className='change-box'>

      
      <section className='admin-box'>
       <div className='admin-title-container'>
         <h3 className='ad-2 admin-box-title'>Blogs</h3>
        <Link to='/admin/blogs' className='ad-2 admin-box-enter' ><AiFillPlusCircle /></Link>      
        </div>
        <h4 className='admin-box-date'> last update :<p>{blogStats.lastUpdate}</p></h4>
        <h4 className='admin-box-count'>Total count: <p>{blogStats.count}</p></h4>
        </section>
        <section className='admin-box'>
      <div className='admin-title-container'>
          <h3 className='ad-3 admin-box-title'>Career</h3>
        <Link to='/admin/careers' className='ad-3 admin-box-enter' ><AiFillPlusCircle /></Link>      
        </div>
        <h4 className='admin-box-date'> last update : <p>{careerStats.lastUpdate}</p></h4>
        <h4 className='admin-box-count'>Total count: <p>{careerStats.count}</p></h4>
        </section>
        <section className='admin-box'>
        <div className='admin-title-container'>
          <h3 className='ad-3 admin-box-title'>Testimonial</h3>
        <Link to='/admin/testimonial' className='ad-3 admin-box-enter' ><AiFillPlusCircle /></Link>      
          </div>
        <h4 className='admin-box-date'> last update : <p>{testimonialStats.lastUpdate}</p></h4>
        <h4 className='admin-box-count'>Total count: <p>{testimonialStats.count}</p></h4>
        </section>
      </div>
    </div>
  )
}

export default Admin