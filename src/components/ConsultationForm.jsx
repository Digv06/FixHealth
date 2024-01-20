import { useEffect, useState } from "react";
import getDoctorsByCity from "./DoctorService";
import "./ConsultationForm.css";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    city: "",
    company: "",
    chiefComplaints: "",
    previousExperience: "",
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const cityFromUrl = new URLSearchParams(window.location.search).get(
          "city"
        );
        const city = cityFromUrl || formData.city;
        const doctorsData = await getDoctorsByCity(city);
        setDoctors(doctorsData);
      } catch (error) {
        console.error("Error fetching doctors:", error.message);
      }
    };

    fetchDoctors();
  }, [formData.city]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <h1>Booking Form </h1>
      <div className="main-container">
        <div className="consultation-container">
          <div className="image-container">
            {/* Replace the placeholder URL with your actual image URL */}
            <img
              src="https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_640.jpg"
              alt="Consultation Image"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Company:</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Chief Complaints:</label>
              <textarea
                name="chiefComplaints"
                value={formData.chiefComplaints}
                onChange={handleChange}
                required
              />
            </div>
            {formData.age >= 40 && (
              <div>
                <label>Previous Experience with Physiotherapy:</label>
                <textarea
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="doctors-container">
          <label>
            Doctors in{" "}
            {formData.city == "" ? "available cities" : formData.city}:
          </label>
          <ul>
            {doctors.map((doctor) => (
              <li key={doctor.id} className="doctor-item">
                <span className="doctor-name">{doctor.name}</span> -{" "}
                <span className="doctor-expertise">{doctor.expertise}</span> -{" "}
                <span className="doctor-city">{doctor.city}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ConsultationForm;
