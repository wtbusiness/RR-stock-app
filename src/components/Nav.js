import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/dashboard">
        <div>DASHBOARD</div>
      </Link>
      
    </div>
  );
}
