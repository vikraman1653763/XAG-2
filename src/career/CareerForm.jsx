import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serverUrl } from "../constant";
import "../style/Career.css";

const CareerForm = () => {
const { id } = useParams();
  const [formData, setFormData] = useState({
    job: "",
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCareer = async () => {
      try {
        const response = await fetch(`${serverUrl}/api/careers`);
        if (response.ok) {
          const data = await response.json();
          const selectedJob = data.find((job) => job.id.toString() === id); 
          if (selectedJob) {
            setFormData((prevData) => ({ ...prevData, job: selectedJob.title }));
          } else {
            setErrorMessage("Job not found.");
          }
        } else {
          setErrorMessage("Failed to load job listings.");
        }
      } catch (error) {
        console.error("Error fetching career data:", error);
        setErrorMessage("Failed to fetch career data. Please try again later.");
      }
    };
    fetchCareer();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setErrorMessage("Only PDF files are allowed.");
        setFormData((prevData) => ({ ...prevData, resume: null }));
        return;
      }
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) {
        setErrorMessage("File size must be less than 2MB.");
        setFormData((prevData) => ({ ...prevData, resume: null }));
        return;
      }
      setErrorMessage("");
      setFormData((prevData) => ({ ...prevData, resume: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.job) {
      setErrorMessage("Job title is missing. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    // Validate email and phone fields before submission
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Invalid email address.");
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorMessage("Phone number must be 10 digits.");
      setIsSubmitting(false);
      return;
    }

    const form = new FormData();
    form.append("job", formData.job);
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("resume", formData.resume);

    try {
      const response = await fetch(`${serverUrl}/api/job`, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSuccessMessage("Your application has been sent successfully!");
        setErrorMessage("");
        setFormData({
          job: "",
          name: "",
          email: "",
          phone: "",
          resume: null,
        });
        navigate("/success");
      } else {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.error || "Failed to send application");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="job-form-section">
      <div className="job-form-container">
        <h2 className="job-form-title">{formData.job || "Loading..."}</h2>
        {successMessage && <p className="job-form-success">{successMessage}</p>}
        {errorMessage && (
          <p className="job-form-error">
            {errorMessage}{" "}
            <button onClick={() => setErrorMessage("")}>X</button>
          </p>
        )}
        <form className="job-form" onSubmit={handleSubmit}>
         
          <div className="job-form-group">
            <label htmlFor="name" className="job-form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label htmlFor="email" className="job-form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label htmlFor="phone" className="job-form-label">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group">
            <label htmlFor="resume" className="job-form-label">
              Resume (PDF, max 2MB):
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="job-form-input"
            />
          </div>
          <div className="job-form-group-button-container">
            <button
              type="submit"
              className="job-form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
