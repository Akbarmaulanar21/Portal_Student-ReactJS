import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


const Student = (props) => {
  const { students, setStudents, loading, setLoading, renderStudents } = props;
  const [faculty, setFaculty] = useState("All");


  useEffect(() => {
    setLoading(true);
    renderStudents();
  }, []);

  const handleDeleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const TableStudent = () => {
    return (
      students &&
      students.map((student, index) => {
        if (faculty === "All" || faculty === student.faculty) {
          return (
            <tr className="student-data-row" key={student.id}>
              <td>{index + 1}</td>
              <td>
                <Link to={`${student.id}`}>{student.fullname}</Link>
              </td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                <button
                  data-testid={`delete-${student.id}`}
                  onClick={() => handleDeleteStudent(student.id)}
                  class="delete-btn"
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        }
      })
    );
  }


  return (
    <>
      <Navbar />
      <div className="container">
        {loading === true ? (
          <p>Loading ...</p>
        ) : (
          <div className="col">
            <div className="row" id="filter">
              <select
                className="search"
                data-testid="filter"
                onChange={({ target }) => setFaculty(target.value)}
                id="btn-filter"
              >
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">
                  Fakultas Ilmu Sosial dan Politik
                </option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">
                  Fakultas Teknologi Informasi dan Sains
                </option>
              </select>
            </div>
            <div className="row">
              <table id="table-student">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Full Name</th>
                    <th>Faculty</th>
                    <th>Program Study</th>
                    <th>Option</th>
                  </tr>
                </thead>
                <tbody>
                  <TableStudent />
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default Student;
