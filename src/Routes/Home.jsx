import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/student");
  };

  return (
    <div id="home">
      <h1>Welcome to Student Portal</h1>
      <span>Studi Independen Bersertifikat <br />
       Kampus Merdeka</span>
      <p>
      Ruangguru <br />
      2023
      </p>
      <button onClick={handleStudentClick} data-testid="student-btn" id="btn-home">
        All Student
      </button>
    </div>
  );
};

export default Home;