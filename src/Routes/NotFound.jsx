import { useNavigate } from "react-router-dom";
import eror from "../components/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  const NotClick = () => {
    navigate("");
  };

  return (
    <>
      <div className="not-found">
        <img src={eror} alt="Error 404" />
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
        <button data-testid="back" onClick={NotClick} id="btn-notfound">
          Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
