import React, { useState } from "react";
import NavBar from "../components/Navbar";

const AddStudent = (props) => {
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getFacultyByProgramStudy = (programStudy) => {
      switch (programStudy) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          return "Fakultas Ekonomi";
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          return "Fakultas Ilmu Sosial dan Politik";
        case "Teknik Sipil":
        case "Arsitektur":
          return "Fakultas Teknik";
        case "Matematika":
        case "Fisika":
        case "Informatika":
          return "Fakultas Teknologi Informasi dan Sains";
        default:
          return "";
      }
    };

    const faculty = getFacultyByProgramStudy(programStudy);

    const newStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    props.createStudent(newStudent);

    setFullname("");
    setBirthDate("");
    setGender("");
    setProgramStudy("");
    setAddress("");
    setProfilePicture("");
    setPhoneNumber("");
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit} id="form-student">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            id="fullname"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            data-testid="name"
          />
        <div>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="text"
            id="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            data-testid="profilePicture"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            data-testid="address"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            data-testid="phoneNumber"
          />
        </div>
        <div id="grid-student">
          <div id="grid-item">
            <label htmlFor="birthDate">Birth Date:</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              data-testid="date"
            />
          </div>
          <div id="grid-item">
            <label htmlFor="gender">Gender:</label>
            <input
              type="text"
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              data-testid="gender"
            />
          </div>
        </div>
        <div>
          <label htmlFor="programStudy">Program Study:</label>
          <input
            type="text"
            id="programStudy"
            value={programStudy}
            onChange={(e) => setProgramStudy(e.target.value)}
            data-testid="prody"
          />
        </div>
        <button type="submit" data-testid="add-btn" id="add-btn">
          Add Student
        </button>
      </form>
    </>
  );
};

export default AddStudent;