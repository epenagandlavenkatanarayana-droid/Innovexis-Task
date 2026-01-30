import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Innovexis</Link>

      <div>
        {token && <Link className="btn btn-outline-light me-2" to="/">Dashboard</Link>}
        {role === "ADMIN" && <Link className="btn btn-outline-warning me-2" to="/admin">Admin</Link>}
        {!token && <Link className="btn btn-outline-info me-2" to="/login">Login</Link>}
        {!token && <Link className="btn btn-outline-success" to="/register">Register</Link>}
        {token && <button className="btn btn-danger" onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
}
