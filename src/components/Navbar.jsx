import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div id="nav-left">
        <Link to="/" className="navbar-brand" data-testid="home-page">
          <h1>Student Portal</h1>
        </Link>
      </div>
      <div id="nav-right">
        <Link to="/student" data-testid="student-page">
          All Student
        </Link>
        <div id="nav-right">
        <Link to="/add" data-testid="add-page">
          Add Student
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
